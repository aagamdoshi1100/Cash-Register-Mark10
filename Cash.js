
const billAmount = document.querySelector('#Bill-Amount');
const cashGiven = document.querySelector('#Cash-Given');
const checkButton = document.querySelector("#check");



checkButton.addEventListener("click", function Clik(){


    if(billAmount.value > 0){
        
        if(billAmount.value >= cashGiven.value){
    
            ShowMessage("Amount cannot be the less than the bill");
        
           }else{

            var finalCash = cashGiven.value -billAmount.value;
            FinalCashReturnToUser(finalCash);

           }
    }else{

        ShowMessage("Invalid Amount");
    }
   
});


const aNotes = [2000, 500, 100, 20, 10, 5, 1];
console.log(aNotes.length);

function FinalCashReturnToUser(finalCash){
    const noof = document.querySelector(".abc");
    
    for (let i=0; i< 7; i++){

        console.log(finalCash);
        var calci = Math.trunc(finalCash /= aNotes[i]);
        finalCash %= aNotes[i]; 
        console.log(calci);
        noof[i].innerText=calci;
    }

}


function ShowMessage(message){
 
    document.getElementById('mess').innerHTML = message;
}