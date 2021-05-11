/*Randy Randall
CS290
Assignment 4
*/
console.log("Can you see me?");


function roll() {
    console.log("Rolling");
    for (let i = 1; i <= 5; i++) {
        if (isLocked(i) === false) {
            setDie(i, Math.ceil(Math.random(i) * 6));
        }
    }
}

function score() {

    console.log("Scoring");
    let allDice = [0, 0, 0, 0, 0];
    for (let i = 1; i <= 5; i++) {
        allDice[i - 1] = parseInt(getDieValue(i), 10);
    }
    allDice.sort();
    console.log(allDice);
    let message = "";
    let counts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i <= 5; i++) {
        if (allDice[i] === 1)
            counts[0] += 1;
        if (allDice[i] === 2)
            counts[1] += 1;
        if (allDice[i] === 3)
            counts[2] += 1;
        if (allDice[i] === 4)
            counts[3] += 1;
        if (allDice[i] === 5)
            counts[4] += 1;
        if (allDice[i] === 6)
            counts[5] += 1;
    }

    message += countNumbers(allDice, message);
    message += threeKind(counts, allDice, message);
    message += fourKind(counts, allDice, message);
    message += fiveKind(counts, allDice, message);
    message += chance(allDice, message);
    message += fullHouse(counts, message);
    message += smallStraight(allDice, message);
    message += largeStraight(allDice, message);

    console.log(counts);

    displayScoring(message);
}

function countNumbers(arrayCount, message) {
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let totalmessage = "";
    for (let i = 0; i <= 5; i++) {
        if (arrayCount[i] === 1)
            one++;
        if (arrayCount[i] === 2)
            two += 2;
        if (arrayCount[i] === 3)
            three += 3;
        if (arrayCount[i] === 4)
            four += 4;
        if (arrayCount[i] === 5)
            five += 5;
        if (arrayCount[i] === 6)
            six += 6;
    }
    if (one !== 0) {
        totalmessage += "score of ones: " + one + "\n";
    }
    if (two !== 0) {
        totalmessage += "score of twos: " + two + "\n";
    }
    if (three !== 0) {
        totalmessage += "score of threes: " + three + "\n";
    }
    if (four !== 0) {
        totalmessage += "score of fours: " + four + "\n";
    }
    if (five !== 0) {
        totalmessage += "score of fives: " + five + "\n";
    }
    if (six !== 0) {
        totalmessage += "score of sixes: " + six + "\n";
    }
    return totalmessage;

}

function threeKind(array, arrayDice, message) {

    let total = 0;
    let test = false;
    for (let i = 0; i <= 6; i++) {
        if (array[i] >= 3)
            test = true;
    }
    if (test) {
        for (let i = 0; i <= 4; i++) {
            total += arrayDice[i];
        }
        return "three of a kind: " + total + "\n";
    }
    return "";


}

function fourKind(array, arrayDice, message) {

    let total = 0;
    let test = false;
    for (let i = 0; i <= 6; i++) {
        if (array[i] >= 4)
            test = true;
    }
    if (test) {
        for (let i = 0; i <= 4; i++) {
            total += arrayDice[i];
        }
        return "four of a kind: " + total + "\n";
    }
    return "";
}

function fiveKind(array, arrayDice, message) {

    let total = 0;
    let test = false;
    for (let i = 0; i <= 6; i++) {
        if (array[i] >= 5)
            test = true;
    }
    if (test) {
        for (let i = 0; i <= 4; i++) {
            total += arrayDice[i];
        }
        return "five of a kind: " + total + "\n";
    }
    return "";
}


function yahtzee(array, message) {
    if (allDice[0] === allDice[1] === allDice[2] === allDice[3] === allDice[4])
        return "YAHTZEE!";
}

function chance(array, message) {
    let total = 0;
    for (let i = 0; i <= 4; i++) {
        total += array[i];

    }
    return "chance: " + total + "\n";

}

function fullHouse(array, message) {
    let total = 0;
    let test1 = false;
    let test2 = false;
    for (let i = 0; i <= 6; i++) {
        if (array[i] >= 3)
            test1 = true;
    }
    if (test1) {
        for (let i = 0; i <= 6; i++) {
            if (array[i] === 2)
                test2 = true;
        }
    }
    if (test1 === true && test2 === true) {
        total = 25;
        return "score of fullhouse: " + total + "\n";
    }
    return "";
}

function smallStraight(array, message) {

    let total = 0;
    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    let six = false;

    for (let i = 0; i <= 4; i++) {
        if (array[i] === 1) {
            one = true;
        }
        if (array[i] === 2) {
            two = true;
        }
        if (array[i] === 3) {
            three = true;
        }
        if (array[i] === 4) {
            four = true;
        }
        if (array[i] === 5) {
            five = true;
        }
        if (array[i] === 6) {
            six = true;
        }
    }


    if ((four === true && three === true) && (one === true && two === true) || (two === true && three === true) && (four === true && five === true) || (three === true && four === true) && (five === true && six === true)) {
        total = 30;
        return "score of smallstraight: " + total + "\n";
    }

    return "";
}

function largeStraight(array, message) {

    let counter = 0;
    for (let i = 0; i < 4; i++) {
        if (array[i + 1] - array[i] === 1) {
            ++counter;
        }
    }
    if (counter === 4) {
        return "score of large straight: 40 \n";
    }
    return "";

}
//Attempted one-liner, bad idea. 
//let smallStraight = (array) => array.filter((num, index) => num + 1 === array[index + 1]).length > 2 ? "score of smallstraight: 30\n" : "score of smallstraight: 0\n";



//------------------------------------------------
//YOUR CODE ABOVE
//You may call the functions listed below but should not modify them

//returns the value showing on the given die (1-5)
function getDieValue(dieNumber) {
    let die = document.getElementById('die' + dieNumber);
    return die.textContent;
}

//Changes the given die number (1-5) to the given value (1-6)
function setDie(dieNumber, value) {
    let die = document.getElementById('die' + dieNumber);
    let regex = /\d+/;
    die.className = die.className.replace(regex, value);
    die.innerText = value;
}

//returns true if the given die number (1-5) is in the locked state, false if not
function isLocked(dieNumber) {
    let die = document.getElementById('die' + dieNumber);
    return die.className.indexOf("-fill") != -1;
}

//displays the message in the scoring information textarea
function displayScoring(message) {
    let textarea = document.getElementById('score-report');
    textarea.value = message;
}