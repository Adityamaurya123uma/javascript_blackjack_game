let firstnumber = 10;
let secondnumber = 9;
let sum = firstnumber + secondnumber;
let hasBlackJack = false;
let isAlive = true;
let message ="";
let messageel = document.getElementById('message-el');
let sumel = document.getElementById('sum-el');
let cardel = document.getElementById('card-el');

function startgame(){
    rendergame();
}

function rendergame(){

    sumel.textContent = "Sums:" + " "+sum;
    cardel.textContent ="Card: " + " "+firstnumber+" "+secondnumber;

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message ="You won!!!";
        hasBlackJack = true;
    }else{
        message = "You loose!";
        isAlive = false;
    }
    messageel.textContent=message;
    
}

function newcard(){
    console.log('drawinf new card.');
    let newcard = 2;
    sum += newcard;
    rendergame();
}
