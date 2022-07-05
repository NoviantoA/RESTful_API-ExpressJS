module.exports = (app) => {
  const posts = require("../controllers/post.controller");

  const router = require("express").Router();

  // daftarkan method find pada file controller
  router.get("/", posts.findAll);

  // daftarkan method create file controller
  router.post("/", posts.create);

  // daftarkan method findone
  router.get("/:id", posts.findOne);

  // daftarkan method update
  router.put("/:id", posts.update);

  // registrasi method delete
  router.delete("/:id", posts.delete);

  app.use("/api/posts", router);
};
