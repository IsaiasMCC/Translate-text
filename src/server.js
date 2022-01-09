const { reuniones } = require('./firebase/translateController');
const express = require('express');
class Server {
    constructor(){
        this.app = express();
        this.port = 8081;

        this.middlewares();
      
        reuniones();
    }
    middlewares(){
        this.app.use( express.static('public'));

        
        this.app.use(express.json());
    }
    
    listen(){
        this.app.listen(this.port, ()=> {
            console.log('server is running on PORT ', this.port);
        })
    }

}
module.exports = Server;