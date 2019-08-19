var XLS, PDF, FT, ST;
XLS = document.querySelector('#XLS');
PDF = document.querySelector('#PDF');
FT = document.querySelector('#FT');
ST = document.querySelector('#ST');
XLS.addEventListener('click', CreateandDownloadXLS);
PDF.addEventListener('click', CreateandDownloadPDF);
function CreateandDownloadPDF(){
    window.print();
}
function CreateandDownloadXLS() {
    console.log(firstTable);
    console.log(SecondTable);
    console.log(XLSX);
    var WB = XLSX.utils.book_new();
    WB.Props = {
        Tital: 'XLS Sheet',
        Subject: 'Test file',
        Author: "Jatin Anand",
        CreateDate: new Date(2019, 08, 09)
    };
    WB.SheetNames.push('Test Sheet');
    var WSData = [
    ];
    for (var i = 0; i < FT.rows.length; i++) {
        var ObjCell = FT.rows.item(i).cells;
        console.log('OBJCELL : ',ObjCell);
        var L1=[];
        for (var j = 0; j < ObjCell.length; j++) {
            L1.push(ObjCell.item(j).innerHTML);
            // console.log('OBJCELL V : ',ObjCell.item(i).innerHTML);
            // info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
        }
        WSData.push(L1);
    }
    console.log(WSData);
    var WS = XLSX.utils.aoa_to_sheet(WSData);
    WB.Sheets['Test Sheet'] = WS;
    var Wbout = XLSX.write(WB, {
        bookType: 'xlsx',
        type: 'binary'
    });
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }
    saveAs(new Blob([s2ab(Wbout)], {
        type: 'application/octet-stream'
    }), 'test.xlsx');
}