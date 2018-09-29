var mongoose = require('mongoose');

const monguri='mongodb://javicast:javi1750@ds135441.mlab.com:35441/mongonodeapi'

mongoose.Promise = global.Promise;
//mongoose.connect(monguri || 'mongodb://localhost:27017/TodoApp');

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
