<img alt="blueprint-styler logo" src="./src/assets/logo.svg" width="200px"/>

# Blueprint Styler

Create custom global styles for [Blueprint js Components](https://blueprintjs.com/docs/) using css [`--custom-properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

[Live Demo](https://pnnl.github.io/blueprint-styler)

# Create A New Theme
Blueprint uses global css to style its react components, allowing the styles to be overridden or replaced entirely. This project overrides the default blueprint global css with a version that uses [`--custom-properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (also referred to as  _'[Tokens](https://css-tricks.com/what-are-design-tokens/)'_).

There are two ways to create a custom theme:

## Theme Blueprint In Your Project _(easiest)_
- Install this project via npm: `npm install blueprint-styler` or `yarn add blueprint-styler`
- Import the blueprint base styles from `./base/blueprint.css` and `./base/blueprint-tokens.css`
- (optionally) Import an existing style override to start from: `./overrides/{style_name}/override.css` and `./overrides/{style_name}/override-tokens.css`
- In a `:root{...}` selector in your css, override --custom-properties from `blueprint-tokens.css`
- If necessary, override global css in `blueprint.css` for additional control

## Create A Blueprint Theme In This Project
While more difficult, this has the advantage of being able to test all blueprint components in the demo react app while developing.
- Create a new `_example` folder in `./src/styles`. This must contain a few things:
  - a root scss file named `index.scss` - this will compile into the `overrides/example/override.css` file and `overrides/example/override-tokens.css` files. This file must also set the `$ns` (namespace) and `!default` `$root-selector` variables as follows:
    ```scss
    $ns: "bp5";
    $root-selector: ":root" !default;
    ```
  - a secondary root file named `styler-styles.scss` - this extends `index.scss` to style the demo react app components. This file needs to reset the `$root-selector` to scope the style to a app's theme switching method.
    ```scss
    // The .bpx-name must match the one in style-manifest.ts
    $root-selector: ":root.bpx-example";
    @import './index';
    // additional styler app styles can go here
    ```
- Add your theme to the [`src/styles/style-manifest.ts`](./src/styles/style-manifest.ts) file. Follow the pattern of the other themes in the file.
- override styles
  - everything exported must be wrapped in a `#{$root-selector} {...}` block. This scopes it accordingly.
  - override vars and styles - copy-paste vars from files in `./src/styles/_blueprint/common/` and `./src/styles/_blueprint/components/`, and change the values to override them.
  - There are several utility scss files located in `./src/styles/global/`.
- Test your theme - Run the demo app with `yarn start`, go to http://localhost:9000/, and select the theme from the style dropdown.

### Tips
- Take a look at [`./src/styles/_flat/index.scss`](./src/styles/_flat/index.scss) for a relatively simple example
- Take a look at the source: The original, non-customized version of blueprint is contained within `./src/styles/_blueprint/@blueprintjs/`. This is copied directly from blueprint and modified slightly. See [Updating Blueprint Source Files](#) for more details
- Refresh the build app often. The hot-reloading css files will get out of sync sometimes.

### Gotchas
- Importing a css file in scss with the .css suffix will break the style because it adds a css partial
  - example - YES:`@import '~normalize.css/normalize';`,  NO:`@import '~normalize.css/normalize.css';`
- A dark color cannot link to its light counterpart or there will be a circular dependency
  - example - NO: `--dark-circular-property: var(--circular-property);`
  - [`circular-dependency-test.scss`](./src/styles/global/circular-dependency-test.scss) shows examples
  - The vars compiler will sometimes give a warning about this
- Dark vars are used in dev only and stripped out in build

### Test A Custom Set Of Blueprint Components
- Edit the [src/examples/custom-examples/customWorkingExample.tsx](./src/examples/custom-examples/customWorkingExample.tsx) or add a new example to this directory.
- Uncomment/add that custom example at the top of [`src/components/allExamples.tsx`](./src/components/allExamples.tsx)



# How Blueprint Styler Works
Blueprint scss is copied and minimally modified. New updates are merged in via a an intermediary 'copy' branch.

Modifications are intentionally kept as minimal as possible to make future merges easier.

Modification to the original @blueprint scss files:
- commenting out all `.bpX-dark` theme declarations. Dark theme switching is handled by css custom properties now.
- many colors and functions are edited to resolve scss color functions issues
- several more updates documented in [`src/styles/_blueprint/@blueprintjs/readme.md`](./src/styles/_blueprint/@blueprintjs/readme.md)

## Updating Blueprint Source Files
Updating `./src/styles/_blueprint/@blueprintjs/` and `./src/examples` to the latest Blueprint involves an intermediary `develop-copy-only` branch to merge.

- The `develop-copy-only` branch manually copies blueprint css and the examples from docs into the `./src` locations via a `yarn run copy` command
- Then `develop-copy-only` is merged into `develop` so that changes to the modified `@blueprintjs` can be tracked and any conflicts resolved
- `develop` change are never meant to be merged back into `develop-copy-only`

```
develop-copy-only    0–––1–––––––4–––––––--->
                          \       \
develop                    2–––3–––5–––6–--->
```

This is not a great solution; open to suggestions for improvements.

## Versioning
Major versions should be kept in sync with their blueprint counterpart. Minor versions are incremental updates to this project and exports

## Build
There are two exports from this project

1. `./base` and `./overrides` are the css style libraries. These are published via npm.
   - Compile this with `yarn run build:libs`
2. `./build` is the a react app used to develop and demo the project
   - Compile this with `yarn run build:react`
- Compile both with `yarn run build`

# Contributions Welcome
[`TODOs.md`](./TODOs.md)

__GOOD LUCK!__
