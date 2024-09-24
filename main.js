const timer = {
  name: "jiwon",
  timeout: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); //undefined
// 왜 일반함수로 입력했는데 undefined 된 것일까?
// 일반 함수는 호출 위치에 따라 this를 정의함.
// 여기서는 setTimeout이라는 함수의 내부 로직으로 콜백이 들어가서 어디선가 실행됨.
// 그래서 출력안됨.

const timer2 = {
  name: "this time",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer2.timeout(); // this time
