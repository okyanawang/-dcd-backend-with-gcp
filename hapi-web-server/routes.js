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
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "Halaman tidak ditemukan!";
    },
  },
];

module.exports = routes;
