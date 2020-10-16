const router = require("express").Router();
const discountController = require("../../controllers/discountControllers")


router.route("/api/businesses")
    .get(discountController.findAll)

router.route("/api/businesses/:id")
    .get(discountController.findOne)

router.route("/api/categories")
    .get(discountController.findCategories)

module.exports = router;