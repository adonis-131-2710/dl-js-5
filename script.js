const slider = document.querySelector(".slide");
const minInput = slider.querySelector(".min-input");
const maxInput = slider.querySelector(".max-input");
const minPrice = slider.querySelector(".min-price");
const maxPrice = slider.querySelector(".max-price");
const progress = slider.querySelector(".progress");
const minTooltip = slider.querySelector(".min-tooltip");
const maxTooltip = slider.querySelector(".max-tooltip");

const gap = 200; 

function updateUI() {
    const minVal = parseInt(minInput.value);
    const maxVal = parseInt(maxInput.value);
    const totalMax = minInput.max;

    const leftPercent = (minVal / totalMax) * 100;
    const rightPercent = 100 - (maxVal / totalMax) * 100;

    progress.style.left = leftPercent + "%";
    progress.style.right = rightPercent + "%";

    minTooltip.style.left = leftPercent + "%";
    minTooltip.innerText = `$${minVal}`;

    maxTooltip.style.left = (100 - rightPercent) + "%";
    maxTooltip.innerText = `$${maxVal}`;

    minPrice.value = minVal;
    maxPrice.value = maxVal;
}

minInput.addEventListener("input", () => {
    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);

    if (maxVal - minVal < gap) {
        minInput.value = maxVal - gap;
    }
    updateUI();
});

maxInput.addEventListener("input", () => {
    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);

    if (maxVal - minVal < gap) {
        maxInput.value = minVal + gap;
    }
    updateUI();
});

minPrice.addEventListener("change", () => {
    let minVal = parseInt(minPrice.value);
    let maxVal = parseInt(maxInput.value);

    if (minVal < parseInt(minInput.min)) minVal = parseInt(minInput.min);
    if (minVal > maxVal - gap) minVal = maxVal - gap;

    minInput.value = minVal;
    updateUI();
});

maxPrice.addEventListener("change", () => {
    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxPrice.value);

    if (maxVal > parseInt(maxInput.max)) maxVal = parseInt(maxInput.max);
    if (maxVal < minVal + gap) maxVal = minVal + gap;

    maxInput.value = maxVal;
    updateUI();
});

updateUI();
