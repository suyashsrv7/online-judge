const request = require('request');

module.exports = {
    
    scrap: (req, res) => {
        var link = filterLink(req.body.link);
        var options = {
            url: link,
            headers: {
                'User-Agent': 'request'
            }
        }

        request(options, (error, response, html) => {
            const root = JSON.parse(html);
            var cases = root.body.split('\r\n\r\n');
            console.log(cases);
            var len = cases.length;

            var retval = {
                input: cases[1],
                output: cases[3]
            }
            res.send(html);
        });   
    }
}

filterLink = (link) => {
    let linkarr = link.split('/');
    if(linkarr.length == 5)
        linkarr.splice(3, 0, 'PRACTICE');
    linkarr.splice(3, 0, 'api');
    linkarr.splice(4, 0, 'contests');

    return linkarr.join('/'); 
}