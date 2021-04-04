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


# TODO
- export more vars
- dark theme color mirror
- `--shadow-color:var(--black);` and `--shine-color:var(--white);`
- `--background:var(--white);`
- math?
- fix the other styles, now that merge properties and delete duplicates is gone...

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
