import { Lexer } from "./lexer.js";
import { Renderer } from "./renderer.js";

export class Parser extends Lexer {
    constructor(inp) {
        super(inp);
        this.tokens = this.getTokens().tokens;
        this.token = null;
        this.renderer = new Renderer();
    }


    parse() {
        let out = '';

        while(this.next()) {
            out += this.out();
        }

        return out;
    }

    next() {
        return (this.token = this.tokens.shift());
    }


    out() {
        switch(this.token.type) {
            case "heading": {
                return this.renderer.heading(this.token.depth, this.token.text);
            }

            case "paragraph" : {
                return this.renderer.paragraph(this.token.text);
            }
        }
    }

}

