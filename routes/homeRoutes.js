const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../public/index.html')));

router.get('/stats', (req, res) => res.status(200).sendFile(path.join(__dirname, '../public/stats.html')));

router.get('/exercise', (req, res) => res.status(200).sendFile(path.join(__dirname, '../public/exercise.html')));

module.exports = router; 