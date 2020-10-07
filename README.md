<h1 align="center">
  CoSMO's Website
</h1>

The source code for the Computer Science Mentoring Organization at Northeastern University

Keep reading to learn how to get started working on the website.

## 🚀 Quick start

1.  **Clone the repo**

    ```shell
    # navigate to the folder where you want to clone the repo
    git clone https://github.com/northeastern-cosmo/northeastern-cosmo.github.io.git
    ```

2.  **Start developing.**

    Navigate into the CoSMO directory and start it up.

    ```shell
    cd cosmo/
    npm run develop # or if you use yarn, yarn start
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `cosmo` directory in your code editor of choice and edit any of the files. Save your changes and the browser will update in real time!

    ```shell
    #  Make sure to create a new branch for your changes if you haven't already
    git checkout -b your-branch-name
    # Commit your changes
    git add .
    git commit -m "your message here"
    # Push your changes
    git push # you might have to set the upstream branch here, check your terminal for helpful notes!
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── yarn-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`yarn-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 More Resources

This site uses Gatsby, which is a static site generator. Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

We also use React to build the components, so if you're new to React, their [documentation](https://reactjs.org/docs/getting-started.html) is a great place to start!

## 💫 Deploy

Once you've made your changes and are ready to deploy, make sure to push them from your local repository to the remote repository.

Put up a [pull request (PR)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) and tag
`@kbusemeyer` or `@ray10102` for review.

Once your PR has been approved feel free to merge it into the `master` branch.

To deploy run `npm run deploy` or `yarn deploy` from the command line, make sure it succeeds and then go to the CoSMO website to see your changes!

If there are any errors then they'll pop up in the terminal and you can resolve them.

This deployment should be going to the `gh-pages` branch so be sure not to delete this branch!
