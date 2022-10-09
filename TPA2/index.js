let button = document.getElementById('btn');

button.addEventListener('click', () =>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let heightStatus = false, weightStatus = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('heightError').innerHTML = 'Input yang anda masukkan salah';
    }
    else{
        document.getElementById('heightError').innerHTML = '';
        heightStatus = true;
    }
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weightError').innerHTML = 'Input yang anda masukkan salah';
    }
    else{
        document.getElementById('weightError').innerHTML = '';
        weightStatus = true;
    }

    if(weightStatus && heightStatus){
        const bmi = (weight/((height * height)/10000)).toFixed(1);
        if(bmi < 18.5){
            result.innerHTML = 'BMImu adalah '+ bmi+',' + ' Berat badan anda kurang' ;
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = 'BMImu adalah '+ bmi+',' + ' Berat badan anda normal' ;
        }
        else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = 'BMImu adalah '+ bmi+',' + ' Berat badan anda berlebih';
        }
        else{
            result.innerHTML = 'BMImu adalah '+ bmi+',' + ' Bahaya!!! Obesitas';
        }    
    }
    else{
        alert('Errors');
        result.innerHTML = '';
        
    }
})