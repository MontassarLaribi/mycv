const timeout = 20000;

describe(
  "/ (Home Page FRENCH)",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("http://localhost:3000");
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it("should load without error and default language French", async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain("Diplôme");
    });
  },
  timeout
);

describe(
  "/ (Home Page English)",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("http://localhost:3000/en");
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it("should load without error and default language English", async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain("Degree");
    });
  },
  timeout
);

describe(
  "/ (Modal should open on click)",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("http://localhost:3000/fr");
      await page.addStyleTag({
        content: "*{scroll-behavior: auto !important;}",
      });
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it("Should open the modal on image click with the right image", async () => {
      await page.click("#pnl");
      try {
        const modal = await page.waitForSelector("#modal", { visible: true });
        const img = await page.evaluate(
          'document.getElementById("modal-img").getAttribute("src")'
        );
        expect(modal).toBeDefined();
        expect(img).toEqual(
          "https://montassarlaribi.com/images/PNL_Montassar_Laribi.png"
        );
      } catch (error) {
        console.error(error);
      }
    });
  },
  timeout
);

describe(
  "/ (Should change language)",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("http://localhost:3000/fr");
      await page.addStyleTag({
        content: "*{scroll-behavior: auto !important;}",
      });
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it("Should change the language from French (default) to English", async () => {
      let textFR = await page.evaluate(() => document.body.textContent);
      expect(textFR).toContain("Diplôme");
      await page.click("#toggle-language");
      try {
        let text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain("Degree");
      } catch (error) {
        console.error(error);
      }
    });
  },
  timeout
);
