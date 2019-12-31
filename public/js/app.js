const tabPanelSignIn = document.querySelector('.log-in');
const tabPanelSignUp = document.querySelector('.sign-up');
const signInPage = document.querySelector('#log-in-page');
const signUpPage = document.querySelector('#sign-up-page');
const signUpSection = document.querySelector('.sign-up-section');

tabPanelSignUp.addEventListener('click', function () {
    tabPanelSignIn.classList.remove('active');
    tabPanelSignUp.classList.add('active');
    signInPage.style.display = 'none';
    signUpPage.style.display = 'block';

})

tabPanelSignIn.addEventListener('click',function () {
    tabPanelSignUp.classList.remove('active');
    tabPanelSignIn.classList.add('active');
    signInPage.style.display = 'block';
    signUpPage.style.display = 'none';
})
