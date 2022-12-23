const fastify = require("fastify")({
  logger: true,
});
const db = require("./models");

fastify.get("/", (req, res) => {
  return { hi: true };
});

const { todoRouter } = require("./routes");

fastify.register(todoRouter, { prefix: "/api" });

const boot = async () => {
  try {
    await db.sequelize.authenticate();
    await fastify.listen({ port: 8081 });
  } catch (error) {
    console.log(error);
  }
};

boot();
