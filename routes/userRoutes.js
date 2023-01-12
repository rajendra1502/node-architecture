import {router} from "../app.js";
import  {register, login} from '../controllers/users/userControllers.js'
router.post('/register', register) 
router.post('/login', login) 
export default router;
  
