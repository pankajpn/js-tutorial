console.log("Pankaj");

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // get the height 
    const height = parseInt(document.querySelector('#height').value);

    // get the weight
    const weight = parseInt(document.querySelector('#weight').value);

    // results
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please give a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please give a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }

})