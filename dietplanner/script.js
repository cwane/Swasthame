const total_calorie = 2500;
const total_fats = 150;
const total_protein = 75;
const total_sugar = 150;

const calorie_circle = document.querySelector(".progress_calorie circle");
const fats_circle = document.querySelector(".progress_fats circle");
const protein_circle = document.querySelector(".progress_protein circle");
const sugar_circle = document.querySelector(".progress_sugar circle");

let added_calorie = 1000;
let added_fats = 50;
let added_protein = 30;
let added_sugar = 75;

calorie_circle.style.strokeDasharray = `${parseInt(added_calorie * 450 / total_calorie)}`;
fats_circle.style.strokeDasharray = `${parseInt(added_fats * 450 / total_fats)}`;
protein_circle.style.strokeDasharray = `${parseInt(added_protein * 450 / total_protein)}`;
sugar_circle.style.strokeDasharray = `${parseInt(added_sugar * 450 / total_sugar)}`;

function updateNutrients() {
    added_calorie += 260;
    added_fats += 26;
    added_protein += 14;
    added_sugar += 2;
}

function updateProgress() {
    calorie_circle.style.strokeDasharray = `${parseInt(added_calorie * 450 / total_calorie)}`;
    fats_circle.style.strokeDasharray = `${parseInt(added_fats * 450 / total_fats)}`;
    protein_circle.style.strokeDasharray = `${parseInt(added_protein * 450 / total_protein)}`;
    sugar_circle.style.strokeDasharray = `${parseInt(added_sugar * 450 / total_sugar)}`;
}

function updateNutrientValues() {
    document.querySelector('.calorie_count__value').innerHTML = `${added_calorie} / ${total_calorie}`;
    document.querySelector('.fats_count__value').innerHTML = `${added_fats} / ${total_fats}`;
    document.querySelector('.protein_count__value').innerHTML = `${added_protein} / ${total_protein}`;
    document.querySelector('.sugar_count__value').innerHTML = `${added_sugar} / ${total_sugar}`;
}

const addtoCartbtns = document.querySelectorAll(".review");
addtoCartbtns.forEach((addtoCartbtn) => {
    addtoCartbtn.addEventListener("click", () => {
        updateNutrients();
        updateNutrientValues();
        updateProgress();
    });
})

