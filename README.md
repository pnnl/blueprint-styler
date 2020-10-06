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
- add a readme to each project - default styles is project explainer
- title navigation links
- add colors section
- add typography section
- make search work
- add shortcut keys
- save state between loads
  - switch to create-react-app
  - use react router
  - nav bar stays in sync with scroll position
- Generate new style: `$ npm run new-style <style-name>`
- Publish: `$ npm run publish <style-name>` publish a lib to npm under `@blueprint-style/<style-name>`
  - update versioning
- directions for development
- switch icon libraries

### Styles
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - editable text focus
  - menu, popover, calendar - padding: 0?
  - button
    - outline fills in?
  - button and input large text revert
  - input text bg darker?
    - make everything else darker
  - light theme
- Flat
  - dark theme
  - button component divider
- Flat Mono - emphasis color is greyscale?
- Gradient buttons?
- [ant.design](https://ant.design/components/overview/)
  - dark theme
- [Shopify Polaris](https://polaris.shopify.com/components/actions/button#navigation)
- [Google Material](https://material.io/components)
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Microsoft Fluent](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [Apple HMI](https://developer.apple.com/design/human-interface-guidelines/)
- [Wordpress](https://make.wordpress.org/design/)?
- [Amazon AWS](https://abduzeedo.com/amazon-web-services-design-system)
- [PNNL](https://forge.pnl.gov/standards/)
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
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - button
  - inputs!!
  - switch
  - focus
  - slider handle round & not split
  - checkbox & radio
    - unchecked outline
  - tabs
  - loading bar & spinner
- [ant.design](https://ant.design/components/overview/)
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
- config to order styles
