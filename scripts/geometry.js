function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);

    const triangleArea = 0.5 * triangleBase * triangleHeight;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}

function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);

    const rectangleArea = rectangleWidth * rectangleLength;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}


function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area); 
}

function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}