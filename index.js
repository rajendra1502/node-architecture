import {app, router} from "./app.js";
import {connect} from './config/database.js';
import { logger} from './utils/logger/index.js';
import { Sentry } from './utils/sentry/index.js';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
connect();
//Sentry.captureMessage('my message', 'warning');
//console.log('....pppp....', process.env)

// logger.info("Server Sent A Hello World!");
// logger.info('Info message');
// logger.error('Error message');
// logger.warn('Warning message');
// logger.verbose('verbose');
// logger.debug('debug');
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(userRoutes);
app.use(productRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}, DB URI : ${process.env.MONGO_URI} `);
});
