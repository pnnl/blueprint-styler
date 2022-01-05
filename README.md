<img alt="blueprint-styler logo" src="./src/assets/logo.svg" width="200px"/>

# Blueprint Styler

Create custom global styles for [Blueprint js Components](https://blueprintjs.com/docs/) using css [`--custom-properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

- [Demo](https://pnnl.github.io/blueprint-styler)

## Quick Start

From the root of the repo:

1. Run `yarn` to install
2. Run `yarn start`
3. Open your browser to http://localhost:9000/

## Build
There are two exports from this project

1. `./libs` is the css style libraries. These are published via npm.
   - Compile this with `yarn run build:libs`
2. `./build` is the a react app used to develop and demo the project
   - Compile this with `yarn run build:react`
- Compile both with `yarn run build`

## Contributing
[TODOs](./TODOs.md)


# Create A New Theme

There are essentially only two steps:
- Override Blueprint default variables (aka [`--custom-properties`](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and _'[Tokens](https://css-tricks.com/what-are-design-tokens/)'_)
- Add additional css to override blueprint css

This works because Blueprint uses global css to style its react components, allowing the styles to be overridden or replaced entirely.

There are two ways of doing this:

## Theme Blueprint In Your Project _(easiest)_
- Import an existing library's styles: `./libs/*-styles/blueprint-token-values.css` and `./libs/*-styles/blueprint.css`
- Override the css custom properties in `blueprint-token-values.css`
- If necessary, override global css in `blueprint.css`

## Create A Blueprint Theme In This Project
This has the advantage of being able to test all blueprint components in the demo react app while developing.
- Create a new `_{theme-name}-styles` folder in `./src/styles`. This must contain a few things:
  - a root scss file named `{theme-name}.index.scss` - this will compile into the libs file
  - a secondary root file named `styler-styles.scss` - this extends `{theme-name}.index.scss` to style the demo react app components. (copy-paste this from another style. It will not typically need to be modified)
  - an `index.tsx` file that is responsible for loading `styler-styles.scss` into the demo react app (copy-paste this from another style. You should not modify this file. See [Style Switching in the Demo React App](#) for details
- Import the original blueprint styles () into `{theme-name}.index.scss` with `@import '../_default-var-styles/default-var-styles.index';`
- Add any additional scss files to override variables and component css. import those after `default-var-styles.index` (in most cases).
  - There are several utility scss files located in `./src/styles/global/`.
- Add your theme to the [`src/styles/style-manifest.ts`](./src/styles/theme-manifest.ts) file. Follow the pattern of the other themes in the file.
- Test your theme - Run the demo app with `yarn start` and select the theme from

### Tips
- Take a look at [`src/styles/_flat-styles/flat-styles.index.scss`](./src/styles/_flat-styles/flat-styles.index.scss) for a relatively simple example
- Take a look at the source: The original, non-customized version of blueprint is contained within `./src/styles/_default-var-styles/@blueprintjs/`. This is copied directly from blueprint and modified slightly. See [Updating Blueprint source files](#) for more details
- `styler-styles.scss` and `index.tsx` typically do not need to be modified
- Refresh the build app often. The hot-reloading css files will get out of sync sometimes. See [Style Switching in the Demo React App](#) for details

### Gotchas
- Importing a css file in scss with the .css suffix will break the style because it adds a css partial
  - example - YES:`@import '~normalize.css/normalize';`,  NO:`@import '~normalize.css/normalize.css';`
- A dark color cannot link to its light counterpart or there will be a circular dependency
  - example - NO: `--dark-circular-property: var(--circular-property);`
  - [`circular-dependency-test.scss`](./src/styles/global/circular-dependency-test.scss) shows examples
  - The lib compiler will sometimes give a warning about this
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
- several more updates documented in [`src/styles/_default-var-styles/@blueprintjs/readme.md`](./src/styles/_default-var-styles/@blueprintjs/readme.md)

## Updating Blueprint Source Files
Updating `./src/styles/_default-var-styles/@blueprintjs/` and `./src/examples` to the latest Blueprint involves an intermediary `develop-copy-only` branch to merge.

- The `development-copy-only` branch manually copies blueprint css and the examples from docs into the `./src` locations via a `yarn run copy` command
- Then `development-copy-only` is merged into `development` so that changes to the modified `@blueprintjs` can be tracked and any conflicts resolved
- `development` change are never meant to be merged back into `development-copy-only`

```
development-copy-only    0–––1–––––––4–––––––--->
                              \       \
development                    2–––3–––5–––6–--->
```

This is not a great solution, open to suggestions for improvements.

## Style Switching In The Demo React App
The React app manages switching imported scss styles in an unconventional way. It captures references to global style objects as they are lazy loaded by react components. Then it toggles their disabled state to apply them. More details are in [`src/styles/useDisableImportedStyles.md`](./src/styles/useDisableImportedStyles.md).

This sometimes causes issues with React 17 hot reloading when new styles are injected into the page. Refresh often.

This is also not a great solution, open to suggestions for improvements.

## Versioning
Major versions should be kept in sync with their blueprint counterpart. Minor versions are incremental updates to this project and exports



# Contributions Welcome
[`TODOs.md`](./TODOs.md)

__GOOD LUCK!__


<!--
## Replacing and Deleting CSS
The css pre-processing is currently configured to [combine duplicated selectors](https://www.npmjs.com/package/postcss-combine-duplicated-selectors) and to [remove duplicate properties](https://www.npmjs.com/package/postcss-combine-duplicated-selectors#duplicated-properties). This means that if you want to override some blueprint css you can write the **exact** same selector and property, import it after the original, and the 2 declarations will be merged and properties de-duped. For example (from [.src/styles/_ibm-carbon-styles/_overlay-styles.scss](.src/styles/_ibm-carbon-styles/_overlay-styles.scss)):
```scss
// $pt-grid-size: 10px;
.bp3-menu{
  padding: $pt-grid-size/2 0;
}
```
Will override the default output of blueprint css:
```css
.bp3-menu {
    ...
    padding: 5px;
    ...
}
```
to output in [ibm-carbon-styles.css](lib/ibm-carbon-styles/ibm-carbon-styles.css):
```css
.bp3-menu {
    ...
    padding: 5px 0;
    ...
}
```
which sets the horizontal padding to 0;

To delete a property instead of overriding it. Set an override to [`null`](https://www.npmjs.com/package/postcss-remove-null) in the scss.
```scss
.bp3-selector { property: null; }
```
will delete that property
-->


<!--
## Vars Theme - Coming Soon
I'm working out a way to make a theme that uses css `--custom-properties`. This would be theme-able at runtime and would be significantly easier to write custom themes. The main problem with this approach is that sass is used to combine colors (and do math) in a way that is incompatible with custom-properties. This requires too many overrides to be practical with the current approach.

The new approach would be to copy all the .scss files over from the blueprint node_modules file, unedited and then edit the scss directly without having to override specific css.

For the vars-theme I'm going to:
- set all the scss variables to css custom-properties,
- replacing where color functions are applied in scss `rgba()` and `mix()` with a `var()` composition of something similar.
- replacing all (or most) math in scss with css `calc()` functions that include `var()`s.
- output all the `--custom-properties` as a separate css file that can be replaced or overridden on the project level. Also output js/ts mappings for all this. Maybe json too?
- not sure what to do about blueprint's dark-theme

This just leaves the problem of updating to match newer versions of blueprint. For that I'm going to try a two branch strategy that will look like this:
```
root-branch    0–––1–––––––4–––––––––>
                    \       \
themes-branch        2–––3–––5–––6–––>
```
1. Use a script to copy all `.scss` files (and folder structure) from `node_modules/@blueprint` over to a src directory.
   - get this copied scss to compile without directly editing any of the copied files. This should produce a default theme.
   - repeat this step for each theme that will require its own css, making a new directory for each theme.
2. Branch to a theme-branch
3. Edit all the copied scss directly to produce new themes. Stay light on the editing of the root files. as we will need to persistently merge updated blueprint versions on top of the edits.
     - Don't reformat white space, etc...
     - don't change the folder structure
     - perform major edits in new files
4. Update the root-branch using the same copy script each time blueprint has a release.
5. Merge the root-branch changes into the theme-branch and resolve any direct conflicts
6. Update any additions, repeating step 3...
7. Repeat 3-6 until the merges become too tedious, then maybe start from scratch?

arbitrary change...
-->
