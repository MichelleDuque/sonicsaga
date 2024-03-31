const { resolve } = require("path");
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        article: resolve(__dirname, "article.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
};
