export class Renderer {
    constructor() {}

    heading(depth, text) {
        return `<h${depth}>${text}</h${depth}>`;
    }

    paragraph(text) {
        return `<p>${text}</p>`;
    }

}