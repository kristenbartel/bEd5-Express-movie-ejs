const express = require('express')
const router = express.Router();

const db = require('../models/db')

router.get('/:details', (req, res) => {
    // filter here with .find()
    res.render('partials/showDetailsP', {
            db: db,
    })
})

module.exports = router

  router.get('/:Title', (req, res) => {
    const {Title} = req.params;
    const show = db.find(f => f.Title === Title);
  

    if(show) {
         res.render('index', {
              locals: {
                   showsData: show,
              }, 
              partials: {
                 listButton: '/partials/show-details'

              }
         },
         )
    } else {
       res.status(404).send(`no friend with handle ${Title}`)
           
   }
})