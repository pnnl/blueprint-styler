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

Search for
- @import `~@blueprintjs` except `~@blueprintjs/icons`
- `rgba(`
- `mix(`
- `menu-background(`
- `svg-icon(`
- `$pt-border-radius` with `calc(#{$pt-border-radius} - 1)`
- `border-shadow(`
- `input-transition-shadow(`
- `dark-input-transition-shadow(`
- `pt-input-intent(`
- `pt-dark-input-intent(`
- `pt-tag-intent(`
- `pt-tag-minimal-intent(`
- `pt-tag-interactive(`
- `pt-tag-minimal-interactive(`

Copy `!default` $vars to `src/styles/_default-var-styles/component-vars`
replace color vars with `// custom` color-aliases if they exist
