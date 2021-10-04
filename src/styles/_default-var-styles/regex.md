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

# comment out // property: $dark-something;
(\s)([^$][a-z][^:$]*:[^\$]*\$[^;]*dark-[^;]*;)
 $1//$2

# comment out @include dark-something()
(@include.*dark-.*\(\);)
// $1

# find this
// replace var

# replace emit-idnetity var // --pt-font-size: $pt-grid-size * 1.4; => @include emit-identity-var('pt-font-size', $pt-font-size);
// --([\w-]*):
@include emit-identity-var('$1', $$$1); // --$1:

```

# Changes

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
