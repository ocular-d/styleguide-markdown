---
title: Emphasis
description: How to use emphasis to highlight text.
meta:
  - name: "og:description"
    content: Emphasis
  - name: keywords
    content: Emphasis
tags:
  - Emphasis
---

<Header/>

---
## Italic

Use one (1) asterisk `*` marker to generate spans for italic formatted text.

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker "Lint to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
*One*
*Two*
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
__One__
__Two__
```

## Bold

Use two (2) asterisk `*` marker to generate spans for bold formatted text.

<!--lint disable-->

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker "Link to remarkjs docs") and [strong-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-strong-marker "Lint to remarkjs docs")

<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
**One**
**Two**
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
*One*
```

## No header replacement

Do not use emphasis elements (bold or italics) to introduce a multi line named section.
Use headers instead which is exactly the semantic meaning of headers.

As a consequence, many implementations add useful behaviors to headers and not to emphasis elements, such as automatic ID generation (anchor)
to make it effortless to refer to the header later on.

Use a level 6 header if the meaning of the header section should not stand out great.

> remark-lint: [no-emphasis-as-heading](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading "Lint to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
## One

The summer is awesome!

## Two

Spring is nice, too!
````

```markdown
###### One

The summer is nice!

###### Two

Spring is awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
**One**

The summer is beautiful!

__Two__

Spring is great!
```

## No inner spacing

Do not use inner spaces for any markers.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
**One**
*Two*
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
** One **
* Two *
```

```markdown
**      One **
* Two            *
```
