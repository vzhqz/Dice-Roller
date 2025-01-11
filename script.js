
const diceText = document.getElementById("diceText");
const diceImages = document.getElementById("diceImages");

function roll() {
    const diceNum = document.getElementById("diceNum").value;
    let dice = [];
    let diceImg = [];
    
    if(diceNum === "" || diceNum < 1) {
        window.alert("Please enter a valid number!");
        return;
    }
    
    for(let i = 1; i <= diceNum; i++) {
        const randomDice = Math.floor(Math.random() * 6 + 1);
        dice.push(randomDice);
        diceImg.push(`<img src="diceImages/${randomDice}.png" alt="Dice ${randomDice}">`);
    }

    diceText.textContent = `Dice: ${dice.join(", ")}`
    diceImages.innerHTML = diceImg.join("");

}