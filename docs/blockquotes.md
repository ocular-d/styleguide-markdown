---
title: Blockquotes
description: How to use blockquotes.
meta:
  - name: "og:description"
    content: Blockquotes
  - name: keywords
    content: Blockquotes
tags:
  - Blockquotes
---

<Header/>

---

## Indentation

Always separate the marker `>` from the actual content using a single space.

> remark-lint: [blockquote-indentation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-blockquote-indentation "Link to remarkjs docs" )

**:thumbsup: Correct** code for this rule:

```markdown
> One
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
>One
```

```markdown
>  One
```

## Multi line

Use a `greater than` sign (`>`) for every line, including wrapped.

> remark-lint: [no-blockquote-without-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
> One
> Two
```

```markdown
> The summer is awesome!
> It is home for many beautiful events.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
> One
Two
```

```markdown
> Summer is awesome. It is a beautiful
time of the year.
```
