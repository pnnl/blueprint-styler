# TODO:

## v5 bugs
- Toaster example
- PopoverPlacementExample css is missing
- DateRangePicker range colors
- Dark Theme
  - Section
  - Card List
  - Tag interactive hover
  - Dialog Footer

## Docs
- example theme as code
- explain how tokens inherit - specifically hsl

## Next Iteration
- Remove dark theme everything
  - dark themes should be a theme like any other
  - remove high-contrast theme - also a theme like any other
- Tokens
  - use design tokens
  - fix tokens so they are more conventional 
    - colors: 10–90, black is 0, 100 is white 
    - js generator of color vars - [hsluv](https://www.hsluv.org/)!
    - better semantically named colors
- Theme creator app tool
  - color
  - font
  - border radius
  - spacing
  - custom css in a code editor
  - download and use the css file!

## App tool
- add ToolTip to Sample
- Navigation
  - search
  - shortcut keys
  - nav bar stays in sync with scroll position
- Custom theme editor in the app
  - vars editing
  - make a custom theme and export it
- js generator of color vars - [hsluv](https://www.hsluv.org/)!


## Build
- update from `node-sass` to `sass` (dart-sass) - https://sass-lang.com/blog/libsass-is-deprecated
  - tile importer? `tilde-sass`?
  - `cssnano`
  - `postcss-*`
  - `gulp-sass`, `gulp-postcss`, `gulp-cssbeautify`
- CSS Build
  - separate different packages on build - core, selection, table, etc...
  - export a font file for each theme?
  - look for undefined vars with: https://chrome.google.com/webstore/detail/css-undefined-variable-ch/endbpplgeglmgihkpiapmaimegpkhhcn
  - only output custom tokens in overrides
    - 'custom-tokens.ext'
    - cross reference original 'tokens.ext' to eliminate duplicates
- Themes are individually published packages - with font dependencies? - monorepo?
  - Add a dependency on the core repo,
  - Generate new style: `$ npm run new-style <style-name>`
  - build it and publish it under `@blueprint-styler/<style-name>`


## Styles
- var(--style) / General
  - remove most component tokens, make it more simple
  - better focus for buttons?
  - input-transition-shadow could to be broken into input shadow vars...
  - math with calc() ?
- Common
  - export common helpers as their own independent addons
  - common-ellipsize-buttons text by default
  - common-segmented-button-group like [this](https://dribbble.com/shots/14424288-Material-X-design-system-UI-kit-Figma-Segments)
- v4
  - dark white outlines: https://github.com/palantir/blueprint/wiki/4.x-Changelog#may-5-2022
  - update _forms-controls.scss with new $values and others by comparing merge
- v3
- [IBM Carbon](https://www.carbondesignsystem.com/components/overview)
  - Dialog Footer Buttons
  - Toast Colors
- [Google Material](https://material.io/components)
  - Catalyst
- Flat
- Flat Monochrome - intent primary color is grayscale - or all blue tint? - FERC and Starfish
- Flat Colorful - buttons have a colorful gradient?
- [ant.design](https://ant.design/components/overview/) aka 'antd'
  - [dark theme](https://ant.design/components/overview/?theme=dark)
  - BUG: disabled form states are all wacky
  - BUG: has wrong hover states
     -  minimal intent none button-group
     -  buttons in toast
  - BUG: icon color in input? or something like that
  - button group with active could be slightly different - see original
  - disabled button in button group could have a border?
- [Microsoft Fluent](https://developer.microsoft.com/en-us/fluentui#/controls/web)
  - [Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/)
  - [Colors](https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/shared)
  - BUG: single icon button should not be blue?
  - BUG: default primary blue is wrong: https://developer.microsoft.com/en-us/fluentui#/controls/web/button
  - slider style
  - dark theme
- [PNNL v2](https://forge.pnl.gov/standards/) & [PNNL v3](https://forgedev.pnnl.gov/prc3/)
  - level 6 colors are missing
- [Shopify Polaris](https://polaris.shopify.com/components/actions/button#navigation) v5 & v6
- Serberus - Burgundy Theme
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Amazon AWS](https://abduzeedo.com/amazon-web-services-design-system)
- [Apple HMI](https://developer.apple.com/design/human-interface-guidelines/)
- [Wordpress](https://make.wordpress.org/design/)?
- [REI Cedar](https://rei.github.io/rei-cedar-docs/)
- [Kaizen](https://cultureamp.design/components/overview/)
- Maybe themes that are just colors and fonts?
  - something fancy? serif fonts and such...

### Notes
- [postcss-remove-declaration](https://www.npmjs.com/package/postcss-remove-declaration/v/1.0.0)
