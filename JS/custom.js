window.addEventListener('load', init);
var ar11, ar12, d1;
var ar21, ar22, d2;
var ar31, ar32, d3;
var ar41, ar42, d4;
var ar51, ar52, d5;
var ar61, ar62, d6;
var ishow1 = false;
var ishow2 = false;
var ishow3 = false;
var ishow4 = false;
var ishow5 = false;
var ishow6 = false;
var ddi11, ddi12, ddi13, span1;
var ddi21, ddi22, ddi23, ddi24,ddi25, span2;
var ddi31, ddi32, ddi33, span3;
var ddi41, ddi42, ddi43,ddi44, span4;
var ddi51, ddi52, ddi53, ddi54, span5;
var ddi61, ddi62, ddi63,ddi63,ddi65, span6;

var ddi1show = false;
var ddi2show = false;
var ddi3show = false;
var ddi4show = false;
var ddi5show = false;
var ddi6show = false;
var showentry, search;
var ishowEntry = true;
var selent, firstTable, SecondTable, Files;
var isFirstTable = true,
    isSecondTable = true;
var close;

function init() {
    console.log('widnow is loaded');
    ar11 = document.querySelector('#ar11');
    ar12 = document.querySelector('#ar12');
    d1 = document.querySelector('#d1');
    ar21 = document.querySelector('#ar21');
    ar22 = document.querySelector('#ar22');
    d2 = document.querySelector('#d2');
    ar31 = document.querySelector('#ar31');
    ar32 = document.querySelector('#ar32');
    d3 = document.querySelector('#d3');
    ar41 = document.querySelector('#ar41');
    ar42 = document.querySelector('#ar42');
    d4 = document.querySelector('#d4');
    ar51 = document.querySelector('#ar51');
    ar52 = document.querySelector('#ar52');
    d5 = document.querySelector('#d5');
    ar61 = document.querySelector('#ar61');
    ar62 = document.querySelector('#ar62');
    d6 = document.querySelector('#d6');
    ddi11 = document.querySelector('#ddi11');
    ddi12 = document.querySelector('#ddi12');
    ddi13 = document.querySelector('#ddi13');
    ddi14 = document.querySelector('#ddi14');
    // ddi15 = document.querySelector('#ddi15');
    // ddi16 = document.querySelector('#ddi16');
    span1 = document.querySelector('#span1');
    ddi11.addEventListener('change', changeChacked1);

    ddi21 = document.querySelector('#ddi21');
    ddi22 = document.querySelector('#ddi22');
    ddi23 = document.querySelector('#ddi23');
    ddi24 = document.querySelector('#ddi24');
    ddi25 = document.querySelector('#ddi25');
    span2 = document.querySelector('#span2');
    ddi21.addEventListener('change', changeChacked2);

    ddi31 = document.querySelector('#ddi31');
    ddi32 = document.querySelector('#ddi32');
    ddi33 = document.querySelector('#ddi33');
    span3 = document.querySelector('#span3');
    ddi31.addEventListener('change', changeChacked3);

    ddi41 = document.querySelector('#ddi41');
    ddi42 = document.querySelector('#ddi42');
    ddi43 = document.querySelector('#ddi43');
    ddi44 = document.querySelector('#ddi44');
    // ddi45 = document.querySelector('#ddi45');
    span4 = document.querySelector('#span4');
    ddi41.addEventListener('change', changeChacked4);

    
    ddi51 = document.querySelector('#ddi51');
    ddi52 = document.querySelector('#ddi52');
    ddi53 = document.querySelector('#ddi53');
    ddi54 = document.querySelector('#ddi54');
    span5 = document.querySelector('#span5');
    ddi51.addEventListener('change', changeChacked5);
    
    ddi61 = document.querySelector('#ddi61');
    ddi62 = document.querySelector('#ddi62');
    ddi63 = document.querySelector('#ddi63');
    ddi64 = document.querySelector('#ddi64');
    ddi65 = document.querySelector('#ddi65')
    span6 = document.querySelector('#span6');
    ddi61.addEventListener('change', changeChacked6);

    search = document.querySelector('#search');
    showentry = document.querySelector('#showentry');
    document.querySelector('#isshowarrowandDropdown1').addEventListener('click', isshowdicarrow1);
    document.querySelector('#isshowarrowandDropdown2').addEventListener('click', isshowdicarrow2);
    document.querySelector('#isshowarrowandDropdown3').addEventListener('click', isshowdicarrow3);
    document.querySelector('#isshowarrowandDropdown4').addEventListener('click', isshowdicarrow4);
    document.querySelector('#isshowarrowandDropdown5').addEventListener('click', isshowdicarrow5);
    document.querySelector('#isshowarrowandDropdown6').addEventListener('click', isshowdicarrow6);
    search.addEventListener('click', showEntry);
    selent = document.querySelector('#selent');
    selent.addEventListener('change', showfirsttable);
    firstTable = document.querySelector('#firstTable');
    SecondTable = document.querySelector('#SecondTable');
    close = document.querySelector('#close');
    Files = document.querySelector('#files');
  
    // close.addEventListener('click', RemoveEverything);
   
}
function CreateandDownloadPDF(){

} 
function CreateandDownloadXLS() {
}
function RemoveEverything() {
    // firstTable.style.display ="none";
    Files.style.display = 'block';
    SecondTable.style.display = "none";
}

