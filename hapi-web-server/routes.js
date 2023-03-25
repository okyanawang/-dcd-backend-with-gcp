const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, pass } = req.payload;
      return `Welcome ${username}!`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, h) => {
      const { name = "stranger" } = req.params;
      const { lang } = req.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "Halaman tidak ditemukan!";
    },
  },
];

module.exports = routes;
