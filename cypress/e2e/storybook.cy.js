const components = require('../fixtures/components')

describe('Storybook example', () => {
  const storybookUrl = 'https://uber.github.io/react-vis/website/dist/storybook/iframe.html'

  components.forEach(({ title, urlParam }) => {
    it(title, () => {
      cy.visit(`${storybookUrl}?${urlParam}`)

      cy.vrt(title)
    })
  })
})
