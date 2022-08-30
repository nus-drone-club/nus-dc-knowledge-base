# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Website is live [here](https://nus-drone-club.github.io/nus-dc-knowledge-base/).

## General workflow with browser
If you only want to modify exisitng page content
1. Click *Edit this page* at the bottom of webpage. It will direct you to the corresponding repository location.
2. Edit the relevant sections, commit changes from the browser.

## General workflow with git
If you want to change the layout, theme, edit sidebars etc.
1. clone the repository using SSH, make sure you have set up your [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
```
git clone git@github.com:nus-drone-club/nus-dc-knowledge-base.git
```
2. Follow [Pre-requisite](#pre-requisite) to setup build environment.
3. From repository directory terminal, test the current version of webpage with
```
yarn
yarn start
```
4. Make necessary changes with your favorite text editor.
5. From repository directory terminal, test your changes with
```
yarn start
```
6. If everything looks good, stage your changes, commit and push to main. 
Github Actions will be triggered to deploy the page automatically.


## Note
Following sections are generally not required. Just make your modifications, verify they work well, stage your changes, commit and push to the master. Github Actions will be triggered to deploy the page automatically.

If you do not want to work with github workflow, you can also directly edit the files in the browser.

### Pre-requisite
1. Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
2. In a new terminal, install **Node.js** (version 16.14 or above)
```
nvm install 16.14
```
3. Install **yarn** using **npm** (should be installed with Step 2)
```
npm install --global yarn
```
