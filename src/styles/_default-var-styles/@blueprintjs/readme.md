# Be careful editing the @blueprint folder
Keep edits as light as possible to avoid merge conflicts. See the root README.md for more details

## Changes

Search for
- @import `~@blueprintjs` except `~@blueprintjs/icons`
- `rgba(`
- `mix(`
- `menu-background(`
- `svg-icon(`
- `$pt-border-radius` with `calc(#{$pt-border-radius} - 1px)`
- `border-shadow(`
- `input-transition-shadow(`
- `dark-input-transition-shadow(`
- `pt-input-intent(`
- `pt-dark-input-intent(`
- `pt-tag-intent(`
- `pt-tag-minimal-intent(`
- `pt-tag-interactive(`
- `pt-tag-minimal-interactive(`

Copy `!default` $vars to `src/styles/_default-var-styles/components`
replace color vars with `// custom` color-aliases if they exist

## Regex
```regex
:[^;]*;
:[^;]*(;|,)

# rgba($color-value, 0.1) => hslax(var(--color-value-hsl), 0.1)
rgba\(\$((\w|-)*),
hslax(var(--$1-hsl),

# scss hsla does not handle var(--custom-properties) correctly
hslax
hsla

# $original-variable: $whatever; => --original-variable: $whatever;
\$([^:]*):
--$1:

# $variable => var(--variable);
\$([\w-]*)
var(--$1)

# $identity: $whatever; => $identity: var(--identity);
\$([^:]*):.*
$$$1: var(--$1);

# comment out // property: $dark-something;
(\s)([^$][a-z][^:$]*:[^\$]*\$[^;]*dark-[^;]*;)
 $1//$2

# comment out @include dark-something()
(@include.*dark-.*\(\);)
// $1

# replace emit-identity var // --pt-font-size: $pt-grid-size * 1.4; => @include emit-identity-var('pt-font-size', $pt-font-size);
// --([\w-]*):
@include emit-identity-var('$1', $$$1); // --$1:

```

Post bp4
- rgba( => hslax(
  - update hslax to accept non- hsl colors
  - revert all -hsl usages in hslax 
  - find undeclared vars with: https://chrome.google.com/webstore/detail/css-undefined-variable-ch/endbpplgeglmgihkpiapmaimegpkhhcn
- update base colors
- -dark theme
