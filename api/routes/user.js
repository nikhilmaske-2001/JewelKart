const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("User test is successfull");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send(username);
    console.log(username);
})

module.exports = router;