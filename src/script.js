// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputuserName = document.querySelector("#username");
let elPassword = document.querySelector("#password"); //비밀번호 입력창 값
let elPasswordRe = document.querySelector("#password-retype"); //비밀번호 확인 입력창값
// console.log(elInputuserName);
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");
let elFailurePassword = document.querySelector(".mismatch-message");

function isMoreThan4Length(value) {
  return value.length >= 4;
}

function displayMessage(event) {
  let input = event.target.value;
  if (isMoreThan4Length(input)) {
    //   success message 클래스 제거
    elSuccessMessage.classList.remove("hide");
    // fauilure message 클래스 추가
    elFailureMessage.classList.add("hide");
    reStatus = true;
  } else {
    //   failure message 클래스 제거
    elFailureMessage.classList.remove("hide");
    // success emssage 클래스 추가
    elSuccessMessage.classList.add("hide");
  }
}

function displayPassword() {
  // 이벤트 핸들러 실행함수
  if (isMatch(elPassword.value, elPasswordRe.value)) {
    // isMatch의 반환값이 true일때 실행되는곳 => 비밀번호 같은경우
    elFailurePassword.classList.add("hide");
  } else {
    // false 다른경우
    elFailurePassword.classList.remove("hide");
  }
}
elInputuserName.addEventListener("keyup", displayMessage);
elPasswordRe.addEventListener("keyup", displayPassword);
// 추가 과제
// 1. 비밀번호 일치 하는지 확인
// 2. 회원가입 -> 모두 입력하도록
// 3. 전화번호 -> 숫자 아닌경우

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}
//isMatch의 반환값은 true,false
