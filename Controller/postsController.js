const express = require ('express');

const router= express.Router();

const {PostsModele} = require('../Modèle/postsModèle.js');

router.get('/', (req, res) => {
  PostsModele.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});

router.post('/', (req, res) => {
  const newEntry= new PostsModele({
    author: req.body.author,
    message: req.body.message

      });

 newEntry.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })

});


module.exports = router;

