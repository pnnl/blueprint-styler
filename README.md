# Blueprint Styler

This project is meant to help create custom global styles for [Blueprint js Components](https://blueprintjs.com/docs/)

[Project Demo](https://stash.pnnl.gov/pages/UXRSRC/blueprint-styler/master/browse/dist/index.html)

## Quick start

From the root of the repo:

1. Run `npm i`
2. Run `npm start`
3. Open your browser to http://localhost:9000/

*Note: if you want to run the development server on a different port, set the `PORT` environment variable.*

## Build

1. Run `npm run build` to export the compiled scss libs
2. copy pasta the `./lib` css or js files you need into your project
  - theme libs include compiled css, and vars in scss, less, js, ts, and json

This will hopefully be published on artifactory or npm later, when its more mature.


## Note on the status of this project
Its currently a hot mess. In a v2, we'll be switching to a `--custom-properties` based approach. This is documented below. The lib output of this will also hopefully be published to PNNL's artifactory (or maybe just regular npm if pnnl isn't super strict about releasing it). We also will be upgrading to react@17 and create-react-app@4 for hot-reloading, and I need to clean out the dependencies.

# To create a new Theme
In `src/styles/` each theme has a root folder named `_{theme-name}-styles`. Copy one if you want to make your own.

Each theme also has a corresponding object config in `src/styles/style-set.config.js` that needs to be set to the app knows its there. The default theme is the first in the array.

`src/styles/global` are common css overrides and additions that are imported into multiple themes. *(this should probably have been named 'common')*

Each theme folder contains a two root scss files:
- `{theme-name}.index.scss` - this contains the root theme
- `styler-styles.scss` - this imports the `{theme-name}.index.scss` and also includes the app-specific styles that are not needed in lib css

Most of the themes just `@import` scss from `node_modules/@blueprint` and override it. Blueprint makes overriding easy for `$vars` by specifying adding the [`!default`](https://sass-lang.com/documentation/variables#default-values) flag after each variable. This means overriding blueprints variables can be done before the vars are actually imported. Overriding `@mixins` and `@functions` is a different story.

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

Its really even *more* complex than this, but I'm not going to document that now. I think shifting to the Var-theme strategy documented below will solve a lot of these issues.

**GOOD LUCK!**

# To test some custom set of blueprint components
- edit the [.src/examples/custom-examples/customWorkingExample.tsx](.src/examples/custom-examples/customWorkingExample.tsx) or add a new example to this directory.
- uncomment/add that custom example at the top of [`.src/components/allExamples.tsx`](.src/components/allExamples.tsx)

# Vars Theme - Coming Soon
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
root-branch    0–––1–––––––4–––––––--->
                    \       \
themes-branch        2–––3–––5–––6–--->
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

