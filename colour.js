var numberOfSquares = 6;
var colour = [];
var pickedColour;
var square = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init()
{
    setupMode();
    setupsquares();
    reset();
}

function setupMode(){
    for(var i = 0; i < modeButton.length; i++)
        {
            modeButton[i].addEventListener("click",function(){
                modeButton[0].classList.remove("selected");
                modeButton[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
                reset();
            });
        }
}

function setupsquares(){
    for(var i = 0; i < square.length; i++)
        {
            square[i].addEventListener("click", function(){
            var clickedColour = this.style.backgroundColor;
            console.log(clickedColour,pickedColour);
            if(clickedColour === pickedColour)
                { 
                    messageDisplay.textContent = "CORRECT !!";
                    trueParty(clickedColour);
                    header.style.background = clickedColour;
                    resetButton.textContent = "Play Again?";
                }
        
            else
            {
                 messageDisplay.textContent = "WRONG !";
                 this.style.backgroundColor = "#232323";
            }
           });
        }
}

function reset(){
    colour = generateRandomColour(numberOfSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    header.style.backgroundColor = "blueviolet";
    messageDisplay.textContent = "";
    resetButton.textContent = "NEW COLOURS";
    for(var i = 0; i < square.length; i++)
    {
        if(colour[i])
            {
                square[i].style.display = "block";
                square[i].style.backgroundColor = colour[i];
            } 
         else square[i].style.display = "none";
    }
}

resetButton.addEventListener("click",function(){
    reset();
})

function trueParty(clr)
{
    for(var i = 0; i < colour.length; i++)
    {
        square[i].style.backgroundColor = clr;
    }
}

function pickColour()
{
   return colour[Math.floor(Math.random() * colour.length)] ;
}

function generateRandomColour(num)
{
    var arr = [];
    for(var i = 0; i < num; i++) arr.push(randomColour());
    return arr;
}

function randomColour(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
