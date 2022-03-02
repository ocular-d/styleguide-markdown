(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{428:function(e,a,t){"use strict";t.r(a);var n=t(56),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("Header"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"indentation-character"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indentation-character"}},[e._v("#")]),e._v(" Indentation character")]),e._v(" "),t("p",[e._v("Always use spaces where two (2) spaces are used for indentation.")]),e._v(" "),t("p",[t("strong",[e._v("The usage of tab characters is disallowed")]),e._v(".")]),e._v(" "),t("p",[e._v("A tab could be a different number of columns depending on the environment, but a space is always one column.")]),e._v(" "),t("p",[e._v("Adhering to this rule increases the code readability and maintainability significantly.")]),e._v(" "),t("blockquote",[t("p",[e._v("remark-lint: "),t("a",{attrs:{href:"https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-tabs",title:"Link to remarkjs docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-tabs"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[e._v("👍 Correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\n  This line contains 2 space characters.\n")])])]),t("p",[t("strong",[e._v("👎 Incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("»")]),e._v(" character represents a tab.")])]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\n » This line contains a tab character.\n")])])]),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\n    This line contains 4 space characters.\n")])])]),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\n This line contains only 1 space character.\n")])])]),t("h2",{attrs:{id:"before-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before-blocks"}},[e._v("#")]),e._v(" Before blocks")]),e._v(" "),t("p",[e._v("Always add one (1) blank line before blocks except the first line of the file.")]),e._v(" "),t("blockquote",[t("p",[e._v("remark-lint: "),t("a",{attrs:{href:"https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines",title:"Link to remarkjs docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-consecutive-blank-lines"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-missing-blank-lines",title:"Link to remarkjs docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-missing-blank-lines"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("¬")]),e._v(" character represents a line break.")])]),e._v(" "),t("p",[t("strong",[e._v("👍 Correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\n¬\nThe community is awesome.\n")])])]),t("p",[t("strong",[e._v("👎 Incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is fun!\nThe community is awesome.\n")])])]),t("h2",{attrs:{id:"maximum-line-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-line-length"}},[e._v("#")]),e._v(" Maximum line length")]),e._v(" "),t("p",[e._v("In contrast to source code, where lines contain statements that can be almost always be broken up or indented,\nthis rule can not be applied to flowing text.")]),e._v(" "),t("p",[e._v("The author should be able to write sentences and text blocks without worrying about the line length.")]),e._v(" "),t("p",[e._v("This guide advices to "),t("strong",[e._v("avoid using a character limit per line for flowing text")]),e._v(",\nbut try to use a maximum line length of 120 characters (including spaces) for all other document elements.")]),e._v(" "),t("p",[e._v("Instead of enforcing a maximum line length, users should use "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap",title:"Link to Wikipedia",target:"_blank",rel:"noopener noreferrer"}},[e._v("soft line wrapping"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Soft wrapping allows line lengths to visually adjust automatically with adjustments to the width of the user's window")]),e._v(" or margin settings.")]),e._v(" "),t("li",[t("strong",[e._v("Using hard wrap inserts actual line breaks in the text at wrap points causing the Markdown to not look like the rendered output")]),e._v(" - With soft wrapping the actual text is still on the same line but will be rendered by the application like it's divided into several lines.\nThis "),t("strong",[e._v("increases the readability")]),e._v(" significantly and leads to the same visual result as if a maximum line length with hard line breaks for flowing text would have been used.")]),e._v(" "),t("li",[t("strong",[e._v("Less writer effort")]),e._v(" - The author can focus on the content instead of formatting.")])]),e._v(" "),t("blockquote",[t("p",[e._v("remark-lint: "),t("a",{attrs:{href:"https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-line-length",title:"Link to remarkjs docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("maximum-line-length"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[e._v("👍 Correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" Plone is awesome, in summer and in winter.\n\nVolto is great!\nThe community is beautiful.\n")])])]),t("p",[t("strong",[e._v("👎 Incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[e._v(">")]),e._v(" Plone is always awesome,\nin summer and in winter.\n\nYou can use it for small and huge sites! It is the base\nfor many beautiful sites.\n")])])]),t("h2",{attrs:{id:"semantic-line-breaks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#semantic-line-breaks"}},[e._v("#")]),e._v(" Semantic Line Breaks")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://sembr.org/",title:"Link to a website about semantic line breaks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breaking lines semantically"),t("OutboundLink")],1),e._v(" consists in writing one sentence or clause per line.")]),e._v(" "),t("p",[e._v("This works especially well for conventional markup languages such as markdown, where consecutive lines are joined with a space, because it does not alter the final output.")]),e._v(" "),t("p",[e._v("At the same time, breaking lines semantically is useful in version control systems that use diffing, because it makes it easier for reviewers to see what changes were made to content.")]),e._v(" "),t("p",[e._v("If you also enabled some vertical rules at specific text lenghts for your code editor, breaking lines semantically will also enabloe you to see on the spot how long your sentences are.")]),e._v(" "),t("p",[e._v("Let's analyze the sentence "),t("em",[e._v('"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."')]),e._v("\nAll examples below will render the sentence as one paragraph, but only the correct examples below will make changes to the sentence easier to review using diff and easier to track by the version control system.")]),e._v(" "),t("p",[t("strong",[e._v("👍 Correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("All human beings are born free and equal in dignity and rights.\nThey are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.\n")])])]),t("p",[e._v("Even Better:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("All human beings are born free and equal in dignity and rights.\nThey are endowed with reason and conscience\nand should act towards one another in a spirit of brotherhood.\n")])])]),t("p",[t("strong",[e._v("👎 Incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.\n")])])]),t("h2",{attrs:{id:"trailing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trailing"}},[e._v("#")]),e._v(" Trailing")]),e._v(" "),t("p",[e._v("Do not use trailing space to generate a line break, use flowing text style or a blank line to create a new paragraph.")]),e._v(" "),t("blockquote",[t("p",[e._v("remark-lint: "),t("a",{attrs:{href:"https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-hard-break-spaces",title:"Link to remarkjs docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("hard-break-spaces"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("·")]),e._v(" character represents a space and the "),t("code",[e._v("¬")]),e._v(" character represents a line break.")])]),e._v(" "),t("p",[t("strong",[e._v("👍 Correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is great!\nThe community is awesome, too!\n")])])]),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is great!¬\n\nThe community is awesome, too!\n")])])]),t("p",[t("strong",[e._v("👎 Incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is great!··¬\nThe community is awesome, too!\n")])])]),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[e._v("Plone is great!¬\nThe community is awesome, too!\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);