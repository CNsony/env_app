'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try{
   
  }catch(e) {
    res.redirect('/TPT_VTX/login');
  }

});
router.get('/test', (req, res)=>{
    res.send(
        {
            data:"getTest"
        }
    )
  })


module.exports = router;
