# regex
```regex
:[^;]*;
:[^;]*(;|,)

rgba\(\$((\w|-)*),
hslax(var(--$1-hsl),

# $original-variable: $whatever; => --original-variable: $whatever;
\$([^:]*):
--$1:

# $variable => var(--variable);
\$([\w-]*)
var(--$1)

# $identity: $whatever; => $identity: var(--identity);
\$([^:]*):.*
$$$1: var(--$1);

hslax
hsla
```
# Changes
- @import `~@blueprintjs` except `~@blueprintjs/icons`
- `border-shadow(`
- `input-transition-shadow(`
- `dark-input-transition-shadow(`
- `pt-input-intent(`
- `pt-dark-input-intent(`
- `pt-tag-intent(`
- `pt-tag-minimal-intent(`
- `pt-tag-interactive(`
- `pt-tag-minimal-interactive(`
- `rgba(`
- `mix(`
- `menu-background(`
- `svg-icon(`
- –––

# TODO
- build
  - rename files and folders
  - camelCase not CamelCase?
  - publish
- fix the other styles, now that merge properties and delete duplicates is gone...
  - [postcss-remove-declaration](https://www.npmjs.com/package/postcss-remove-declaration/v/1.0.0)
  - ant
- https://github.com/postcss/postcss-custom-properties
- math?

