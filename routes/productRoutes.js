import {router} from '../app.js'
import { addProduct } from '../controllers/products/productControllers.js'

router.post('/addProduct',  addProduct);
export default router;
