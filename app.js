var billAmount = document.getElementById("bill-amount");
var cashGiven = document.getElementById("cash-given");
var button = document.getElementById('return');
var message = document.getElementById('error-message');
var noOfNotes = document.querySelectorAll(".no-of-notes");

// const availablenotes = ["2000","500","100","20","10","5","1"];
const availablenotes = [2000,500,100,20,10,5,1];


button.addEventListener('click', function(){
    message.style.display = 'none';
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            const amountreturned = cashGiven.value - billAmount.value;
            calculateSum(amountreturned);
        }else{
            showmessage("The cash provided should atleast to be equal to the bill amount");

        }
    }else{
        showmessage("invalid amount");
    }
})
 
function calculateSum(amountreturned){
    for(let i = 0; i < availablenotes.length;i++){
        const numberofnotes = Math.trunc(
            amountreturned / availablenotes[i]
            );
        amountreturned %= availablenotes[i];
        noOfNotes[i].innerHTML = numberofnotes;
    }
}

function showmessage(display){
    message.innerHTML = display;
    message.style.display = 'block';
}







 