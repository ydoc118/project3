const router = require("express").Router();
const discountController = require("../../controllers/discountControllers")


router.route("/api/businesses")
    .get(discountController.findAll)

router.route("/api/businesses/Category/:id")
    .get(discountController.findOne)

router.route("/api/categories")
    .get(discountController.findCategories)

router.route("/api/businesses/:Category")
    .get(discountController.findCategory)

router.route("/api/vetusers")
    .get(discountController.findUsers)

router.route("/api/vetusers/:firstName/:lastName/:ssn")
    .get(discountController.findOneUser)

module.exports = router;