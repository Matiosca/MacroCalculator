const theForm = document.forms["macroForm"];
const PC_KCALG = 4;
const F_KCALG = 9;

var bodyWeightUnit = ['kg', 'lb'];
var proteinPerKiloUnit = ['pgkg', 'pgLb'];
var fatPerKiloUnit = ['fgKg', 'fgLb'];

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
var metricLabel = document.getElementById('unitMetric');
var imperialLabel = document.getElementById('unitImperial');
var metricProLabel = document.getElementById('unitMetricPro');
var imperialProLabel = document.getElementById('unitImperialPro');
var metricFatLabel = document.getElementById('unitMetricFat');
var imperialFatLabel = document.getElementById('unitImperialFat');

// show and hide metric/imperial unit after selecting radio
function toggleUnit() {
    if (imperial.checked) {
        metricLabel.classList.add("hide");
        imperialLabel.classList.remove("hide");
        metricProLabel.classList.add("hide");
        imperialProLabel.classList.remove("hide");
        metricFatLabel.classList.add("hide");
        imperialFatLabel.classList.remove("hide");
    } else {
        metricLabel.classList.remove("hide");
        imperialLabel.classList.add("hide");
        metricProLabel.classList.remove("hide");
        imperialProLabel.classList.add("hide");
        metricFatLabel.classList.remove("hide");
        imperialFatLabel.classList.add("hide");
    }
}

// test function for imperial and metric
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

// trying to apply tofixed to every p in macro results
// probably need to create array and use for each
function fixresults() {
    document.getElementsByClassName('.tofix').toFixed(1);
}

console.log(fixresults());

//calculate function upon pressing button
function calculateMetric() {
    pgDaily_p.innerHTML = calcDailyProG() + ' g';
    pKcalDaily_p.innerHTML = calcDailyProKcal() + ' Kcal';
    ppercDaily_p.innerHTML = calcProPercent() + ' %';

    fgDaily_p.innerHTML = calcDailyFatG() + ' g';
    fKcalDaily_p.innerHTML = calcDailyFatKcal() + ' Kcal';
    fpercDaily_p.innerHTML = calcFatPercent() + ' %';

    cgDaily_p.innerHTML = calcDailyCarbG() + ' g';
    cKcalDaily_p.innerHTML = calcDailyCarbKcal() + ' Kcal';
    cpercDaily_p.innerHTML = calcCarbPercent() + ' %';
}

// Calculate daily proteins kcal intake and create variable for daily P grams
function calcDailyProG() {
    return dailyProG = bodyWeight.value * protein_gKg.value;
}

function calcDailyProKcal() {
    return dailyProKcal = calcDailyProG() * PC_KCALG;
}

function calcProPercent() {
    var proPercent = (calcDailyProKcal() * 100) / kcalDaily.value;
    return proPercent.toFixed(1);
}

// Calculate daily fats kcal intake and create variable for daily F grams
function calcDailyFatG() {
    return dailyFatG = bodyWeight.value * fat_gKg.value;
}

function calcDailyFatKcal() {
    return dailyFatKcal = calcDailyFatG() * F_KCALG;
}

function calcFatPercent() {
    var fatPercent = (calcDailyFatKcal() * 100) / kcalDaily.value;
    return fatPercent.toFixed(1);
}

// Calculate daily carbs grams and kcal using F and P daily kcal
function calcDailyCarbKcal() {
    return dailyCarbKcal = kcalDaily.value - (calcDailyProKcal() + calcDailyFatKcal());
}

function calcDailyCarbG() {
    return dailyCarbG = calcDailyCarbKcal() / PC_KCALG;
}

function calcCarbPercent() {
    var carbPercent = (calcDailyCarbKcal() * 100) / kcalDaily.value;
    return carbPercent.toFixed(1);
}

