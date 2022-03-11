// player cards
let firstcard = getrandomcard();
let secondcard = getrandomcard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
// dealer cards
let firstdealer = getrandomcard();
let dcards = [firstdealer];
let dsum = firstdealer;
// elements from the html
let message = "";
let changemessage = document.getElementById("message-el");
let sumel = document.getElementById("sum-el");
let cardsel = document.getElementById("card-el");
let dealered = document.getElementById("dealer-el");
let newcardbtn = document.getElementById("newcard-el");
let holdbtn = document.getElementById("hold-el");
let startbtn = document.getElementById("start-el");
dontdisplaybtn()

// let playermoney = document.getElementById("money-el");

// let player = {
//         name: "ron",
//         money: 100
// }

// playermoney.textContent = player.name + ": $" + player.money;

function displaybtn() {
        newcardbtn.style.display = "inline";
        holdbtn.style.display = "inline";
        startbtn.style.display = "none";
}

function dontdisplaybtn() {
        newcardbtn.style.display = "none";
        holdbtn.style.display = "none";
        startbtn.style.display = "inline";
}

function getrandomcard() {
        let random = Math.floor(Math.random() * 13) + 1;
        if (random === 1) {
                return 11;
        } else if (random > 10) {
                return 10;
        } else {
                return random;
        }
}

function hold() {
        while (dsum < 17) {
        let newdcard = getrandomcard();
        dsum += newdcard
        dcards.push(newdcard)
        dealered.textContent = `Dealer cards: ${dcards}`;
        }       if (dsum > sum && dsum <= 21) {
                        message = "dealer won you lost!";
        }       else if (dsum === sum) {
                        message = "its a draw!";
        }        else {
                        message = "dealer lost you won!";
        }               
        changemessage.textContent = message
        dontdisplaybtn()
}

function display() {
        displaybtn()
        dealered.textContent = `Dealer cards: ${dcards}`;
        cardsel.textContent = `Cards: ${cards}`;
        sumel.textContent = `Sum: ${sum}`;
        if (sum < 21) {
                message = "do you want another card?"
        }   else if (sum === 21) {
                message = "blackjack"
                dontdisplaybtn()
        }   else {
                message = "too high number game over for you"
                dontdisplaybtn()
        }
        changemessage.textContent = message
}

function newgame() {
        location.reload()
}

function newcard() {
        let newcard = getrandomcard();
        sum += newcard;
        cards.push(newcard)
        display()
}