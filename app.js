const PC_KCALG = 4;
const F_KCALG = 9;
const pgDaily_p = document.getElementsByClassName('pgdaily');
const pKcalDaily_p = document.getElementsByClassName('pkdaily');
const ppercDaily_p = document.getElementsByClassName('ppdaily');
const fgDaily_p = document.getElementsByClassName('fgdaily');
const fKcalDaily_p = document.getElementsByClassName('fkdaily');
const fpercDaily_p = document.getElementsByClassName('fpdaily')
const cgDaily_p = document.getElementsByClassName('cgdaily');
const cKcalDaily_p = document.getElementsByClassName('ckdaily');
const cpercDaily_p = document.getElementsByClassName('cpdaily');
var kcalDaily = document.getElementById("kcalDaily").value;
var bodyWeight = document.getElementById("bodyWeight").value;
var protein_gKg = document.getElementById("proteingKg").value;
var fat_gKg = document.getElementById("fatgKg").value;

// Calculate daily proteins kcal intake and create variable for daily P grams
function calcDailyProKcal() {
    var dailyProG = bodyWeight * protein_gKg;
    var dailyProKcal = dailyProG * PC_KCALG;
    return dailyProKcal;
}

// Calculate daily fats kcal intake and create variable for daily F grams
function calcDailyFatKcal() {
    var dailyFatG = bodyWeight * fat_gKg;
    var dailyFatKcal = dailyFatG * F_KCALG;
    return dailyFatKcal;
}

// Calculate daily Carbs grams and kcal using F and P daily kcal
function calcDailyCarbG() {
    var dailyCarbKcal = kcalDaily - (dailyProKcal + dailyFatKcal);
    var dailyCarbG = dailyCarbKcal / PC_KCALG;
    return dailyCarbG
}

