# regex
```regex
:[^;]*;

\$([^:]*):.*
$$$1: var(--$1);

:[^;]*(;|,)

rgba\(\$((\w|-)*),
hslax(var(--$1-hsl),
```


# TODO
- export more vars
- dark theme color mirror
- `--shadow-color:--black;` and `--shine-color:--white`
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
