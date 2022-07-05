const express = require("express");
const cors = require("cors");

// membuat variabel yang menyimpan object express
const app = express();

// mengirim data, mendapatkan respone berupa tipe data json
app.use(express.json());
// mebuat form urlencoded
app.use(express.urlencoded({ extended: true }));

// konfigurasi connect ke database
const db = require("./app/models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // mengizinkan update data
    // useFindAndModify: true,
  })
  .then(() => {
    console.log(`Berhasil Connect ke Database!!!`);
  })
  .catch((err) => {
    console.log(`Gagal Terhubung ke Database`, err);
    process.exit();
  });

// membuat end point/ path url
app.get("/", (req, res) => {
  res.json({
    message: "Belajar Restful API menggunakan expressJs dan mongoDB",
  });
});

// panggil controller
require("./app/routes/post.routes")(app);

// membuat port
const PORT = 8000;
// menjalankan port
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
