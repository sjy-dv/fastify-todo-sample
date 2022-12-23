const controller = require("../controller");

const todoRouter = (fastify, opt, done) => {
  fastify.post("/create", controller.Create);
  fastify.post("/update", controller.Update);
  fastify.get("/read", controller.Read);
  fastify.post("/delete", controller.Delete);
  done();
};

module.exports = { todoRouter };
