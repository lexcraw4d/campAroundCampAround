const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.get('/', (req, res) => {
    res.render('index');
});

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;