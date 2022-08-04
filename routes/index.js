const router = require('express').Router();
const apiRoutes = require('./api/index');
const pagesRouter = require('./clientRoutes/pagesRouter');

router.use('/api', apiRoutes);
router.use('/', pagesRouter)

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;

