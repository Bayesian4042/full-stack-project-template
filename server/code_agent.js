const fs = require('fs');
const path = require('path');

class CodeAppender {
    constructor(filePath) {
        this.filePath = filePath;
        this.code = fs.readFileSync(filePath, 'utf-8');
    }

    appendApiEndpoint(controllerName, newMethodCode) {
        const classRegex = new RegExp(`(class\\s+${controllerName}\\s+\\{)`, 'm');
        const match = classRegex.exec(this.code);

        if (!match) {
            throw new Error(`Controller ${controllerName} not found`);
        }

        // Find the closing bracket of the class
        const classBodyEnd = this.findClosingBracketIndex(match.index + match[0].length - 1);
        if (classBodyEnd === -1) {
            throw new Error(`Unable to find the end of the ${controllerName} class`);
        }

        // Insert the new method code before the closing bracket
        this.code = `${this.code.slice(0, classBodyEnd)}\n${newMethodCode}\n${this.code.slice(classBodyEnd)}`;
    }

    findClosingBracketIndex(startIndex) {
        let bracketCount = 1; // Start after the opening bracket
        console.log(this.code.slice(startIndex));
        for (let i = startIndex + 1; i < this.code.length; i++) {
            if (this.code[i] === '{') {
                bracketCount++;
            } else if (this.code[i] === '}') {
                bracketCount--;
                if (bracketCount === 0) {
                    console.log(`Closing bracket found at index: ${i}`);
                    return i;
                }
            }
        }
        return -1; // Did not find the closing bracket
    }

    save() {
        fs.writeFileSync(this.filePath, this.code, 'utf-8');
    }
}

// Example usage
// const filePath = path.join(__dirname, 'src/experts/experts.controller.ts');
// const newMethodCode = `
//   @Get('/experts/:id/sessions')
//   getSessions(@Param('id') id: string) {
//     return \`This is the sessions endpoint for expert \${id}\`;
//   }
// `;

function appendApiEndpoint(filePath, controllerName, newMethodCode) {
    const appender = new CodeAppender(filePath);
    appender.appendApiEndpoint(controllerName, newMethodCode);
    appender.save();
    console.log('Code appended successfully.');
}

const [filepath, controllerName, newCode] = process.argv.slice(2);
const result = appendApiEndpoint(filepath, controllerName, newCode);
console.log('appended');