import { Router } from "express";
// import middleware
// import controller

const routes = Router();

export default () => {
  //  routes.get("", Contoller);
  routes.get("/berg", (req, res) => res.send("Meu deus do ceu, Berg"));

  // routes.use(middleware);
  // routes.delete("". Controller);

  return routes;
};
