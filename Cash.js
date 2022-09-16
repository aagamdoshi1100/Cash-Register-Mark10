
const billAmount = document.querySelector('#Bill-Amount');
const cashGiven = document.querySelector('#Cash-Given');
const checkButton = document.querySelector("#check");


checkButton.addEventListener("click", function Clik(){


    if(billAmount > 0){
        

        if(billAmount.value <= cashGiven.value){
    
            ShowMessage("Invalid");
        
           }else{
            console.log("hello");
           }


    }else{

        ShowMessage("Invalid Amount");
    }




   
});


function ShowMessage(message){
    console.log("working");
    document.getElementById('mess').innerHTML = message;
}