# TODO:

### App tool
- update readmes
  - a dark color cannot link to its light counterpart or there will be a circular dependency
  - crazy css switching scheme
  - importing a css file in scss with the .css suffix will break the style because it adds a css partial
- switch to create-react-app
  - redo commenting out dark mode - for easier merges later on...
- v4
  - do it
- CSS Build?
  - separate different packages on build - core, selection, table, etc...
  - provide no minified?
  - provide non-fallback version of css?
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
- Generate new style: `$ npm run new-style <style-name>`
- Publish: `$ npm run publish <style-name>` publish a lib to npm under `@blueprint-style/<style-name>`
  - update versioning
- directions for development

### Styles
- var(--theme) / General
  - ellipsize button text by default
  - editable text focus is broken
  - grayscale transparency alt
  - math with calc()
  - input-transition-shadow could to be broken into input shadow vars...

- [ant.design](https://ant.design/components/overview/)
  - button group with active could be slightly different - see original
  - disabled button in button group could have a border?
  - slider
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - dark timepicker-input intent-danger (error) :focus states are broken
  - `<Callout/>`, `<Toast/>`, `<Alert/>`? more like [Carbon Notification](https://www.carbondesignsystem.com/components/notification/style)
  - dark theme Text input with sub-button icon color
  - tune colors ??
  - card bg color needs to be darker ??
  - light theme text color needs softening ??
- Flat
  - dark theme
  - button component divider
- Flat - Mono - intent primary color is grayscale?
- Flat - Gradient buttons?
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
- switch icon libraries?
