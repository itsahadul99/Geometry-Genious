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
    p.innerText =+ count + ('. ') + 'Triangle Area is: '+ area;
    count++;
    p.style.fontSize = '1.1rem';
    p.style.fontWeight = 'bold';
    calculationContainer.appendChild(p);
}