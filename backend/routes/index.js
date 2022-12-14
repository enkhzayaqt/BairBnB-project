const express = require('express');
const router = express.Router();

router.get('/api/csrf/restore', function (req, res) {
  const csrfToken = req.csrfToken();
  res.cookie('XSRF-TOKEN', csrfToken);
  res.status(200).json({
    'XSRF-TOKEN': csrfToken
  })
});

const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;
