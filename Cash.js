
const billAmount = document.querySelector('#Bill-Amount');
const cashGiven = document.querySelector('#Cash-Given');
const checkButton = document.querySelector("#check");

 const cerr = document.querySelector("#mess");
 const label = document.querySelector("#l1");



 function Popup(){
    
    cashGiven.style.display = "flex";
    label.style.display = "flex";

}


checkButton.addEventListener("click", function Clik(){


        var bill = Number(billAmount.value);
        var collection = Number(cashGiven.value);

        if(bill > 0 && collection > 0){
            console.log(typeof(bill))
                    if(bill < collection){
                        ShowMessage("");
                        var finalCash = collection - bill;
                        clearOp();
                        FinalCashReturnToUser(finalCash);
                    }else{
                        ShowMessage("Bill amount is more. Please give more cash");
                        console.log("Hello")
                        clearOp();
                    }

        }else{
            ShowMessage("Please enter valid value. Value must be positive");
            clearOp();  
        }




})


function ShowMessage(message){
    cerr.style.color="Red";
    cerr.innerText = message;
}



function FinalCashReturnToUser(fcash){
   
    if (fcash > 2000){
        Thou(fcash);
    }else if(fcash > 500){
        Hund(fcash);
    }else if(fcash > 100){
        H(fcash);
    }else if(fcash > 20){
        Twenty(fcash);
    }else if(fcash > 10){
        Tens(fcash);
    }else if(fcash > 5){
        Five(fcash);
    }else if(fcash >= 1){
        One(fcash);
    }

}




function Thou(fcash){

    cash = fcash /2000;
    // console.log(cash100);
    changes = fcash%2000; //1450
    // console.log(changes);
    document.getElementById('1').innerHTML = ~~cash;
//1
if(changes > 500){
        Hund(changes);
}else{
    H(changes);
}
}

function Hund(fcash){

    cash = fcash /500;
    // console.log(cash100);
    changes = fcash%500;
    // console.log(changes);
    document.getElementById('2').innerHTML = ~~cash;
     if(changes > 100){
        H(changes);
     }else{
        Twenty(changes);
     }
}

function H(fcash){

    cash = fcash /100;
    // console.log(cash100);
    changes = fcash%100;
    // console.log(changes);
    document.getElementById('3').innerHTML = ~~cash;
    if(changes > 20){
        Twenty(changes);
     }else{
        Tens(changes);
     }
}
function Twenty(fcash){

    cash = fcash /20;
    // console.log(cash100);
    changes = fcash%20;
    // console.log(changes);
    document.getElementById('4').innerHTML = ~~cash;
    if(changes > 10){
        Tens(changes);
     }else{
        Five(changes);
     }
}

function Tens(fcash){

    cash = fcash /10;
    // console.log(cash100);
    changes = fcash%10;
    // console.log(changes);
    document.getElementById('5').innerHTML = ~~cash;
    if(changes > 5){
        Five(changes);
     }else{
        One(changes);
     }
}

function Five(fcash){

    cash = fcash /5;
    // console.log(cash100);
    changes = fcash%5;
    console.log(changes);
    document.getElementById('6').innerHTML = ~~cash;
    if(changes >= 1){
        One(changes);
     }
}

function One(fcash){

    cash = fcash /1;
    // console.log(cash100);
    changes = fcash%1;
    // console.log(changes);
    document.getElementById('7').innerHTML = ~~cash;

}


function clearOp(){
            document.getElementById('1').innerHTML = "";
            document.getElementById('2').innerHTML = "";
            document.getElementById('3').innerHTML = "";
            document.getElementById('4').innerHTML = "";
            document.getElementById('5').innerHTML = "";
            document.getElementById('6').innerHTML = "";
            document.getElementById('7').innerHTML = "";
}