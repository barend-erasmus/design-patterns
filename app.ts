import * as readline from 'readline';
import * as childProcess from 'child_process';

function ask(readlineInterface: any, str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readlineInterface.question(str, (answer: string) => {
            resolve(answer)
        });
    });
}

async function run() {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const patterns: {} = {
        'creational-patterns': {
            name: 'Creational Patterns',
            patterns: {
                'abstract-factory': 'Abstract Factory',
                'builder': 'Builder',
                'factory-method': 'Factory Method',
            },
        },
    };

    const categoryIndexStr: string = await ask(readlineInterface, `Select a category: \r\n\r\n${Object.keys(patterns).map((key, i) => `(${i + 1}) - ${patterns[key].name}`).join('\r\n')}\r\n`);

    const categoryKey: string = Object.keys(patterns)[parseInt(categoryIndexStr) - 1];

    console.log(`\r\n`);

    const patternIndexStr: string = await ask(readlineInterface, `Select a pattern: \r\n\r\n${Object.keys(patterns[categoryKey].patterns).map((key, i) => `(${i + 1}) - ${patterns[categoryKey].patterns[key]}`).join('\r\n')}\r\n`)

    const patternKey: string = Object.keys(patterns[categoryKey].patterns)[parseInt(patternIndexStr) - 1];

    console.log(`\r\n`);

    const p = childProcess.fork(`./${categoryKey}/${patternKey}/src/app.js`);

    readlineInterface.close();
}

run();