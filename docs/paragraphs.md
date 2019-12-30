# Paragraphs

## No Indentation

::: tip Key Point
:bulb: Never indent the content of paragraphs.
:::

> remark-lint: [no-paragraph-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-paragraph-content-indent "Link to remarkjs")

**:thumbsup: Correct** code for this rule:

```markdown
The summer is awesome!
Swimming is great.
```

::: tip Note
The `·` character represents a whitespace.
:::

**:thumbsdown: Incorrect** code for this rule:

```markdown
·The summer is awesome!
·Swimming is great.
```

```markdown
······The summer is awesome!
········Swimming is fun.
```
