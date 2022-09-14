console.log("Running");
let name = prompt("Enter you name")
let noHole = prompt(`Hi, ${name}! Would you like to play 3 or 6 holes today?`)

let totalScore = 0;
let par = 0;


if (noHole == 3) {
    for( i = 1; i <= 3; i++){
        let score = parseInt( prompt(`How many putts for hole ${i}`) )
        totalScore = totalScore + score  
    }
    par = 9  
}
else if(noHole == 6){
    for( i = 1; i <= 6; i++){
        let score = parseInt( prompt(`How many putts for hole ${i}`) )
        totalScore = totalScore + score    
    }
    par = 18
}
else {
    alert("You entered wrong input.")
}

let x = totalScore-par;

if (x > 0) {
    console.log(`Nice try, ${name}... Your total par was: +${x}.`);
}
else if (x < 0) {
    console.log(`Great job, ${name}! Your total par was: ${x}.`);
}
else {
    console.log(`Good game, ${name}. Your total par was: 0.`);
}