livereload = require('livereload');
server = livereload.createServer();
server.watch([__dirname, __dirname + '/css']);