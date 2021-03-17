---
title: Lists
description: How to use lists.
meta:
  - name: "og:description"
    content: Lists
  - name: keywords
    content: Lists
tags:
  - Lists
---

<Header/>

---

## Unordered marker

Use dashes `-` marker.

> remark-lint: [unordered-list-marker-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- One
- Two
- Three
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
* One
* Two
* Three
```

```markdown
+ One
+ Two
+ Three
```

## Ordered marker

Use continuous numerating marker for ordered list items.

This increases the readability and overview and allows to refer to items by their number in the same markdown file or externally.

It also allows to create sub-items which is impossible if the same number will be used for all top-level items.

The marker character must be a dot (`.`), characters like a closing brace (`)`) are not allowed since they are only supported in CommonMark.

The only disadvantage is that references break when a new list item is added.

<!--lint disable-->

This problem can be reduced by

- Using an unordered list until the final structure and layout has been determined.
- Keeping references close to the list to avoid forgetting to update them.
- Always specify an specific version of the markdown file when referring from an external document.

> remark-lint: [ordered-list-marker-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style "Link to remarkjs docs")
and [remark-lint-ordered-list-marker-value](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value "Link to remarkjs docs")

<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
1. One
2. Two
  2.1 Two dot one
3. Three
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
1. One
1. Two
  1.1 Two dot one
1. Three
```

```markdown
1) One
1) Two
  1.1) Two dot one
1) Three
```

```markdown
1) One
2) Two
  2.1) Two dot one
3) Three
```

## No content before

Make sure that there are no other characters (including spaces) in front of each list item.

> remark-lint: [list-item-bullet-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- One
- Two
  - Two dot one
- Three
```

```markdown
1. One
2. Two
  2.1 Two dot one
3. Three
```

**:thumbsdown: Incorrect** code for this rule:

::: tip Note
The `·` character represents a space character.
:::

```markdown
x- One
 - Two
  .- Two dot one
"- Three
·- Four
```

```markdown
x1. One
 2. Two
  .2.1 Two dot one
"3. Three
·4. Four
```

## Continuous indentation

Use two (2) spaces for continuous indentation of nested items and their content.

<!--lint disable-->

> remark-lint: [list-item-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-content-indent "Link to remarkjs docs")
and [list-item-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-indent "Link to remarkjs docs")

<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
- One
  - One dot one
- Two
  - Two dot one
- Three
  - Three dot one
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- One
    - One dot one
- Two
 - Two dot one
- Three
   - Three dot one
```

```markdown
- One
    One dot one!
- Two
 Two dot one!
- Three
   Three dot one!
```

## Empty lines

A list must not contain blank lines between each list item.

> remark-lint: [list-item-spacing](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-spacing "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- One
- Two
  - Two dot one
- Three
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- One

- Two

  - Two dot one

- Three
```

## Empty lines before and after

Always surround lists by a single empty line except at the beginning of the file.

**:thumbsup: Correct** code for this rule:

```markdown
... a line with text.

- One
- Two
  - Two dot one
- Three

Another line with text...
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
... a line wit text.
- One
- Two
  - Two dot one
- Three
Another line with text...
```

```markdown
... a line with text.


- One
- Two
  - Two dot one
- Three


Another line with text...
```

## Letter case

Use upper cases for enumerations because most of the time the content is a noun, proper name, code snippet or standalone sentence.

When the list items are meant to be imaginary concatenated with the sentence that comes before the list, adapt to the same case as the context.

**:thumbsup: Correct** code for this rule:

```markdown
This is awesome

- The summer is hot.
- A lot of beautiful human beings.
```

Proper names or code snippets:

```markdown
A list for

- React
- `String`
```

**:thumbsdown: Incorrect** code for this rule:

Proper names or code snippets:

```markdown
A list for

- react
- `string`
```

## Punctuation after items

Use punctuation at the end of a list item when it contains a sentence that starts with an upper case letter or multiple sentences or paragraphs.

Omit the punctuation for single words.

**:thumbsup: Correct** code for this rule:

```markdown
- One
- Two
- Three
```

```markdown
The Winter is

- Sparkling and frozen.
- Cold and snowy.
- Bright and enlightened.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- One.
- Two.
- Three.
```

```markdown
The Winter is

- sparkling and frozen
- cold and snowy
- bright and enlightened
```

## Checkbox character style

Use `x` for ticked checkboxes and a single space ` ` for non ticked checkboxes.

> remark-lint: [checkbox-character-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-character-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- [x] One
- [ ] Two
- [x] Three
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- [!] One
- [~] Two
- [»] Three
```

```markdown
* [] One
* [  ] Two
* [     ] Three
```
