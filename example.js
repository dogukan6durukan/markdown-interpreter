import { Parser } from "./src/parser.js";

const markdown = 
`# Hello world!

This is a paragraph under the heading

### This is the middle heading

And, I'm the last paragraph.
`
const parser = new Parser(markdown);
console.log(parser.parse());