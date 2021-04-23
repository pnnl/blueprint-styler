# TODO:

### var(--theme) baseline
- build
  - publish
    - crete correct branches
    - version and name
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
- separate different packages on build
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
- js generator of color vars - [hsluv](https://www.hsluv.org/)!
- themes are individual packages with font dependencies?


### Styles
- var(--theme) / General
  - editable text focus is broken
  - grayscale transparency alt
  - math with calc()
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - dark theme Text input with sub-button icon color
  - tune colors ??
  - card bg color needs to be darker ??
  - light theme text color needs softening ??
- Flat
  - dark theme
  - button component divider
- Flat - Mono - intent primary color is grayscale?
- Flat - Gradient buttons?
- [ant.design](https://ant.design/components/overview/)
  - update ant theme to use vars
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
