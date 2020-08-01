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

### General
- add colors section
- add typography section
- add a readme to each project - default styles is project explainer
- title navigation links
- make search work
- add shortcut keys
- save state between loads
  - switch to create-react-app
  - use react router
- Generate new style: `$ npm run new-style <style-name>`
- Publish: `$ npm run publish <style-name>` publish a lib to npm under `@blueprint-style/<style-name>`
  - update versioning
- directions for development
- switch icon libraries

### Styles
- Flat
  - dark theme
  - button component divider
- Flat Mono - emphasis color is greyscale?
- Gradient buttons?
- [ant.design](https://ant.design/components/overview/)
  - dark theme
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
- [Shopify Polaris](https://polaris.shopify.com/components/actions/button#navigation)
- [Google Material](https://material.io/components)
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Microsoft Fluent](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [Apple HMI](https://developer.apple.com/design/human-interface-guidelines/)
- [Wordpress](https://make.wordpress.org/design/)?
- [Amazon AWS](https://abduzeedo.com/amazon-web-services-design-system)
- Maybe themes that are just colors and fonts?
- something fancy? serif fonts and such...
- **Common** - styles that help everywhere
  - better focus for buttons?

### Eventually
- css vars template
- design your own theme ui

----

## DONE:
- better js outputs - split colors and stuff
-  ant.design
  - inputs
  - select element
  - checkbox and radio animations
  - slider
  - file input
  - textarea?
- style - common
  - dividers for intent button groups when outline-less
- remove radius from search input
- rename everything from "themer" to "styler"
- upgrade npm dependencies
- add extension packages: table, datetime, etc...
