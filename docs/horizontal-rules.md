---
title: Horizontal rules
description: Horizontal rules can be used to separate content.
meta:
  - name: "og:description"
    content: Horizontal rules
  - name: keywords
    content: Horizontal rules
tags:
  - Horizontal
  - Sections
  - Headers
---

<Header/>

---

# Horizontal Rules

::: tip When to use
:bulb: Horizontal rules can be used to separate sections when headers are not applicable or
to separate base document elements like a header, body and footer.
:::

## Marker character style

A horizontal rule must consist of three (3) hyphens (`-`) without spaces.

> remark-lint: [rule-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-rule-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
---
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
-
```

```markdown
--

- -
```

```markdown
-- -

- --
```

## No prepended or appended content

Make sure that there are no other prepended or appended characters (including spaces).

**:thumbsup: Correct** code for this rule:

```markdown
---
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
.---
```

```markdown
 ---
```

```markdown
---x
```

```markdown
---
```

## Empty lines before and after

Always surround lines by a single empty line except at the beginning of the file.

**:thumbsup: Correct** code for this rule:

```markdown
... a line of content.

---

Summer is awesome...
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
... a line of content.
---
Summer is awesome...
```

```markdown
... a line of content.


---


Summer is awesome...
```
