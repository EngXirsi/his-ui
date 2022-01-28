import routes from "routes";

export const useRouteName = () => {

  let navs = [];
  routes.forEach((route) => {
    console.log(window.location.href.indexOf(route.layout + route.path))
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {

     
      navs =  route.navs;
    }
  });
  return navs;
};
