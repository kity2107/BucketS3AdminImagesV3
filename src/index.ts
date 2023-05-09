import config from './config/config';

import app from './app';

const startServer = async () => {
    try {
        app.listen(config.PORT || 5000, () => {
            console.log(`⚡️[server]: Server is running at port: ${config.PORT}`);
        });
    } catch (err) {
        console.error('🔥 Server couldn`t start:', err);
    }
};

startServer();
