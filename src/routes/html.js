const router = require("express").Router();
const path = require("path");

router.get("/", (content, res) => {
    res.sendFile(path.resolve("assets/index.html"));
});

module.exports = router;
