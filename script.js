
function foo() {
let wmm = document.getElementById("input0").valueAsNumber;
let rmm = document.getElementById("input1").valueAsNumber;
let equal = Math.round((((2 * wmm) + (rmm)) * 3.14) / 10) + "cm"

window.document.getElementById("hrr").innerHTML = equal;

}