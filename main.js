// alert("안녕하세요!");
// document.documentElement.style.setProperty('한컴 말랑말랑');

// 편지 보내기 버튼
function send() {
    window.open("popup.html", "정보", "width=700, height=900, left=100, top=50");
}

function findcode() {
  window.open("findcode.html", "우편번호", "width=500, height=600, left=500, top=50");
}


function backrecom() {
  window.open("backgroundrecom.html", "편지지 추천")
}
  

// 버튼 클릭 시 맨 위로 이동
function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
const topBtn = document.querySelector(".moveTopBtn");  
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
});


function receive() {
  window.open("pw.html", "비밀번호 확인", "width=700px, height=400px, left=100, top=300")
}
