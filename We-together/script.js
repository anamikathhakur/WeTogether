const signin = document.querySelector('.secondary-button');
const signup = document.querySelector('.primary-button');
const signupPage = document.getElementById('signup-page');
const h3 = document.querySelector('.h3');
const signinbtn = document.querySelector('.signinbtn');
const getstartedbtn = document.querySelector('.get-started-btn');

const hemburger = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

hemburger.addEventListener("click", function() {
  links.classList.toggle("active");
});
const closeButton = document.getElementById('close-button');


const signupfunctionality = () => {
  signinbtn.innerHTML = 'Sign up';
  h3.innerHTML = 'Sign Up';
  signupPage.classList.add('show');
  signupPage.classList.remove('hidden');
}

// storing values email & password
signinbtn.addEventListener('click', () => {
  let emailInput  = document.getElementById('email');
  let passwordInput  = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  console.log('email ', email);
  console.log('password ', password);

  emailInput.value = '';
  passwordInput.value = '';
  
  console.log('email ', email);
  console.log('password ', password);
  signupPage.classList.add('hidden');
  signupPage.classList.remove('show');
  alert('YOU ARE SUCCESSFULLY LOGIN');

})
// end

signin.addEventListener('click', () => {
    h3.innerHTML = 'Sign In'
    signinbtn.innerHTML = 'Sign in';
    signupPage.classList.add('show');
    signupPage.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    signupPage.classList.add('hidden');
    signupPage.classList.remove('show');
});

getstartedbtn.addEventListener('click' , signupfunctionality);


signup.addEventListener('click' ,signupfunctionality)