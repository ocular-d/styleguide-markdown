# Tables

::: tip Key Point
:bulb: Prefer lists and only use tables for small, non-complex and single line content.
:::

Complex, large tables are difficult to read in source and most importantly, a pain to modify, indent and also read later for example when using

- Line breaks within rows
- Long sentences that must be wrapped
- Inline links with long URLs

Lists and subheadings usually suffice to present the same information in a slightly less compact, though much more edit-friendly and more elegant way.

**:thumbsup: Correct** code for this rule:

```markdown
## Elements

### Snow

- [Wikipedia](http://this-is-a-very-long-url-for-information-about-snow.com "Link to Wikipedia")
- It falls down in winter!
- Attributes:
  - Soft
  - Damp
  - Crystal-like

### Frost

- [Knowledge Base](http://this-is-a-very-long-url-for-information-about-frost-and-the-winter-season.com "Link to Knowledge Base")
- Sparkling and frozen!
- Attributes:
  - Cold
  - Grainy
```

For small, non-complex and single line content:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
| Ice     | Frozen    |
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
| Element  | URL | Note | Attributes | Types |
| :------: | --- | ---- | ---------- | ----- |
| Snow     | [Wikipedia](http://this-is-a-very-long-url-for-information-about-snowflakes.com) | It falls down in winter! | soft, damp, crystal-like | powder snow, wet snow, lazy snow |
| Frost    | [Wikipedia](http://this-is-a-very-long-url-for-information-about-frost-and-the-winter-season.com) | Sparkling and frozen! | cold, grainy | permafrost, hard rime, ground frost |
```

## Empty lines before and after

Always surround tables by a single empty line except at the beginning of the file.

**:thumbsup: Correct** code for this rule:

```markdown
... snowflakes are falling.

| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |

Sparkling and frozen...
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
... snowflakes are falling.
| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |


Sparkling and frozen...
```

## Content spacing

Surround the content of headers and cells with at least one (1) single whitespace.

**:thumbsup: Correct** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
|Element|Attribute|
| ----- | ------- |
|Frost|Sparkling  |
```

```markdown
|  Element           |  Attribute    |
|  -------           |  ---------    |
|  Frost             |  Sparkling    |
```

## Header delimiter row spacing

The delimiter row must only consist of cells whose only content are hyphens (`-`) surrounded by a single whitespace,
and optionally, a leading or trailing colon (`:`), or both, to indicate left, right, or center alignment respectively.
<!--lint disable-->
> remark-lint: [table-cell-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-cell-padding "Link to remarkjs docs")
and [table-pipe-alignment](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment "Link to remarkjs docs")
<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
| :-----: | --------: |
| Frost   | Sparkling |
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
| Element | Attribute |
|---------|-----------|
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|---------|-----------|
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|---      | ---       |
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|:-------:|----------:|
| Frost   | Sparkling |
```

## Minimum column width

The minimum column width is determined by the cell with the longest content in the column.

> remark-lint: [table-pipe-alignment](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
| Element | Attribute             |
| ------- | ---------             |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down!         |
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down! |
```

## Alignment

Always align tables vertically.

Unaligned tables are easier to write, but tables with aligned border pipes (`|`) are more readable.
Preceding pipes make it easier to determine where a table starts and ends.

Trailing pipes make it look better because of symmetry.

> remark-lint: [table-pipes](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipes "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
| Element | Attribute                                    |
| ------- | ---------                                    |
| Frost   | Sparkling and frozen!                        |
| Snow    | Falling down!                                |
| Ice     | Everything is smooth and slippery in winter! |
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
| Element | Attribute |
| --- | --- |
| Frost | Sparkling and frozen! |
| Snow | Falling down! |
| Ice | Everything is smooth and slippery in winter! |
```

## No indentation

Never indent tables.

> remark-lint: [no-table-indentation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-table-indentation "link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
| Element | Attribute             |
| ------- | ---------             |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down!         |
```

**:thumbsdown: Incorrect** code for this rule:

::: tip Note
The `·` character represents a whitespace.
:::

```markdown
·| Element | Attribute             |
·| ------- | ---------             |
·| Frost   | Sparkling and frozen! |
·| Snow    | Falling down!         |
```

```markdown
··| Element | Attribute             |
··| ------- | ---------             |
··| Frost   | Sparkling and frozen! |
··| Snow    | Falling down!         |
```

```markdown
·········| Element | Attribute             |
·········| ------- | ---------             |
·········| Frost   | Sparkling and frozen! |
·········| Snow    | Falling down!         |
```
