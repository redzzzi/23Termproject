const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  const ckHeart = req.body.ck_heart === "true";
  const ckRabbitevil = req.body.ck_raevil === "true";
  const ckDuck = req.body.ck_duck === "true";

  let imagePath;
  if (ckHeart) {
    imagePath = "./편지지/편지지1.jpg";
  } else if (ckRabbitevil) {
    imagePath = "./편지지/편지지2.jpg";
  } else if (ckDuck) {
    imagePath = "./편지지/편지지3.png";
  }

  if (imagePath) {
    const file = req.file; // 업로드된 파일

    // 파일을 지정된 경로에 저장
    const newFilePath = path.join(__dirname, imagePath);
    fs.renameSync(file.path, newFilePath);

    res.json({ success: true });
  } else {
    res.json({ success: false, message: "유효한 체크박스가 없습니다." });
  }
});

app.listen(3000, () => {
  console.log("서버가 실행되었습니다.");
});
