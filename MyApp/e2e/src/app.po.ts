/*import { browser, by, element } from 'protractor';

export class AppPage 
{
  public baseUrl ='https://opensource-demo.orangehrmlive.com/';

  navigateTo(): any
  {
    browser.ignoreSynchronization= true;
   // browser.waitForAngularEnabled;
    return browser.get(this.baseUrl);

  }
  getbrowserTitle(): any 
  {
    return browser.getTitle();
  }

  setusername(word: string): void{
    browser.sleep(5000);
    element(by.xpath("//input[@id='txtUsername']")).sendKeys(word);
  }


  setpassword(word: string): void{
    element(by.id('txtPassword')).sendKeys(word);
  }
  clickloginbutton(): any{
    element(by.id('btnLogin')).click();
  }
  clickToWelcomeUser(): any{
    element(by.xpath('//*[@id="welcome"]')).click();
  }
  clickToLogout(): any{
    element(by.xpath('//*[@id="welcome-menu"]/ul/li[2]/a')).click();
  }
  
}
*/