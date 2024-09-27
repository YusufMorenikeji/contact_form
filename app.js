//regex for email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//regex for number

const buttonclicked = false;
const isChecked = false;
const validateForm =()=>{
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    inputs.forEach((input)=> input.classList.remove('invalid'));
     errors.forEach((error)=> error.textContent = '');


     let invalid = false;
    //firstName validation
    const firstName = document.querySelector('#firstName');
    const firstNameErr = document.querySelector('.first-name-err');

    if (firstName.value == ''){
        firstNameErr.textContent = 'This field is required';   
        firstName.classList.add('invalid');  
        invalid = true;   
    }
    if(/^\d/.test(firstName.value)){
        firstNameErr.textContent = 'Text should not contain a number';
        firstName.classList.add(invalid);
        invalid =  true;
    }
    //lastname validation
    const lastname = document.querySelector('#lastname');
    const lastname_err = document.querySelector('.lastname');

    if (lastname.value == ''){
        lastname_err.textContent = 'This field is required';
        lastname.classList.add('invalid');
        invalid = true;
    }
    if(/^\d/.test(lastname.value)){
        lastname_err.textContent = ' Input should not start with a number';
        lastname.classList.add('invalid');
        invalid = true;
    }
    //email validation
    // const emailRegex = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
    const email = document.querySelector('#email');
    const email_err = document.querySelector('.email-err');

    if(email.value.trim() == ''){
        email_err.textContent = 'This field is required';
        email.classList.add('invalid');
        invalid = true;
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())){
        email_err.textContent = 'Invalid email address';
        email.classList.add('invalid');
        invalid = true;
    }
    //validate button
    if(!buttonclicked){
        query_err.textContent = 'Please select a query type';
        invalid = true;
    }
    //validate textarea
    const textarea = document.querySelector('#textarea');
    const textarea_err = document.querySelector('.textarea-err');
    console.log(textarea,textarea_err);
    if(textarea.value == ''){
        textarea_err.textContent = 'This field is required';
        textarea.classList.add('invalid');
        invalid = true;
    }
    //validate check
    if(!isChecked){
        check_err.textContent = ' To submit this form, please consent to being contacted';
        invalid = true;
    }
    if (!invalid){
        const success = document.querySelector('.success');
        success.style.display = 'block';
    }
    

}
document.querySelector('#form').addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
});
const general_query = document.querySelector('.general-query');
const general_query_img = document.querySelector('.general-query > span > img');
const support_request = document.querySelector('.support-request');
const support_request_img = document.querySelector('.support-request > span > img');
const query_err = document.querySelector('.query-error');
console.log(query_err);


general_query.onclick =()=>{
    general_query.classList.add('selected');
    general_query_img.style.display = "block";
    support_request.classList.remove('selected');
    support_request_img.style.display = 'none';
    buttonclicked = true;
}
support_request.onclick =()=>{
    support_request.classList.add('selected');
    support_request_img.style.display = 'block';
    general_query.classList.remove('selected');
    general_query_img.style.display = 'none';
    buttonclicked = true;
}
const consent = document.querySelector('.check-content');
const consent_img = document.querySelector('.check-content > span > img');
const check_err = document.querySelector('.check-err');

consent.onclick =()=>{
    consent_img.style.display = 'block';
    isChecked = true;
}