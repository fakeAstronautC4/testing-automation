const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/Foundations_26/Week6/day3/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add Movie', async () => {

    searchBar = await driver.findElement(By.css('input'))

    await searchBar.sendKeys('Top-Gun\n')
    
    await driver.sleep(2000)
})

test('Can cross off Movie', async() => {
       
    crossOff = await driver.findElement(By.css('span'))
    
    await crossOff.click()

    await driver.sleep(2000)
})

test('Can remove Movie', async() => {

    deleteBtn = await driver.findElement(By.id('Top-Gun'))
    
    await deleteBtn.click()

    await driver.sleep(2000)
})
