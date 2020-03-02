const theForm = document.forms["macroForm"];
const PC_KCALG = 4;
const F_KCALG = 9;

var pgDaily_p = document.getElementById('pgdaily');
var pKcalDaily_p = document.getElementById('pkdaily');
var ppercDaily_p = document.getElementById('ppdaily');

var fgDaily_p = document.getElementById('fgdaily');
var fKcalDaily_p = document.getElementById('fkdaily');
var fpercDaily_p = document.getElementById('fpdaily');

var cgDaily_p = document.getElementById('cgdaily');
var cKcalDaily_p = document.getElementById('ckdaily');
var cpercDaily_p = document.getElementById('cpdaily');
 
var kcalDaily = document.getElementById("kcalDaily");
var bodyWeight = document.getElementById("bodyWeight");
var protein_gKg = document.getElementById("proteingKg");
var fat_gKg = document.getElementById("fatgKg");

var imperial = document.getElementById('imperial');

var unitMetric = $("#unitMetric, #unitMetricPro, #unitMetricFat");
var unitImperial = $("#unitImperial, #unitImperialPro, #unitImperialFat");

// show and hide metric/imperial unit after selecting radio
function toggleUnit() {
    if (imperial.checked) {
        $(unitMetric).addClass("hide");
        $(unitImperial).removeClass("hide");
    } else {
        $(unitMetric).removeClass("hide");
        $(unitImperial).addClass("hide");
    }
}

// function for imperial and metric
function calculate() {
    if (imperial.checked) {
        var bodyWeight = bodyWeight * 2.2;
        var protein_gKg = protein_gKg / 2.2;
        var fat_gKg = fat_gKg / 2.2;
        calculateMetric();
    } else {
        calculateMetric();
    }
}

//calculate function upon pressing button
function calculateMetric() {
    pgDaily_p.innerHTML = calcDailyProG().toFixed(1) + ' g';
    pKcalDaily_p.innerHTML = calcDailyProKcal().toFixed(1) + ' Kcal';
    ppercDaily_p.innerHTML = calcProPercent().toFixed(1) + ' %';

    fgDaily_p.innerHTML = calcDailyFatG().toFixed(1) + ' g';
    fKcalDaily_p.innerHTML = calcDailyFatKcal().toFixed(1) + ' Kcal';
    fpercDaily_p.innerHTML = calcFatPercent().toFixed(1) + ' %';

    cgDaily_p.innerHTML = calcDailyCarbG().toFixed(1) + ' g';
    cKcalDaily_p.innerHTML = calcDailyCarbKcal().toFixed(1) + ' Kcal';
    cpercDaily_p.innerHTML = calcCarbPercent().toFixed(1) + ' %';
}

// Calculate daily proteins kcal intake and create variable for daily P grams
function calcDailyProG() {
    return dailyProG = bodyWeight.value * protein_gKg.value;
}

function calcDailyProKcal() {
    return dailyProKcal = calcDailyProG() * PC_KCALG;
}

function calcProPercent() {
    return proPercent = (calcDailyProKcal() * 100) / kcalDaily.value;
}

// Calculate daily fats kcal intake and create variable for daily F grams
function calcDailyFatG() {
    return dailyFatG = bodyWeight.value * fat_gKg.value;
}

function calcDailyFatKcal() {
    return dailyFatKcal = calcDailyFatG() * F_KCALG;
}

function calcFatPercent() {
    return fatPercent = (calcDailyFatKcal() * 100) / kcalDaily.value;
}

// Calculate daily carbs grams and kcal using F and P daily kcal
function calcDailyCarbKcal() {
    return dailyCarbKcal = kcalDaily.value - (calcDailyProKcal() + calcDailyFatKcal());
}

function calcDailyCarbG() {
    return dailyCarbG = calcDailyCarbKcal() / PC_KCALG;
}

function calcCarbPercent() {
    return carbPercent = (calcDailyCarbKcal() * 100) / kcalDaily.value;
}

