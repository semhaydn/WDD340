const express = require('express');
const router = express.Router();
const path = require('path'); // Import path module to handle paths

// Serve static files from the "public" directory
router.use(express.static(path.join(__dirname, '../public')));

// Specify paths for specific subdirectories
router.use('/css', express.static(path.join(__dirname, '../public/css')));
router.use('/js', express.static(path.join(__dirname, '../public/js')));
router.use('/images', express.static(path.join(__dirname, '../public/images')));

module.exports = router;
