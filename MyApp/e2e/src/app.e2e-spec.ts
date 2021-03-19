/*import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('Orange HRM Test Suite App 1', () => {
  let page: AppPage;

  beforeAll( ()=>
  {
   page= new AppPage();
   page.navigateTo();
   browser.sleep(5000);
   
  }) 
  
    
  
    it('Valid Login Test01', async()=>
    {
      page.setusername('Admin');
      page.setpassword('admin123');
      browser.sleep(5000);
      page.clickloginbutton();
      browser.sleep(5000);
      page.clickToWelcomeUser();
      browser.sleep(5000);
      page.clickToLogout();
  
    });
    it('Invalid Login Test02', async()=>
    {
      browser.sleep(7000);
      page.setusername('Alfred');
      page.setpassword('admin123');
      browser.sleep(5000);
      page.clickloginbutton();
  
    })
 
});
describe('Orange HRM Test Suite App 2', () => {
  let page: AppPage;

  beforeAll( ()=>
  {
   page= new AppPage();
   page.navigateTo();
   browser.sleep(5000);
   
  }) 
  afterAll( ()=>
   {
    browser.close();
    
  })
    
  
    
    it('Invalid Login Test02', async()=>
    {
      browser.sleep(7000);
      page.setusername('Alfred');
      page.setpassword('admin123');
      browser.sleep(5000);
      page.clickloginbutton();
  
    })
 
});
*/