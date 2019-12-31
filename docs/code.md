# Code

::: tip Key Point
:bulb: Rules for code and code blocks.
:::

## Blocks
<!--lint disable-->
Avoid indentation based code blocks, use [fenced code blocks](https://spec.commonmark.org/0.29/#fenced-code-blocks "Link to CommonMark spec") for multi line code.

This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting](https://v1.vuepress.vuejs.org/guide/markdown.html#syntax-highlighting-in-code-blocks "Link to vuepress docs about syntax highlighting").

> remark-lint: [code-block-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
```js
    import React, { PureComponent } from "react";

    class Awesome extends PureComponent {
      // ...
    }

    export default Awesome;
```
~~~

## Syntax highlighting

Explicitly declare the language for blocks containing code snippets, so that neither the syntax highlighter nor the next editor must guess.

> remark-lint: [fenced-code-flag](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~md
```
import React, { PureComponent } from "react";

class Awesome extends PureComponent {
  // ...
}

export default Awesome;
```
~~~

## Escape newlines in terminal commands

Command snippets are intended to be copied and pasted directly into for example a terminal.

To protect the user from unintentional run the copied code due to a newline (interpreted by the terminal as <kbd>Enter</kbd>) use a single backslash at the end of the line.

**:thumbsup: Correct** code for this rule:

```shell
npx run docs:generate -- --template=plone --description="Plone is awesome" \
--elements="volto" --scale=20
```

**:thumbsdown: Incorrect** code for this rule:

```shell
npx run docs:generate -- --template=plone --description="Plone is awesome" --elements="volto" --scale=20
```

## No shell code dollar sign

Avoid to use dollar sign (`$`) in shell code.
It improves the readability and prevents error when users copy and paste the code.

To clarify the output of a command use for example a comment on the next line or optionally append it to the command on the same line, separated by a whitespace.

> remark-lint: [no-shell-dollars](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shell-dollars "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```shell
echo "Plone is awesome!"
```

```shell
winter="Plone is awesome!"
echo $winter # Plone is awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```shell
$ echo "Plone is awesome!"
```

## Within lists

When using code blocks within lists make sure to use the correct indention to not break the list.

**:thumbsup: Correct** code for this rule:

~~~
- Plone
  ```jsx
  const Volto = <Scale amount=20 />;
  ```
- Guillotina
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
- Plone
```jsx
const Volto = <Scale amount=20 />;
```
- Guillotina
~~~

## Inline

Use one (1) backtick character `` ` `` to create a `inline code` span which will render all wrapped content literally.

**:thumbsup: Correct** code for this rule:

```md
Use `pip` and `buildout`!
```

**:thumbsdown: Incorrect** code for this rule:

~~~md
Use ```pip``` and ```buildout```!
~~~

## Marker character style

Use backtick characters `` ` `` for both blocks and inline code.

> remark-lint: [fenced-code-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-marker "Link to remarkjs docs")


**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";
class Awesome extends PureComponent {
  // ...
}
export default Awesome;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

```
~~~js
import React, { PureComponent } from "react";
class Awesome extends PureComponent {
  // ...
}
export default Awesome;
~~~
```

## Use cases

[Code blocks](#blocks) should be used for code snippets longer than a single line
or terminal command quotations that contain sample output when the being executed.

[Inline code spans](#inline) on the other hand should be used to highlight e.g.

- **Executables** - `gcc`, `npm`, `go`, `python`
- **Paths** - `/etc/hosts`, `src/main/java/com/arcticicestudio/icecore/hashids/Hashids.java`
- **Version numbers** - `0.2.0`, `1.8.6-frost.2`
- **Code for example reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`

Don't use it for

- **Project or proper names** - for example [React](https://reactjs.org "Link to reactjs"), [GCC](https://gcc.gnu.org "Link to GCC"), [Node.js](https://nodejs.org "Link to nodejs"), [Golang](https://golang.org "Link to Golang") or [Rust](https://www.rust-lang.org "Link to rust")
- **Libraries** - for example [libc](https://crates.io/crates/libc "Link to libc")
- **Packages and modules** - for example [react-dom](https://www.npmjs.com/package/react-dom "Link to react-dom")
<!--lint enable-->
