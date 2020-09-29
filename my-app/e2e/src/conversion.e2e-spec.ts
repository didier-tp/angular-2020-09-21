import { browser, logging } from 'protractor';
import { ConversionPage } from './conversion.po';

describe('workspace-project App', () => {
  let page: ConversionPage;

  beforeEach(() => {
    page = new ConversionPage();
  });

  /*
  NB: cet exemple end-to-end necessite une API REST
      "backend-tp-api (localhost:8282)"
     en arrière plan (à démarrer préalablement)
     ----
     besoin de proxy.conf.json et de option "proxyConfig": "proxy.conf.json"
     dans angular.json (proche ligne 73):
     "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "my-app:build",
            "proxyConfig": "proxy.conf.json"
          }
  */

  it('should convert EUR to USD correctly', () => {
    page.navigateTo();
    page.getInputMontantElement().clear(); //clear default value
    page.getInputMontantElement().sendKeys("200");
    page.getSelectCodeDevSourceOptionElementContaining("EUR").click();
    page.getSelectCodeDevCibleOptionElementContaining("USD").click();
    page.getButtonConvertirElement().click();
    browser.sleep(1000);
    page.getMontantConvertiText().then((resConv)=>{
      console.log("resConv=" + resConv);
      expect(Number(resConv)).toBeCloseTo(217.4,0.1);
    })

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
