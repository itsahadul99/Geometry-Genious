// input function  
let count  = 1;
function getInputField(idName){
    const inputField = document.getElementById(idName);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
// display the value
function setValue (value){
    const cm = 'cm';
    const where = document.getElementById('calculation-container');
    const p = document.createElement('p');
    p.innerText =+ count + ('. ')+ value;
    p.style.fontSize = '1 rem';
    p.style.fontWeight = 'bold';
    where.appendChild(p);
    count++;
    return p;
}
// for triangle 
function triangleCalculateArea(){
    const base = getInputField('triangle-base');
    const height = getInputField('triangle-height');
    const area = 0.5 * base * height;
    setValue('Triangle area is: '+ area);
}
// for rectangle 
function rectangleAreaCalculate(){
    const width = getInputField('rectangle-width');
    const length = getInputField('rectangle-length');
    const area = 0.5 * width * length;
    setValue('Rectangle area is: '+ area);
}
// for parallelogram
function parallelogramAreaCalculate(){
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height');
    const area = base * height;
    setValue('Parallelogram area is: '+ area);
}
// for rhombus 
function rhombusAreaCalculate(){
    const d1 = getInputField('rhombus-d1');
    const d2 = getInputField('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setValue('Rhombus area is: '+area);
}
// for pentagon
function pentagonAreaCalculate(){
    const p = getInputField('pentagon-p');
    const base = getInputField('pentagon-base');
    const area = 0.5 * p * base;
    setValue('Pentagon area is: ' + area);
}
// for ellipse
function ellipseAreaCalculate(){
    const a = getInputField('ellipse-a');
    const b = getInputField('ellipse-b');
    const area = Math.PI * a * b;
    const finalArea = area.toFixed(2);
    setValue('Ellipse area is: ' + finalArea);
}
