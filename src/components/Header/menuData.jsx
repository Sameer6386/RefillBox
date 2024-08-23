const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
    submenu: [
      { title: "Web Design", path: "/services/web-design" },
      { title: "Development", path: "/services/development" },
      { title: "SEO", path: "/services/seo" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default menuData;
