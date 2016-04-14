var $config = {
    path : {
        dev : 'src',
        dev_server:  '.tmp',
        pre : 'pre',
        prod : 'dist',
    }
}
var path = process.cwd()+'/$config';

try{
   $config = require(path)
}
catch(e){
    console.log(e);
}

module.exports = $config;
