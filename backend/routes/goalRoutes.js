const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  res.status(200).json({
    Message: "get goals",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    Message: "set goals",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    Message: `update ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    Message: `deleting ${req.params.id}`,
  });
});
module.exports = router;
