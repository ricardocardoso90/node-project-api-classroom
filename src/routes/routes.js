const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get('/products', Controller.products);
router.post('/products', Controller.products);

module.exports = router;