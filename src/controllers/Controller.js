export default class Controller {
  static async products(req, res) {
    const { name, idade } = req.body;

  console.log({ name, idade });
  return res.json({ name, idade });
  };
};