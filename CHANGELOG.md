# Change Log

## 4.0
- BREAKING CHANGE: in v3.x modified styles like flat and antd were self contained. In v4.x, all styles require importing the blueprint base styles from `./base/blueprint.css` & `./base/blueprint-tokens.css`, and the overriding them with a style from `./overrides/style/override.css` & `./overrides/style/override-tokens.css`. `./overrides/style/custom-tokens.*` files are also not self contained and require their base counterparts.
- BREAKING CHANGE: all paths and filenames have been changed since v3.x
- Method of theme switching in the app no longer relies on the [React Lazy Style Switcher](https://stackoverflow.com/questions/48047362/how-to-remove-imported-css-in-reactjs/67352039#67352039). It is now just scoped to style css classes.
