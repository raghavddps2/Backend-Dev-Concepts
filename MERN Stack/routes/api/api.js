const express =  require('express')
const router = express.Router()

//Item model
const Item = require('../../models/model')

// @route GET api/items
// @desc  GET All items
// @access Public

router.get('/',(req,res)=>{
    //We are finding items, 
    Item.find()
    .sort({date: -1})
    .then(items => {
        res.json(items);
    }); 

})


//@route POST api/items
//@desc Create a POST
//@access public

router.post('/',(req,res)=>{
    const newItem = new Item({
        name: req.body.name,

    });
    newItem.save().then((item)=>{
        res.json(item)
    });
})

//@route DELETE api/items/:id
//@desc  DELETE an item
//@access public

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(
        item => {
            item.remove().then(()=>{
                res.status(200).json({success:true})
            })
        }
    ).catch(err=>{

        res.status(404).json({success:false})
    })
})



module.exports = router;
