var op = document.getElementById('btn')
var output = document.getElementById('output')
var bgc = document.getElementById('foto')
var box = document.getElementById('show')
op.addEventListener('click',()=>{
    

    var birthdateInput = document.getElementById('dob');
    var birthdate = new Date(birthdateInput.value);
    var today = new Date();

    if (isNaN(birthdate.getTime())) {
        alert('Please enter a valid date.');
        return;
    }

    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    box.style.display = "none"
    output.innerHTML = 'Here is your age for entered date of birth: ' + age  
    birthdateInput.style.display="none"
    op.style.display = "none"
    if(age<= 6){
        bgc.style.background="url('./images/small_boy.jpg')"
        bgc.style.backgroundSize= '210px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
    else if(age<=12){
        bgc.style.background="url('./images/young_boy.jpg')"
        bgc.style.backgroundSize= '210px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
    else if(age <= 19){
        bgc.style.background="url('./images/teen_aged.jpg')"
        bgc.style.backgroundSize= '210px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
    else if(age <=29){
        bgc.style.background="url('./images/twenties.jpg')"
        bgc.style.backgroundSize= '280px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
    else if(age <=51){
        bgc.style.background="url('./images/middle_aged.jpg')"
        bgc.style.backgroundSize= '280px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
    else{
        bgc.style.background="url('./images/old_aged.jpg')"
        bgc.style.backgroundSize= '280px 100px'
        bgc.style.backgroundRepeat = 'no-repeat'
        bgc.style.borderRadius = "10px"
    }
})