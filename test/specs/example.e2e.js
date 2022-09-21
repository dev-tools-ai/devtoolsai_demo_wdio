describe('GH tests', () => {
    it('should enter username', async () => {
        await browser.url(`https://github.com/login`);
        await browser.$('//input[@id="password"]').keys('my_username');
        await browser.pause(3000);
    });
});


describe('findByAI test', () => {
    it('should prompt for searchbox', async () => {
      await browser.url('https://duckduckgo.com');
      var element = await browser.findByAI$('wd_search_box')
      await element.keys("Hellow World!");
      await new Promise((r) => setTimeout(r, 2000));
    });
});
