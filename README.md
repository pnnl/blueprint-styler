# Blueprint Styler

This project is meant to help create custom global styles for [Blueprint js Components](https://blueprintjs.com/docs/)

[Project Demo](https://stash.pnnl.gov/pages/UXRSRC/blueprint-styler/master/browse/dist/index.html)

## Quick start

From the root of the repo:

1. Run `npm i`
1. Run `npm start`
1. Open your browser to http://localhost:9000/

*Note: if you want to run the development server on a different port, set the `PORT` environment variable.*


## TODOS:

### Styles
- better focus for buttons
- dividers for intent button groups when outline-less
- remove radius from search input
- antd
  - dark theme

### General
- save state between loads
- make search work
- add shortcut keys
- add components from other projects?? table, etc...
- rename everything from "themer" to "styler"
- add a readme to each project - default styles is project explainer
- add colors section
- add typography section
- Generate new style: `$ npm run new-style <style-name>`
- Publish: `$ npm run publish <style-name>` publish a lib to npm under `@blueprint-style/<style-name>`
  - update versioning
- directions for development

## DONE:
* better js outputs - split colors and stuff
* antd
  * inputs
  * select element
  * checkbox and radio animations
  * slider
  * file input
  * textarea?
