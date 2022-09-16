
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

function FinalCashReturnToUser(fcash){

    if(fcash > 2000)
    {
        var cash = fcash /2000;  //devide and will give no of notes
        var changes = fcash%2000;//will give rest amount more than 2000
        document.getElementById('2k').innerHTML = ~~cash;//~~ It cuts all fractional digits.
        console.log(changes);
       
    }else{  } 
    
    if (changes > 500){

     cash500 = changes /500;
     console.log(cash500);
     changes500 = changes%500;
     document.getElementById('5h').innerHTML = ~~cash500;

    }else{  }
    console.log(changes500);

    // if (changes500 > 100){

    //     cash100 = changes500 /100;
    //     console.log(cash100);
    //     changes100 = changes%100;
    //     console.log(changes100);
    //     document.getElementById('1h').innerHTML = ~~cash100; 
    // }else{  }
 
    // if (changes100 > 20){

    //     cash20 = changes100 /20;
    //     console.log(cash20);
    //     changes20 = changes%20;
    //     console.log(changes20);
    //     document.getElementById('20').innerHTML = ~~cash20; 
    // }else{  }

    // if (changes20 > 10){
    //     cash10 = changes20 /10;
    //     console.log(cash10);
    //     changes10 = changes%10;
    //     console.log(changes10);
    //     document.getElementById('10').innerHTML = ~~cash10; 
    // }else{  }

    // if (changes10 > 5){
    //     cash5 = changes10 /5;
    //     console.log(cash5);
    //     changes5 = changes%5;
    //     document.getElementById('5').innerHTML = ~~cash5; 
    // }else{  }

    // if (changes5 > 1){
    //     cash1 = changes20 /1;
    //     console.log(cash1);
    //     changes1 = changes%1;
    //     document.getElementById('1').innerHTML = ~~cash1; 
    // }else{  }

}


function ShowMessage(message){
 
    document.getElementById('mess').innerHTML = message;
}