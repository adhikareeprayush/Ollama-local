# Marksmith

**Marksmith** is a lightweight npm library written in TypeScript for converting Markdown documents into HTML. It provides a simple and efficient way to seamlessly integrate Markdown parsing and HTML generation into your JavaScript or TypeScript projects.

## Features

- Convert Markdown documents to HTML with ease.
- Fully written in TypeScript for improved type safety and developer experience.
- Lightweight and dependency-free, ensuring minimal impact on your project's bundle size.

## Supported Markdown Elements

**Marksmith** currently supports the elements mentioned below. With further releases, it'll support more markdown elements.

Note: Currently, there's only one level of parsing of bold, italic, code tags. Nested parsing will be supported in future versions.

- Headings (`#`, `##`, `###`, etc.)
- Bold (`**text**`)
- Italic (`*text*`)
- Code (\`code\`)
- Links (`[text](url)`)
- Images (`![alt text](url)`)
- Lists (both ordered and unordered)
- Blockquotes (`> text`)
- Horizontal rules (`---`)
- Inline code (`` `code` ``)
- Table

## Installation

You can install **Marksmith** via npm:

```bash
npm i marksmithjs
```

## Usage

```typescript
import { markdownToHtml } from 'marksmithjs';

const markdownText = '# Hello, World!\n\nThis is a *Markdown* example.';

try {
    const htmlOutput = markdownToHtml(markdownText);
    console.log(htmlOutput);
} catch (err) {
    console.error("Markdown syntax not valid");
}
```

The output will be a div tag with all the markdown converted to HTML within the tag.

An error is thrown when the input markdown does not follow markdown rules such as incomplete bold / italic / code tags.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
