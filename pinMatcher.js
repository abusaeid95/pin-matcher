function pinGenerator(){
    const generatorDisplay = document.getElementById('generator-display');
    const pinNumber = Math.round(Math.random()*100000000);
    const printstring = pinNumber + '';
    if(printstring.length >= 8){
        generatorDisplay.value = printstring;
    }
}
pinGenerator();
function numaric (event) {
    const displayNumber = document.getElementById('number-display');
    const eachvalue = event.target.innerText;
    if(isNaN(eachvalue)){
        if(eachvalue === 'C'){
            displayNumber.value = '';
        }
        else if( eachvalue === '>'){
            const currentValue = displayNumber.value;
            const afterSplitValue = currentValue.split('');
            afterSplitValue.pop();
            displayNumber.value = afterSplitValue.join('');
        }
    }
    else{
        const displayNumber = document.getElementById('number-display');
        const previousValue =  displayNumber.value;
        displayNumber.value = previousValue + eachvalue;
    };
}

function matcher(){
    const generatedPin = document.getElementById('generator-display');
    const typedPinString = document.getElementById('number-display');
    const firstModal = new bootstrap.Modal(document.getElementById('modall-1'));
    const secondModal = new bootstrap.Modal(document.getElementById('modall-2'));
    if(generatedPin.value == typedPinString.value & generatedPin.value > 100){
            firstModal.show();
    }
    else{
        secondModal.show();
    }
};