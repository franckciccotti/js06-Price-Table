const master = document.querySelector('.master')
const prof = document.querySelector('.prof')
const basic = document.querySelector('.basic')

const masterInitial = master.innerHTML
const profInitial = prof.innerHTML
const basicInitial = basic.innerHTML

const sliderInput = document.querySelector('#checkbox')

sliderInput.addEventListener('change', () => {
    
    if(sliderInput.checked) {
        basic.innerHTML = eval(`${basic.innerHTML}*12`) 
        prof.innerHTML = eval(`${prof.innerHTML}*12`) 
        master.innerHTML = eval(`${master.innerHTML}*12`) 
    } else {
        basic.innerHTML = basicInitial 
        prof.innerHTML = profInitial 
        master.innerHTML = masterInitial 
    }
    
})