function showfirsttable() {
    console.log(selent, selent.value);
    if (selent.value == "1") {
        firstTable.style.display = 'block';
        SecondTable.style.display = 'block';
    } else {
        firstTable.style.display = 'none';
        SecondTable.style.display = 'none';
    }
    isFirstTable = !isFirstTable;
}

function showEntry() {
    if (ishowEntry) {
        showentry.style.display = 'block';
    } else {
        showentry.style.display = 'none';
    }
    ishowEntry = !ishowEntry;
}

function changeChacked1() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi1show == true) {

        ddi12.checked = false;
        ddi13.checked = false;
        
    } else {
        ddi12.checked = true;
        ddi13.checked = true;
       

    }
    ddi1show = !ddi1show;

}

function changeChacked2() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi2show == true) {

        ddi22.checked = false;
        ddi23.checked = false;
        ddi24.checked = false;
        ddi25.checked = false;

    } else {
        ddi22.checked = true;
        ddi23.checked = true;
        ddi24.checked = true;
        ddi25.checked = true;
    }
    ddi2show = !ddi2show;

}

function changeChacked3() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi3show == true) {

        ddi32.checked = false;
        ddi33.checked = false;
    
    } else {
        ddi32.checked = true;
        ddi33.checked = true;
        

    }
    ddi3show = !ddi3show;

}

function changeChacked4() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi4show == true) {

        ddi42.checked = false;
        ddi43.checked = false;
        ddi44.checked = false;
      

    } else {
        ddi42.checked = true;
        ddi43.checked = true;
        ddi44.checked = true;
      
    }
    ddi4show = !ddi4show;

}
function changeChacked5() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi5show == true) {

        ddi52.checked = false;
        ddi53.checked = false;
        ddi54.checked = false;
  

    } else {
        ddi52.checked = true;
        ddi53.checked = true;
        ddi54.checked = true;
      

    }
    ddi5show = !ddi5show;

}
function changeChacked6() {
    // console.log('change chacked', ddi11.checked, ddi12.checked, ddi13.checked, ddi14.checked, ddi11.value);
    // console.log(`vbn = ${ddi11}`);
    if (ddi6show == true) {

        ddi62.checked = false;
        ddi63.checked = false;
        ddi64.checked = false;
        ddi65.checked = false;
    } else {
        ddi62.checked = true;
        ddi63.checked = true;
        ddi64.checked = true;
        ddi65.checked = true;
    }
    ddi6show = !ddi6show;

}
function DrawAllChackedNumber1() {
    var sum = 0;

    if (ddi12.checked) {
        sum++;
    }
    if (ddi13.checked) {
        sum++;
    }
  
    console.log('sum :', sum);
    if (sum > 0) {
        span1.innerHTML = sum.toString() + " Selected";
        span1.style.display = 'inline-block';
    }


}

function DrawAllChackedNumber2() {
    var sum = 0;

    if (ddi22.checked) {
        sum++;
    }
    if (ddi23.checked) {
        sum++;
    }
    if (ddi24.checked) {
        sum++;
    }
    if (ddi25.checked) {
        sum++;
    } 
    console.log('sum :', sum);
    if (sum > 0) {
        span2.innerHTML = sum.toString() + " Selected";
        span2.style.display = 'inline-block';
    }


}

