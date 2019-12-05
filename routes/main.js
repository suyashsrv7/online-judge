const router = require('express').Router();
const userController = require('../contollers/user');
const codeRunner = require("../contollers/codeRunner");
const authGaurd = require('../middlewares/auth');

router.get('/test', (req, res) => {
    return res.status(200).send("Working");
})
router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router.post('/runcode', codeRunner.run);


module.exports = router;