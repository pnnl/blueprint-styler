## TODOS:

### var(--theme) baseline
- build
  - try an update
    - popover2
    - add vars
    - add examples?
  - publish
- fix the other styles
  - ant

### General
- Generate new style: `$ npm run new-style <style-name>`
- Publish: `$ npm run publish <style-name>` publish a lib to npm under `@blueprint-style/<style-name>`
  - update versioning
- directions for development
- switch icon libraries
- update dev examples using similar copy process

### App tool
- switch to create-react-app
- sections:
  - for each theme: add a readme to each project - default styles is project explainer
  - base theme component that imports scss files
  - custom components
  - colors
  - typography
- Navigation
  - search
  - shortcut keys
  - routing? to specific themes
  - title navigation link buttons on hovers
  - nav bar stays in sync with scroll position
- Custom theme editor
  - vars editing
  - make a custom theme export it


### Styles
- var(--theme) / General
  - dark theme scrollbars
  - math with calc()
  - grayscale transparency alt
  - js generator of color vars
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - file input - focus, hover
  - dark theme button in ControlGroup input
  - card bg color needs to be darker
  - light theme text color needs softening
- Flat
  - dark theme
  - button component divider
- Flat Mono - intent primary color is grayscale?
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

### Extras
- [postcss-remove-declaration](https://www.npmjs.com/package/postcss-remove-declaration/v/1.0.0)
