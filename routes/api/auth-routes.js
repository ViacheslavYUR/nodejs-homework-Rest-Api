const express = require("express");
const ctrl = require("../../controllers/auth-controllers");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/user");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);
router.get("/verify/:verificationToken", ctrl.verify);
router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

module.exports = router;
