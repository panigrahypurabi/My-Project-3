/*
 Project 3 - Interactive Form
 Author: Purabi Panigrahy
*/

//------------ Name--------------------//

const userName = document.getElementById('name');

//add the focus state to name field
userName.focus();

userName.addEventListener("keyup", () =>{
    userNameValidation();
})

function userNameValidation(){

    const userNameValue = userName.value;
    const userNameRegex = /^[a-zA-Z]+\s?[a-zA-Z]+$/;
    if(userNameValue && userNameRegex.test(userNameValue)){
        userName.parentNode.className='valid';
        userName.parentNode.lastElementChild.style.display ='none';
        return true;
    } else {
        if(userNameValue){
         userName.parentNode.lastElementChild.textContent = 'Digits and special characters are not allowed';
        }
        else{
        userName.parentNode.lastElementChild.textContent = 'Name field cannot be empty';
        }
        userName.parentNode.className='not-valid';
        userName.parentNode.lastElementChild.style.display = 'block';
        return false;
    }
}


//------------------------------------ Job-------------------------------------------

//Job Field's variables and functions
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');


//otherJobRole displayed if "Other" option is selected from "Job Role" drop-down menu
otherJobRole.style.display ='none';
jobRole.addEventListener('change', (e)=>{
    if(e.target.value === 'other'){
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

//---------------------- Design and Color-------------------------------------------------------

// Design and Color Fields' variables and functions
const design = document.getElementById('design');
const color = document.getElementById('color');
const option = color.children;
color.disabled = true;
design.addEventListener ('change', (e)=> {
color.disabled = false;
    
   
    for ( let i = 0; i < option.length; i++ ) {
        const designTheme = option[i].getAttribute('data-theme');

        // Display only colors matching with the design selected
        if ( designTheme === e.target.value ) {
            option[i].hidden = false;
            option[i].setAttribute('selected', true);
        } else {
            option[i].hidden = true;
            option[i].removeAttribute('selected');
        }
    }
});

//--------------------------------- Activites---------------------------------

const activities = document.getElementById('activities');
const costOfActivities = document.getElementById('activities-cost');
var totalCost = 0;

activities.addEventListener('change', (e)=> {
    const dataCost = parseInt(e.target.getAttribute('data-cost'));
   // when event.target is checked, "data-cost" of event.target added to total and when unchecked, subtract the “data-cost”.
   if (e.target.checked == true){
    totalCost += dataCost;
} else {
    totalCost -= dataCost;
}
costOfActivities.innerHTML = `Total: $ ${totalCost}`; 
});

const allActivities = document.querySelectorAll('#activities input');

function activityListValidation(){
    let activityCount = 0;   
    for(let i = 0; i < allActivities.length; i++){
        if(allActivities[i].checked == true){
            activityCount += 1;
        }       
    }
    if(activityCount !== 0){
       activities.firstElementChild.className='valid';
       activities.lastElementChild.style.display='none';
       return true; 
    } else{
        activities.firstElementChild.className='not-valid';
        activities.lastElementChild.style.display='block';
        return false;
    }

};

/*When focus event is detected, add ".focus" className to the checkbox input’s parent label element.
When blur event is detected, remove the .focus className from the label element that possesses it.
*/

for (let i=0; i < allActivities.length; i++) {
    allActivities[i].addEventListener('focus', e => {
        e.target.parentElement.classList.add('focus');
    });
    allActivities[i].addEventListener('blur', e => {
        e.target.parentElement.classList.remove('focus');
    });
}

//---------------------------------- Payment-----------------------------------------------

const payment = document.getElementById('payment');
const creditcard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const interactiveForm = document.querySelector('form');
paypal.style.display = 'none';
bitcoin.style.display = 'none';

const paymentSecondChild = payment.children[1];
paymentSecondChild.setAttribute('selected', 'selected');

//Display the Payment option with the id that matches the value of the event.target element.
payment.addEventListener('change', e=> {
    const selectedPayOption = e.target;
    if (selectedPayOption.value === 'paypal') {
      paypal.style.display = 'block';
      bitcoin.style.display = 'none';
      creditcard.style.display = 'none';
      
    } else if (selectedPayOption.value === 'bitcoin') {
      bitcoin.style.display = 'block';
      paypal.style.display = 'none';
      creditcard.style.display = 'none';
      
    } else {
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
      creditcard.style.display = 'block';
      
    }
});


// credit card number should have between 13-16 digits 
const  creditNumRegex =/^[0-9]{13,16}$/;

//Validate credit card number
function validateCreditNum(){
    if(ccNum.value && creditNumRegex.test(ccNum.value)){
        ccNum.parentNode.className='valid';
        ccNum.parentNode.lastElementChild.style.display = 'none';
        return true; 
     } else {
         if(ccNum.value){
             ccNum.parentNode.lastElementChild.textContent = 'Credit card should be 13 - 16 digits';
            } else {
                ccNum.parentNode.lastElementChild.textContent = 'Credit card number is required';
            }
         ccNum.parentNode.className='not-valid';
         ccNum.parentNode.lastElementChild.style.display = 'block';
         return false; 
     }
} 

ccNum.addEventListener("keyup", () =>{
    validateCreditNum();
})

//-----------------------Email-------------------------------------------------------------

const emailAddr = document.getElementById('email');

// Email field Validation

function emailValidation(){
    const emailValue = emailAddr.value;
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (emailValue && emailRegex.test(emailValue)){
        emailAddr.parentNode.className='valid';
        emailAddr.parentNode.lastElementChild.style.display ='none';
        return true;
    } else {
        if(emailValue){
            emailAddr.parentNode.lastElementChild.textContent = 'Email must have @ and ".com"';
        }
        else{
        emailAddr.parentNode.lastElementChild.textContent = 'Email field cannot be empty';
        }
        emailAddr.parentNode.className='not-valid';
        emailAddr.parentNode.lastElementChild.style.display = 'block';
        return false;
    }
}

emailAddr.addEventListener("keyup", () =>{
    emailValidation();
})

//------------------------Zip-------------------------------------------

//Zip should be 5 digit number
const  zipRegex =/^[0-9]{5}$/;

//Zip field Validation
function zipValidation(){
    if(zip.value && zipRegex.test(zip.value)){
        zip.parentNode.className='valid';
        zip.parentNode.lastElementChild.style.display = 'none';
        return true; 
     } else {
         if(zip.value){
             zip.parentNode.lastElementChild.textContent = 'Invalid Zip! Zip Code should have 5 digits';
            } else {
                zip.parentNode.lastElementChild.textContent = 'Zip code cannot be blank';
            }
         zip.parentNode.className='not-valid';
         zip.parentNode.lastElementChild.style.display = 'block';
         return false; 
     }
} 

zip.addEventListener("keyup", () =>{
    zipValidation();
})

//---------------------------CVV--------------------------------------

// CVV field should contain 3 digits
let  cvvRegex =/^[0-9]{3}$/;

//CVV validation
function cvvValidation(){
    if(cvv.value && cvvRegex.test(cvv.value)){
        cvv.parentNode.className='valid';
        cvv.parentNode.lastElementChild.style.display = 'none';
        return true; 
     } else {
         if(cvv.value){
             cvv.parentNode.lastElementChild.textContent = 'cvv should have 3 digits';
            } else {
                cvv.parentNode.lastElementChild.textContent = 'cvv code cannot be blank';
            }
         cvv.parentNode.className='not-valid';
         cvv.parentNode.lastElementChild.style.display = 'block';
         return false; 
     }
} 


cvv.addEventListener("keyup", () =>{
    cvvValidation();
})

//-------------------------------------Form------------------------------------------

//Users shouldn’t be able to submit a form without the required information, or with invalid information.

interactiveForm.addEventListener('submit', e=> {

   
    //  name
    if (!userNameValidation()) {
        e.preventDefault();
    }  
    //  email
    if (!emailValidation()) {
        e.preventDefault();
    } 
     //  activites
     if (!activityListValidation()) {
        e.preventDefault();
    }  
    // Credit card number
    if(payment.value === 'credit-card'){
        if (!validateCreditNum()) {
            e.preventDefault();
        }   
        // zip 
        if (!zipValidation()) {
            e.preventDefault();
        }   
        // cvv 
        if (!cvvValidation()) {
            e.preventDefault();
        } 
    }
});