# TODO:

## App tool
- Publish beta of v3.x
- Change project name to blueprintjs-styler?... add 'js' because thats how its namespaced on npm: [@blueprintjs](https://www.npmjs.com/package/@blueprintjs/core)
  - maybe its better to not affiliate the official blueprint project with this one
- Sections:
  - for each style: add a customizable readme component that renders at the top
- Navigation
  - search
  - shortcut keys
  - nav bar stays in sync with scroll position
- Custom theme editor in the app
  - vars editing
  - make a custom theme and export it
- js generator of color vars - [hsluv](https://www.hsluv.org/)!
- CSS Build
  - separate different packages on build - core, selection, table, etc...
  - export a font file
- Themes are individually published packages - with font dependencies? - monorepo?
  - Add a dependency on the core repo,
  - Generate new style: `$ npm run new-style <style-name>`
  - build it and publish it under `@blueprintjs-style/<style-name>`


## Styles
- v4 - wait until a beta from blueprintjs
- modern colors
  - cerulean cobalt color name change
  - blueprint-modern.scss
  - colors/src/_colors.scss
  - blueprint-datetime-modern.scss
  - table-modern.scss
- var(--style) / General
  - grayscale transparency alt
  - input-transition-shadow could to be broken into input shadow vars...
  - better focus for buttons?
  - math with calc() ?
- Common
  - ellipsize button text by default
  - Segmented Button Group like [this](https://dribbble.com/shots/14424288-Material-X-design-system-UI-kit-Figma-Segments)
- Flat
- Flat Monochrome - intent primary color is grayscale - or all blue tint? - FERC and Starfish
- Flat Colorful - buttons have a colorful gradient?
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
- [ant.design](https://ant.design/components/overview/)
  - button group with active could be slightly different - see original
  - disabled button in button group could have a border?
  - bugs with icon color in input? or something like that
- [Microsoft Fluent](https://developer.microsoft.com/en-us/fluentui#/controls/web)
  - [Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/)
  - slider
  - [colors](https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/shared)
- [PNNL v2](https://forge.pnl.gov/standards/) & [PNNL v3](https://forgedev.pnnl.gov/prc3/)
- [Shopify Polaris](https://polaris.shopify.com/components/actions/button#navigation) v5 & v6
- Serberus - Burgundy Theme
- [Google Material](https://material.io/components)
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Amazon AWS](https://abduzeedo.com/amazon-web-services-design-system)
- [Apple HMI](https://developer.apple.com/design/human-interface-guidelines/)
- [Wordpress](https://make.wordpress.org/design/)?
- [REI Cedar](https://rei.github.io/rei-cedar-docs/)
- Maybe themes that are just colors and fonts?
  - something fancy? serif fonts and such...

### Notes
- [postcss-remove-declaration](https://www.npmjs.com/package/postcss-remove-declaration/v/1.0.0)