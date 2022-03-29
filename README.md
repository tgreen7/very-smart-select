Forked from https://github.com/closedcontour/very-smart-select

Adds setting `very-smart-select.excludeBrackets`. This will make it so you can just select the contents of the brackets (or strings) on first expand and then the brackets themselves on the second.

A much smarter, drop-in replacement to the default Expand/Shrink Selection commands.

![](https://raw.githubusercontent.com/tgreen7/very-smart-select/master/image/very-smart-select.gif)

Currently supported languages:

- Typescript (.ts, .tsx)
- JavaScript (.js, .jsx)
- JSON

For these languages, the TypeScript compiler is used to find smart selection expansions.

For unsupported languages, defaults to the original Expand/Shrink Selection.
