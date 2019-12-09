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
 
var kcalDaily = document.getElementById("kcalDaily").value;
var bodyWeight = document.getElementById("bodyWeight");
var protein_gKg = document.getElementById("proteingKg");
var fat_gKg = document.getElementById("fatgKg").value;

//example function

/*function test() {
    document.getElementById('pgdaily').innerHTML = product();
}*/
function test() {
    pKcalDaily_p.innerHTML = calcDailyProKcal();
}

console.log(dailyProG);

function product() {
    x = bodyWeight.value;
    y = protein_gKg.value;
    return x * y;
}

// Calculate daily proteins kcal intake and create variable for daily P grams
function calcDailyProKcal() {
    var dailyProG = bodyWeight.value * protein_gKg.value;
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

