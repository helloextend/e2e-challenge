import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('Wikipedia home page',  () => {
    it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
        browser.url('https://en.wikipedia.org')

        const expected = "https://en.wikipedia.org/wiki/Main_Page"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })

    it('should allow the user to search and display results', () => {
        homePage.setSearchText("world's tallest building")
        // This pause is here so you can observe the test state with npm run test:head
        browser.pause(10000)
    })
})
