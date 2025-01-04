const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const button = document.querySelector('button');
const result = document.querySelector('#results');

result.innerHTML = "";

button.addEventListener('click', (event) => {

    event.preventDefault();

    
    if (isNaN(height.value) || isNaN(weight.value) || height.value === '' || weight.value === '') {
        result.innerHTML = 'Please enter valid numbers for height and weight.';
        return;
    }

   
    const heightInM = Number(height.value) / 100; 
    const weightValue = Number(weight.value);  

    
    const bmi = weightValue / (heightInM * heightInM);

   
    result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
});
