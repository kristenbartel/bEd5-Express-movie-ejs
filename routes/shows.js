const express = require('express')
const router = express.Router();

const db = require('../models/db')

router.get('/', (req, res) => {
    res.render('partials/movie-list', {
        db: db,
    })
})

module.exports = router

// below are ideas for how to render the data to the page

// app.get('/menu/:id', (req,res) => {
//     //get data from db.specials
//     const foundSpecial = db.specials.find((special)=>{
        
//         return special.id === parseInt(req.params.id)
//     })
//     res.render('menuitem', {
//         title: "JJ's Menu",
//         special : foundSpecial,
  
//     })
//   })

//   router.get('/:Title', (req, res) => {
//     const {Title} = req.params;
//     const show = db.find(f => f.Title === Title);
//   //   console.log(show)

//     if(show) {
//          res.render('index', {
//               locals: {
//                    showsData: show,
//               }, 
//               partials: {
//                  listButton: '/partials/show-details'

//               }
//          },
//          )
//     } else {
//        res.status(404).send(`no friend with handle ${Title}`)
           
//    }
// })