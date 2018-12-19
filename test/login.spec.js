const loginPage = require('../pages/login.page')
const assert = require('chai').assert

suite("Login page validation",function(){
    suiteSetup("Open Amazon home page", function(){
        browser.url('')
    })

    test("Validate the home page title",function(){
        assert.equal(browser.getTitle(),"Amazon.ca: Online shopping in Canada - books, electronics, Kindle, home & garden, DVDs, tools, music, health & beauty, watches, baby, sporting goods & more")
    })

    test("Verify the login page title",function(){
        loginPage.loginButtonHome.click()
        assert.equal(browser.getTitle(),"Amazon Sign In")
    })
    test("Verify invalid credentials",function(){
        
        loginPage.inputUserDetails('test@test.com','testpassword')
    
        browser.waitUntil(function(){
        loginPage.invalidCredError.isVisible
        })
        loginPage.credentialValidation()
    })

})
    /*
    
    test("Verify whether Error message is displayed when user enters invalid credentials in Login", function() {
        loginPage.loginUserValidation('assignment@gmail.com','testassignment')
        loginPage.verifyErrorIsDisplayed()
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.invalidCredentials)
    })

    test("Verify whether Error message is displayed when user enters valid username and no password", function() {
        loginPage.loginUserValidation('assignment@gmail.com','')
        loginPage.verifyErrorIsDisplayed()
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noPassword)
    })

    test("Verify whether Error message is displayed when user enters no username and no password", function() {
        loginPage.loginUserValidation('','')
        loginPage.verifyErrorIsDisplayed()
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noUserName)
        loginPage.verifyErrorMessageIsDisplayed(loginPage.strings.noPassword)
    })
})
*/