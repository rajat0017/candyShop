const path = require('path');

const Details = require('../model//shop');

exports.AddItem = async (req, res, next) => {
    try {

        const candy = req.body.candy
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;
        console.log(req.body.candy);
        const data = await Details.create({
            candy: candy,
            description: description,
            price: price,
            quantity: quantity
        })
        //   res.redirect('../shop');
    } catch (err) {
        console.log(err);
    }
}

exports.getDetails = async (req, res, next) => {
    try {
        const Users = await Details.findAll();

        res.status(200).json({ allUsers: Users });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
}

// exports.postEditProduct = (req, res, next) => {
//     const prodId = req.params.productId;

//     Product.findByPk(prodId)
//         .then(product => {
//             product.candy = updatedcandy;
//             product.description = updateddescription;
//             product.price = updatedprice;
//             product.quantity = updatedquantity;
//             return product.save();
//         })
//         .then(result => {
//             console.log('UPDATED PRODUCT');
//             //   res.redirect('/admin/products');
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };

exports.Update = async (req, res, next) => {
    try {

        const updatedcandy = req.body.candyCell;
        const updateddescription = req.body.descriptionCell;
        const updatedprice = req.body.priceCell;
        const updatedquantity = req.body.quantityCell;
        // var newQuantity=updatedquantity;
        console.log(updatedcandy)
        const id = req.params.id;
        let user = await Details.update(
            {
                candy: updatedcandy,
                description: updateddescription,
                price: updatedprice,
                quantity:updatedquantity
            }
            ,
            { where: { id: id} }
            )
        // console.log("user", user);
        // res.status(201).json({ user });
        res.redirect('/shop.html');
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
    
}

exports.deleteCandy = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await Details.findAll({where: {id:id}});
        if(!user){
            console.log('This user does not exist.');
            return res.sendStatus(400);
        }
        await Details.destroy({where: {id:id}});
        res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.status(500).json({error : err})
        }
}
