---
title: Headings
description: Always use short and understandable headings.
meta:
  - name: "og:description"
    content: Headings
  - name: keywords
    content: Headings
tags:
  - Headings
  - Header
  - ATX
  - Style
---

<Header/>

---

<!-- vale off -->

## ATX Style

<!-- vale on -->

Always use [atx-style](http://www.aaronsw.com/2002/atx/intro "Link explaining what atx-style is") headings (not closed) instead of [Setext](http://docutils.sourceforge.net/mirror/setext.html "Link explaining what Setext is").

The level can be seen and the number of characters must not match in both lines.

ATX also works for all levels, while Setext only goes up to level 2.

> remark-lint: [heading-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-heading-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
# One

## Two

### Three
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
One
===

Two
---
```

No closed ATX styled headings:

```markdown
# One #

## Two ##

### Three ###
```

## Empty lines before and after

Always surround headers by a single empty line except at the beginning of the file.

**:thumbsup: Correct** code for this rule:

```markdown
... some content.

# One

Sparkling and awesome...
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
... some content.
# One
Sparkling and awesome...
```

```markdown
... some content.


# One


Sparkling and awesome...
```

## Content spacing

Always separate the marker character `#` from the actual header content using a single space.

> remark-lint: [no-heading-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-content-indent "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
# One
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
#One
```

```markdown
#  One
```

## No Content Before

Make sure that there are no other characters (including spaces) in front of headings.

> remark-lint: [no-heading-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-content-indent "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
# One
```

::: tip Note
Note: The `·` character represents a space character.
:::

**:thumbsdown: Incorrect** code for this rule:

```markdown
.# One
```

```markdown
·# One
```

## No Duplicate

Avoid using two or more headers with the same content in the same markdown file.
Many Markdown renderer generate IDs for headers based on the header content.

> remark-lint: [remark-lint-no-duplicate-headings](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings)
> and [remark-lint-no-duplicate-headings-in-section](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section)

**:thumbsup: Correct** code for this rule:

```markdown
# One

## One One

# Two

## Two Two
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# One

## Two

# Three

## One
```

## Sentences case

Use an upper case letter as the first letter of a header, unless it is a word that always starts with lowercase letters,
for example proper names or code snippets.

**:thumbsup: Correct** code for this rule:

```markdown
# The quick brown fox jumps over the lazy dog
```

Proper names or code snippets:

```markdown
# React

# `string`

# init main
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# summer is hot
```

Proper names or code snippets:

```markdown
# react

# `String`

# Init
```

## Length

Prefer using short header with a maximum length of 80 character (without markers).

Instead of using a long sentence, make the header a summary and write the long sentence as the first paragraph beneath the header.

This makes it effortless to refer to the header later, specially if automatic IDs or a TOC (Table Of Content) are created.

> remark-lint: [maximum-heading-length](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-heading-length "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
# One

The summer is sparkling and awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# The summer is sparkling and awesome!
```

## Punctuation after content

Do not use any punctuation at the end of a header
for example a trailing (semi)colon `;:`, period `.`, closing marker `#` or any "sentence amplifier" (`!?`).

Every header is an introduction to what is about to come next, which is exactly the function of a colon.

Also the header is not a sentence, or at least only a short sentence, so there is not need to add a sentence separator to it.

> remark-lint: [no-heading-punctuation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-punctuation "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
# One

Sparkling and awesome.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# One: Sparkling
```

```markdown
# One. Frozen.
```

```markdown
# One #
```
