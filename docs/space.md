---
title: Spaces
description: Guide about empty spaces.
meta:
  - name: "og:description"
    content: Guide about empty spaces
  - name: keywords
    content: Spaces
tags:
  - Empty
  - Spaces
---

<Header/>

---

## Indentation character

Always use spaces where two (2) spaces are used for indentation.

**The usage of tab characters is disallowed**.

A tab could be a different number of columns depending on the environment, but a space is always one column.

Adhering to this rule increases the code readability and maintainability significantly.

> remark-lint: [no-tabs](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-tabs "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
Plone is fun!
  This line contains 2 space characters.
```

**:thumbsdown: Incorrect** code for this rule:

::: tip Note
The `»` character represents a tab.
:::

```markdown
Plone is fun!
 » This line contains a tab character.
```

```markdown
Plone is fun!
    This line contains 4 space characters.
```

```markdown
Plone is fun!
 This line contains only 1 space character.
```

## Before blocks

Always add one (1) blank line before blocks except the first line of the file.

<!--lint disable-->

> remark-lint: [no-consecutive-blank-lines](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines "Link to remarkjs docs")
and [no-missing-blank-lines](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-missing-blank-lines "Link to remarkjs docs")

<!--lint enable-->

::: tip Note
The `¬` character represents a line break.
:::

**:thumbsup: Correct** code for this rule:

```markdown
Plone is fun!
¬
The community is awesome.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
Plone is fun!
The community is awesome.
```

## Maximum line length

In contrast to source code, where lines contain statements that can be almost always be broken up or indented,
this rule can not be applied to flowing text.

The author should be able to write sentences and text blocks without worrying about the line length.

This guide advices to **avoid using a character limit per line for flowing text**,
but try to use a maximum line length of 120 characters (including spaces) for all other document elements.

<!--lint disable-->

Instead of enforcing a maximum line length, users should use [soft line wrapping](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap "Link to Wikipedia"):

- **Soft wrapping allows line lengths to visually adjust automatically with adjustments to the width of the user's window** or margin settings.
- **Using hard wrap inserts actual line breaks in the text at wrap points causing the Markdown to not look like the rendered output** - With soft wrapping the actual text is still on the same line but will be rendered by the application like it's divided into several lines.
This **increases the readability** significantly and leads to the same visual result as if a maximum line length with hard line breaks for flowing text would have been used.
- **Less writer effort** - The author can focus on the content instead of formatting.

<!--lint enable-->

> remark-lint: [maximum-line-length](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-line-length "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
> Plone is awesome, in summer and in winter.

Volto is great!
The community is beautiful.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
> Plone is always awesome,
in summer and in winter.

You can use it for small and huge sites! It is the base
for many beautiful sites.
```

## Semantic Line Breaks

[Breaking lines semantically](https://sembr.org/ "Link to a website about semantic line breaks") consists in writing one sentence or clause per line.

This works especially well for conventional markup languages such as markdown, where consecutive lines are joined with a space, because it does not alter the final output.

At the same time, breaking lines semantically is useful in version control systems that use diffing, because it makes it easier for reviewers to see what changes were made to content.

If you also enabled some vertical rules at specific text lenghts for your code editor, breaking lines semantically will also enabloe you to see on the spot how long your sentences are.

Let's analyze the sentence *"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."*
All examples below will render the sentence as one paragraph, but only the correct examples below will make changes to the sentence easier to review using diff and easier to track by the version control system.

**:thumbsup: Correct** code for this rule:

```markdown
All human beings are born free and equal in dignity and rights.
They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.
```

Even Better:

```markdown
All human beings are born free and equal in dignity and rights.
They are endowed with reason and conscience
and should act towards one another in a spirit of brotherhood.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.
```

## Trailing

Do not use trailing space to generate a line break, use flowing text style or a blank line to create a new paragraph.

> remark-lint: [hard-break-spaces](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-hard-break-spaces "Link to remarkjs docs")

::: tip Note
The `·` character represents a space and the `¬` character represents a line break.
:::

**:thumbsup: Correct** code for this rule:

```markdown
Plone is great!
The community is awesome, too!
```

```markdown
Plone is great!¬

The community is awesome, too!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
Plone is great!··¬
The community is awesome, too!
```

```markdown
Plone is great!¬
The community is awesome, too!
```
