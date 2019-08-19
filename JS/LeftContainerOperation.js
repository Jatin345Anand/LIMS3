window.addEventListener('click',init);
var DD11,DD12,DD13,DD14,DD15,DD16,DD17,DD18;
var al11,al12;
var DD21,DD22,DD23,DD24,DD25;
var al21,al22;
var DD31;
var al31,al32;
var DD41;
var al41,al42;
var isshow11;
var rectd;
var isshowArrow1=true;
var isshowarrowandDropdown11;
var isshow12;
var isshowArrow2=true;
var isshowarrowandDropdown12;
var isshow13;
var isshowArrow3=true;
var isshowarrowandDropdown13;
var isshow14;
var isshowArrow4=true;
var isshowarrowandDropdown14;
var isshowHEadingmesage=true;
function init(){
    rectd = document.querySelector('#rectd');
    DD11 = document.querySelector('#DD11');
    DD12 = document.querySelector('#DD12');
    DD13 = document.querySelector('#DD13');
    DD14 = document.querySelector('#DD14');
    DD15 = document.querySelector('#DD15');
    DD16 = document.querySelector('#DD16');
    DD17 = document.querySelector('#DD17');
    DD18 = document.querySelector('#DD18');

    DD21 = document.querySelector('#DD21');
    DD22 = document.querySelector('#DD22');
    DD23 = document.querySelector('#DD23');
    DD24 = document.querySelector('#DD24');
    DD25 = document.querySelector('#DD25');

    DD31 = document.querySelector('#DD31');
   
    al11 = document.querySelector('#al11');
    al12 = document.querySelector('#al12');
    al21 = document.querySelector('#al21');
    al22 = document.querySelector('#al22');
    al31 = document.querySelector('#al31');
    al32 = document.querySelector('#al32');
    al41 = document.querySelector('#al41');
    al42 = document.querySelector('#al42');
    
    isshowarrowandDropdown11 = document.querySelector('#isshowarrowandDropdown11');
    
    isshow11 = document.querySelector('#isshow11');
    isshowarrowandDropdown11.addEventListener('click',ddisShow1);
    DD11.addEventListener('click',printMessage);
    DD12.addEventListener('click',printMessage);
    DD13.addEventListener('click',printMessage);
    DD14.addEventListener('click',printMessage);
    DD15.addEventListener('click',printMessage);
    DD16.addEventListener('click',printMessage);
    DD17.addEventListener('click',printMessage);
    DD18.addEventListener('click',printMessage);

    DD21.addEventListener('click',printMessage);
    DD22.addEventListener('click',printMessage);
    DD23.addEventListener('click',printMessage);
    DD24.addEventListener('click',printMessage);
    DD25.addEventListener('click',printMessage);
   
    DD31.addEventListener('click',printMessage);

    isshowarrowandDropdown12 = document.querySelector('#isshowarrowandDropdown12');
    
    isshow12 = document.querySelector('#isshow12');
    isshowarrowandDropdown12.addEventListener('click',ddisShow2);


    isshowarrowandDropdown13 = document.querySelector('#isshowarrowandDropdown13');
    
    isshow13 = document.querySelector('#isshow13');
    isshowarrowandDropdown13.addEventListener('click',ddisShow3);


    isshowarrowandDropdown14 = document.querySelector('#isshowarrowandDropdown14');
    
    isshow14 = document.querySelector('#isshow14');
    isshowarrowandDropdown14.addEventListener('click',ddisShow4);
}
function printMessage(){
    // console.log(DD11.innerHTML);
    if(isshowHEadingmesage){
        rectd.innerHTML = this.innerHTML;
        rectd.style.display='block';

    }
    else{
        
        rectd.style.display='none';
    }
    isshowHEadingmesage= !isshowHEadingmesage;
}
function ddisShow1(){
    console.log('drildown');
    console.log(isshow11);
    if(isshowArrow1){
        isshow11.style.display ='block';
        al11.style.display='inline-block';
        al12.style.display='none';

    }
    else{
        isshow11.style.display ='none';
        al11.style.display='none';
        al12.style.display='inline-block';
     }
     isshowArrow1 = ! isshowArrow1;
}
function ddisShow2(){
    console.log('drildown');
    console.log(isshow11);
    if(isshowArrow2){
        isshow12.style.display ='block';
        al21.style.display='inline-block';
        al22.style.display='none';
    }
    else{
        isshow12.style.display ='none';
        al21.style.display='none';
        al22.style.display='inline-block';
     }
     isshowArrow2 = ! isshowArrow2;
}

function ddisShow3(){
    console.log('drildown');
    console.log(isshow11);
    if(isshowArrow3){
        isshow13.style.display ='block';
        al31.style.display='inline-block';
        al32.style.display='none';
    }
    else{
        isshow13.style.display ='none';
        al31.style.display='none';
        al32.style.display='inline-block';
     }
     isshowArrow3 = ! isshowArrow3;
}

function ddisShow4(){
    console.log('drildown');
    console.log(isshow11);
    if(isshowArrow4){
        isshow14.style.display ='block';
        al41.style.display='inline-block';
        al42.style.display='none';
    }
    else{
        isshow14.style.display ='none';
        al41.style.display='none';
        al42.style.display='inline-block';
     }
     isshowArrow4 = ! isshowArrow4;
}
