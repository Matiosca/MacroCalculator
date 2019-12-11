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
var fpercDaily_p = document.getElementById('fpdaily')

var cgDaily_p = document.getElementById('cgdaily');
var cKcalDaily_p = document.getElementById('ckdaily');
var cpercDaily_p = document.getElementById('cpdaily');
 
var kcalDaily = document.getElementById("kcalDaily");
var bodyWeight = document.getElementById("bodyWeight");
var protein_gKg = document.getElementById("proteingKg");
var fat_gKg = document.getElementById("fatgKg");

//calculate function upon pressing button
function test() {
    pgDaily_p.innerHTML = calcDailyProG() + ' g';
    pKcalDaily_p.innerHTML = calcDailyProKcal() + ' Kcal';
    ppercDaily_p.innerHTML = calcProPercent() + ' %';
    fgDaily_p.innerHTML = calcDailyFatG() + ' g';
    fKcalDaily_p.innerHTML = calcDailyFatKcal() + ' Kcal';
    cgDaily_p.innerHTML = calcDailyCarbG() + ' g';
    cKcalDaily_p.innerHTML = calcDailyCarbKcal() + ' Kcal';
}

function product() {
    x = bodyWeight.value;
    y = protein_gKg.value;
    return x * y;
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

// Calculate daily Carbs grams and kcal using F and P daily kcal
function calcDailyCarbKcal() {
    return dailyCarbKcal = kcalDaily.value - (calcDailyProKcal() + calcDailyFatKcal());
}

function calcDailyCarbG() {
    return dailyCarbG = calcDailyCarbKcal() / PC_KCALG;
}

