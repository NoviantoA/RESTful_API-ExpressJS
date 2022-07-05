// import file
const dbConfig = require("../../config/db.config");

// buat object untuk mongoose
const mongoose = require("mongoose");

// panggil mongoose dengan promise variabel global
mongoose.Promise = global.Promise;

// membuat variabel yang menampung object
const db = {};

// mengisi data object
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require("./post.model")(mongoose);

// mendefinisikan mode export
module.exports = db;
