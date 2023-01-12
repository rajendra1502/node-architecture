import Product from '../../models/products.js';
const addProduct = async (req, res) => {
    console.log('...In product...', req.body);
    const { productName, price } = req.body;

    if(!(productName && price)) {
        res.status(404).send("Product information required !")
    }
   
    // @desc check the existing database
    const checkProduct = await Product.findOne({productName});
    console.log('....check..', checkProduct);
    if(checkProduct) res.status(404).send("Product already registed into DB !")

    const createProduct = await Product.create({productName, price})
    console.log('...createProduct..', createProduct);
    if(createProduct) res.status(200).send('Product added !')
 }

export {
    addProduct
}