function DrawAllChackedNumber3() {
    var sum = 0;

    if (ddi32.checked) {
        sum++;
    }
    if (ddi33.checked) {
        sum++;
    }
    
    console.log('sum :', sum);
    if (sum > 0) {
        span3.innerHTML = sum.toString() + " Selected";
        span3.style.display = 'inline-block';
    }


}

function DrawAllChackedNumber4() {
    var sum = 0;

    if (ddi42.checked) {
        sum++;
    }
    if (ddi43.checked) {
        sum++;
    }
    if (ddi44.checked) {
        sum++;
    }
   
    console.log('sum :', sum);
    if (sum > 0) {
        span4.innerHTML = sum.toString() + " Selected";
        span4.style.display = 'inline-block';
    }


}

function DrawAllChackedNumber5() {
    var sum = 0;

    if (ddi52.checked) {
        sum++;
    }
    if (ddi53.checked) {
        sum++;
    }
    if (ddi54.checked) {
        sum++;
    }
  
    console.log('sum :', sum);
    if (sum > 0) {
        span5.innerHTML = sum.toString() + " Selected";
        span5.style.display = 'inline-block';
    }


}
function DrawAllChackedNumber6() {
    var sum = 0;

    if (ddi62.checked) {
        sum++;
    }
    if (ddi63.checked) {
        sum++;
    }
    if (ddi64.checked) {
        sum++;
    }
    if (ddi65.checked) {
        sum++;
    }
    console.log('sum :', sum);
    if (sum > 0) {
        span6.innerHTML = sum.toString() + " Selected";
        span6.style.display = 'inline-block';
    }


}
function isshowdicarrow1() {
    // console.log(ar1,ar2,d1);
    if (ishow1 == true) {
        ar11.style.display = "none";
        ar12.style.display = "inline-block";
        d1.style.display = "none";
        DrawAllChackedNumber1();
    } else {
        ar12.style.display = "none";
        d1.style.display = "block";
        ar11.style.display = "inline-block";
        span1.style.display = 'none';
    }
    ishow1 = !ishow1;
}

function isshowdicarrow2() {
    // console.log(ar1,ar2,d1);
    if (ishow2 == true) {
        ar21.style.display = "none";
        ar22.style.display = "inline-block";
        d2.style.display = "none";
        DrawAllChackedNumber2();
    } else {
        ar22.style.display = "none";
        d2.style.display = "block";
        ar21.style.display = "inline-block";
        span2.style.display = 'none';
    }
    ishow2 = !ishow2;
}

function isshowdicarrow3() {
    // console.log(ar1,ar2,d1);
    if (ishow3 == true) {
        ar31.style.display = "none";
        ar32.style.display = "inline-block";
        d3.style.display = "none";
        DrawAllChackedNumber3();
    } else {
        ar32.style.display = "none";
        d3.style.display = "block";
        ar31.style.display = "inline-block";
        span3.style.display = 'none';
    }
    ishow3 = !ishow3;
}

function isshowdicarrow4() {
    // console.log(ar1,ar2,d1);
    if (ishow4 == true) {
        ar41.style.display = "none";
        ar42.style.display = "inline-block";
        d4.style.display = "none";
        DrawAllChackedNumber4();
    } else {
        ar42.style.display = "none";
        d4.style.display = "block";
        ar41.style.display = "inline-block";
        span4.style.display = 'none';
    }
    ishow4 = !ishow4;
}
function isshowdicarrow5() {
    // console.log(ar1,ar2,d1);
    if (ishow5 == true) {
        ar51.style.display = "none";
        ar52.style.display = "inline-block";
        d5.style.display = "none";
        DrawAllChackedNumber5();
    } else {
        ar52.style.display = "none";
        d5.style.display = "block";
        ar51.style.display = "inline-block";
        span5.style.display = 'none';
    }
    ishow5 = !ishow5;
}
function isshowdicarrow6() {
    // console.log(ar1,ar2,d1);
    if (ishow6 == true) {
        ar61.style.display = "none";
        ar62.style.display = "inline-block";
        d6.style.display = "none";
        DrawAllChackedNumber6();
    } else {
        ar62.style.display = "none";
        d6.style.display = "block";
        ar61.style.display = "inline-block";
        span6.style.display = 'none';
    }
    ishow6 = !ishow6;
}