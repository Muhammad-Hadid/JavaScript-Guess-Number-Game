let num = Math.floor(Math.random() * 20) + 1;
let body=document.querySelector("body");
let info=document.querySelector(".message");
let number= document.querySelector(".number")
let score= document.querySelector(".score")
let hs= document.querySelector(".highscore")
let again= document.querySelector(".btn again")

console.log(num);
let userinput=document.getElementsByClassName("guess")[0]




const checkNumber = () => {
    let uservalue = userinput.value; 
    if (uservalue == num) {
        // alert("You find a correct number");
        body.style.backgroundColor = "green";
        info.innerText = "You Find a correct number!"; 
        number.innerText=num;
        if(uservalue == num){
            hs.innerText=parseInt(score.innerText)
                    }

    } else {
        // alert("You entered a wrong number");
        info.innerText = "Try Again!"; 
        number.innerText="❌";
        if(uservalue != num){
score.innerText=parseInt(score.innerText)-1;
        }
       

    }
}

function reset() {
    body.style.backgroundColor = "#222";
    info.innerText = "Start guessing..."; 
    number.innerText="?";
    score.innerText="20";
    hs.innerText="0";

}