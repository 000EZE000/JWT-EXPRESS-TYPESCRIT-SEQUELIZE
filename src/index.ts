import app from './app';
import * as dotenv from 'dotenv'
import connection from './db/config';

dotenv.config();

(async () => {
    try {
        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
        connection.sync()
        console.log('Database synced successfully');
    } catch (error: any) {
        console.log({ error: error.message })
    }

})();

