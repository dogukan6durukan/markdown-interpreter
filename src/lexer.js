export class Lexer {
    constructor(inp) {
        this.inp = inp;
        this.rules = this.getRules();
        this.tokens = [];
    }

    getRules() {
 
        const rules = {
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:\n+|$)/,
            paragraph: /^((?!#{1,6})[^\n]*(?:\n|$))+?/
        };

        return rules;

    }



    // Lexing / Tokenization
    getTokens() {
        let source = this.inp;
        let regArr;
        while (source !== "") {
            // heading
            if (regArr = this.rules.heading.exec(source)) {
                source = source.substring(regArr[0].length);
                this.tokens.push({
                    type: "heading",
                    depth: regArr[1].length,
                    text: regArr[2]
                });
                continue;
            }
    
            // paragraph
            if (regArr = this.rules.paragraph.exec(source)) {
                source = source.substring(regArr[0].length);
                this.tokens.push({
                    type: "paragraph",
                    text: regArr[0]
                });
                continue;
            }
    
            break;
        }
    
        return { tokens: this.tokens };
    }
    
    

}