const express = require('express')
const router = express.Router();

const db = require('../models/db')

router.get('/:details', (req, res) => {
    const {details} = req.params;
    const showData = db.find(f => f.Title === details);
    if(showData) {
         res.render('partials/showDetailsP', {
              locals: {
                   showsData: showData,
              }, 
         })
    } else {
        res.status(404).send(`no friend with handle ${Title}`)
    }
})

module.exports = router