let count = 1;
function triangleCalculateArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);
    const area = 0.5 * base * height;
    const calculationContainer = document.getElementById('calculation-container');
    const p = document.createElement('p');
    p.innerText =+ count + ('. ') + 'Rectangle Area is: '+ area;
    count++;
    p.style.fontSize = '.9rem';
    p.style.fontWeight = 'bold';
    calculationContainer.appendChild(p);
}
// Rectangle part 
function rectangleAreaCalculate(){
    
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(base);
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(height);
    const area = width * length;
    const calculationContainer = document.getElementById('calculation-container');
    const p = document.createElement('p');
    p.innerText =+ count + ('. ') + 'Rectangle Area is: '+ area;
    count++;
    p.style.fontSize = '.9rem';
    p.style.fontWeight = 'bold';
    calculationContainer.appendChild(p);
}

// Parallelogram part

function parallelogramAreaCalculate(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    // console.log(base);
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    // console.log(height);
    const area = base * height;
    const calculationContainer = document.getElementById('calculation-container');
    const p = document.createElement('p');
    p.innerText =+ count + ('. ') + 'Parallelogram Area is: '+ area;
    count++;
    p.style.fontSize = '.9rem';
    p.style.fontWeight = 'bold';
    calculationContainer.appendChild(p);
}

// Rhombus part

function rhombusAreaCalculate(){
    const rhombusFirstD1Input = document.getElementById('rhombus-d1');
    const rhombusFirstD1Text = rhombusFirstD1Input.value;
    const d1 = parseFloat(rhombusFirstD1Text);
    // console.log(base);
    const rhombusFirstD2Input = document.getElementById('rhombus-d2');
    const rhombusFirstD2Text = rhombusFirstD2Input.value;
    const d2 = parseFloat(rhombusFirstD2Text);
    // console.log(height);
    const area = 0.5 * d1 * d2;
    const calculationContainer = document.getElementById('calculation-container');
    const p = document.createElement('p');
    p.innerText =+ count + ('. ') + 'Rhombus Area is: '+ area;
    count++;
    p.style.fontSize = '.9rem';
    p.style.fontWeight = 'bold';
    calculationContainer.appendChild(p);
}