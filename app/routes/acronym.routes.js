module.exports = (app, express, axios) => {
  const router = express.Router();
  const controller = require("../controllers/acronym.controller");
  const admin = require("../middleware/authorization_admin")(axios);

  router.get("/healthcheck", controller.healthCheck);

  router.get("/", controller.findAll);

  router.get("/:acronym", controller.findOne);

  router.get("/random/:count", controller.findRandomAcronym);

  router.post("/", controller.create);

  router.put("/:acronym", admin, controller.update);

  router.delete("/:acronym", admin, controller.delete);

  app.use("/api/v0/acronyms", router);
};