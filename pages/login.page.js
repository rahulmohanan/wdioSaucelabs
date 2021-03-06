const assert = require('chai').assert

class loginValidation{

    get loginButtonHome()       {return $('#nav-link-yourAccount')}
    get invalidCredError()      {return $('.a-alert-heading')}
    get credErrormessage()      {return $$('.a-alert-content')}
    get loginButtonLoging()     {return $('#signInSubmit')}
    get loginEmail()            {return $('#ap_email')}
    get loginPassword()         {return $('#ap_password')}

    inputUserDetails(user,pass){
        this.loginEmail.setValue('user')
        this.loginPassword.setValue('pass')
        this.loginButtonLoging.click()
    }

    get strings() {
        return {
            noUserName: "Enter your e-mail address or mobile phone number",
            noPassword: "Enter your password"
        }
    }

    credentialValidation(){
        assert.include(this.invalidCredError.gettext(),'There was a problem')
    }

    displayMessage(){
        this.credErrormessage.waitForVisible()        
    }
   /*
    errorMessageCheck(){
        this.
    }


 
    get loginButtonHome()       {return $('a.button.login')}
    get loginEmailId()           {return $('#login_user')}
    get loginPassword()           {return $('#login_pw')}
    get loginButton()           {return $('#login_btn')}
    get loginError()        {return $('.form-error')}

    get strings() {
        return {
            invalidCredentials: "User credentials are invalid",
            invalidUserName: "Please enter a valid email address.",
            noUserName: "Please enter your email address.",
            noPassword: "Please enter your password."
        }
    }

    loginUserValidation(user,password) {
        this.loginEmailId.setValue(user)
        this.loginPassword.setValue(password)
        this.loginButton.click()
    }

    verifyErrorIsDisplayed() {
        this.loginError.waitForVisible()
    }

    verifyErrorMessageIsDisplayed(error) {
        assert.include(this.loginError.getText(), error)
    }
    */
}

module.exports = new loginValidation()