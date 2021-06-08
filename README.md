This project is a basic end-to-end setup using [Webdriver.io](https://webdriver.io/docs/gettingstarted.html).

The goal: give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation for the team and the candidate to decide if it's a good fit.

To start:

If you have nvm, simply run `nvm use` or be sure you are running node 12+.

```
git clone https://github.com/helloextend/e2e-challenge.git
npm install
npm test
```

There is an option to run these tests with a browser as well:

```
npm run test:head
```

# Challenge

---

-   Verify the autocomplete dropdown from the search menu shows the expected results

-   Navigate to the first search result and ensure you are on 'https://en.wikipedia.org/wiki/List_of_tallest_buildings'

-   Find the world's second tallest building and using a custom function, verify that the feet and meter height of the building is correctly converted

-   Sort the table descending by year and verify the first result is the Empire State Building

-   Navigate to the Empire State building's page and verify that the url is correct

-   Create a new page object and spec for the Empire State building's page

-   Ensure the link next to 'Preceded by' would take you to the page for the Chrysler Building

-   Ensure the link next to 'Surpassed by' would take you to the page for the World Trade Center (North tower)

-   Each photo thumbnail on the page should have an icon in the caption below it (`<div class="magnify">`). Write a test to verify if this requirement has been met.

# Submission

---

-   Click the `Use this template` button

-   Select a private repository and click `Create repository from template`

-   Create a new branch off of `master`

-   When your challenge code is complete, create a pull request against master

-   Add `m-schrepel` as a collaborator to your repo and send an email to [matthew@extend.com](mailto:matthew@extend.com) with a link to your repository

-   We will provide PR feedback once we've gotten the invite to collaborate and can see the PR

-   Feel free to ask questions via email, as we want to simulate working with the team
