const { initializeApp, cert } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;
 const CREDENTIALS = 
{
        "type": "service_account",
        "project_id": "traslation-334717",
        "private_key_id": "09f56594996d46cb38ecbf4576471aa419f905e1",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVtEibaHo6iDzn\neK8AvYwwSrQlMwLQ4BRnW5Us951olQZqoLaJ/jQ/p8Q3YjRi9dd/4+piJU608sIp\nXm5XZ+fvrkGy5oumX/4XQ+S2a5NXzTAQRYz6xSogQ9F7Vg9wPuTQa2b6jk/u8Sf1\nnehk1gMbE7GDaLNCwvCYaURKnZx5sIIRuHB+4cCxzgAQdOHndDlVnx4Kv9FHOFyK\nHq8FW+888Wgdvk4zKsu6a8p2bwBramz0jnR8kuuL0y2nSlK/R58mkl6zKcPmMHQM\nuliYBmdmq0/nLhb8qbkVuw+75wz9OZixnJBEOLvMu8bo7VFCw/uPcv64sYhWrauP\n84muHirlAgMBAAECggEAJG1g+YfbriB2iXCBTPHSifGzkhWuirrr3BaZ3v5FrCwP\nCqUepcdYWWDuSve3fZkKnhEMeGNRmpAzlLNosBYVhunlDK4yrwJOpsSbg5P7n3LL\nTjpOSrrtPDqkX5maWhrDvL9VqIQ2iRLfQVHyOY8l5FHPcQVqEUW0G7IJrwpZB/b+\nvXdhZPlOpD7K9rBMUKRgstjNNBRhrMF3rRl1axxXAfpuCHUd4+jiRIufvSG9Gxq0\nqzEqy6KVhZu47mChkkIhF5tq0IWOFMjs1ZP4AQuKTqDxZQ1u3jZGc1vYEjMae0uh\nNkhTj785WoUQ+/Ot7erFmNTvFWrvaVFIeHQgJ2yGxQKBgQDSBPp0XjUcu5Ohj5yS\nZBt1NP5xYoWgnHvz7epDAR7jUwSnYKj0X0wk9LZwDvO7uRlHIPbLGvY2CdRAgf/L\nfCraR/dMQhk+YgvrqcgLYMfStg4T/iShQJG5pr/j5znw/iPYH/5n5X7rT0leUbgt\nhyep4f5JJfL1mPF8poi97YmE/wKBgQC2esz/MCeIoWVjaGhnYpZO+9ua1wuHB+Po\nl9HxhYz5MM8BlEYZSx3JJrxMsuAoo1vDNqjCK6rZboT2MrPapOWnIJN8+LU7x0sE\nsbj7gUHFDi8kFmPTEtfCJfuMseb4WhrNAu20JNNSQICXat/FTGpBypFdlIKNmZ7P\nMOBX867cGwKBgQC7TINMaoP1dvfnettI1wyBz9wnpJTFsyj8Vy63yPUSCQS6fQLQ\nxXhz8OYPM9Z8kUwQ2j4ezpHLiaKIUSeeAsN43fuXP8+hifFVn5nvQ8WRjpkpjVp/\nkMUli6fQiXNsEEpJQecyI0K4eoJVIo4d1E40PH76H2T5UQf0gdSrhX9CYwKBgBQO\nTSejAEVZD86sNAVg5YpKziknh4HQ0TDINu/nsMXWonnW9RlkkyJ/mmSHqHFu+u/q\nuwOUTxPUvNJeYjwesYr73pn2r9yhG9KpQd6Kp1LkKzQ5LcGOKZ6SFCKzjuIu7REp\nSDzrazp4EmoR+gQyUN9oRy/U2cB8aOL2yUGBa++PAoGAGv3nb8KFXpDQRafNlYg3\n+ymB2WtDIRz0gTOZwnFpwLuRLRw5HyOmN26NHRsajOr5Rqn8ZjVHauQZN7clAWuJ\nWMkprgFGkWofmTkxVwRlcvhBDc2GnKXVCHNhcNyHdFptOCOMeOVQMsEvvpw8Eruq\nqfQRHC+EvAgnUFNjcrfcLWg=\n-----END PRIVATE KEY-----\n",
        "client_email": "translate@traslation-334717.iam.gserviceaccount.com",
        "client_id": "113693355882886542021",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/translate%40traslation-334717.iam.gserviceaccount.com"
}

const  firebaseConfig  =  {
    apiKey : "AIzaSyDzlnhWlfjtCmDAd5Xk8cZe0m3T-GIgpZE" ,
    authDomain : "translate-meet.firebaseapp.com" ,
    projectId : "translate-meet" ,
    storageBucket : "translate-meet.appspot.com" ,
    messagingSenderId : "939546140831" ,
    appId : "1: 939546140831: web: 4a1670308e7ed1bc4942aa"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Creates a client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

module.exports = {
    translate,
    db
};