// memanggil object mongoose
module.exports = (mongoose) => {
  // membuat schema/ desai dari field yang ada di dalam tabel
  const schema = mongoose.Schema(
    {
      title: String,
      body: String,
      published: Boolean,
    },
    { timestamps: true }
  );

  //   convert field _id menjadi object id
  schema.method("toJSON", function () {
    const { __v, _id, ...Object } = this.toObject();
    // membuat object id berisi _id
    Object.id = _id;
    return Object;
  });

  // obect ke constant
  const Post = mongoose.model("post", schema);
  return Post;
};
