const path = require('path');

module.exports= {
    mode:"development",
    entry:"./index.js",
    output:{
    path:path.resolve(_dirname, 'dist'),
    filename:'bundle.js,'
}
}