const runCode = require('../utils/compileRun');
module.exports = {
    run: async (req, res) => {
        /*
            User wants to compile & run a scurce code in a particular language
            * @params 
            * lang: string,
            * srcCode: string
            * input: string,
            
        */
       const result = await runCode(req.body.lang, req.body.srcCode, req.body.input);
       console.log(result);
       res.status(200).json({response: result});
    }
}