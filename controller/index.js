const { todo } = require("../models");

module.exports = {
  Create: async (req, res) => {
    try {
      let { description, title } = req.body;

      await todo.create({
        description: description,
        title: title,
      });
      res.status(200).send({ result: "success" });
    } catch (error) {
      console.log(error);
    }
  },
  Update: async (req, res) => {
    try {
      let { id, description, title } = req.body;
      await todo.update(
        {
          description: description,
          title: title,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send({ result: "success" });
    } catch (error) {
      console.log(error);
    }
  },
  Read: async (req, res) => {
    try {
      const rows = await todo.findAll();
      return res.status(200).send(rows);
    } catch (error) {
      console.log(error);
    }
  },
  Delete: async (req, res) => {
    try {
      let { id } = req.body;
      await todo.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({ result: "success" });
    } catch (error) {
      console.log(error);
    }
  },
};
