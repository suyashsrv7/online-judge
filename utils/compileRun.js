const {c, cpp, node, python, java} = require('compile-run');
const path = require('path');

function runCode(lang, srcCode, input) {
    switch(lang) {
        case "cpp": 
            return cpp.runSource(srcCode, {stdin: input});
            break;
        case "c":
            return c.runSource(srcCode, {stdin: input});
            break;
        case "python":
            return python.runSource(srcCode, {stdin: input});
            break;
        case "java":
            return java.runSource(srcCode, {stdin: input});
            break;
    }
}

module.exports = runCode;
