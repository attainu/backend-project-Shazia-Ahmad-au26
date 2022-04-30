const Register = require("../controller/signUpService");
const LoginService = require("../controller/loginService");
const Diary = require("../controller/diaryService");
const {Auth_ACCESS} = require("../middleware/auth")
const router = require("express").Router();

router.post("/register", Register.create);
router.post("/login", LoginService.login);
router.post("/diary", Diary.create);
router.get("/diary", Diary.getAll);
router.delete("/diary/:id",Diary.delete);
router.get("/diary/:id",Diary.getById);
router.put("/diary/:id",Diary.updated);



module.exports = router;