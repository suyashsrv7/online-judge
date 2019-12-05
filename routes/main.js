const router = require('express').Router();
const userController = require('../contollers/user');
const scrapController = require('../contollers/scrap');
const authGaurd = require('../middlewares/auth');
const request = require('request');
const rp = require('request-promise');

router.get('/test', (req, res) => {
    return res.status(200).send("Working");
})
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/scrap', scrapController.scrap);


router.get('/scrap', (req, res) => {
    var link = "https://www.codechef.com/IARCSJUD/problems/CYCLEPER";
    var opt = {
        url: link,
        headers: {
            'User-Agent': 'request'
        },
        timeout: 10000
    }
    // request(opt, (error, response, html) => {
    //     res.send(html);
    // });

    rp(opt).then(($) => {
        console.log($);
        res.send($);
    })
})

module.exports = router;