
//this
const jiwon = {
  name: "jiwon",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
// 일반함수는 출력 잘 됨. 화살표함수는 출력하지 못함.

jiwon.normal(); //jiwon
// 일반함수는 호출 위치에 따라 this 정의: 즉, 여기서 호출되었을 때 인스턴스는 jiwon임. 즉, 여기서 this는 jiwon임.

jiwon.arrow(); //undefined
//화살표함수 내부에서의 this는 자신이 선언된 함수 내부에서 this를 찾으려고 하지만, 정의되어있지 않음.

const amy = {
  name: "Amy",
  normal: jiwon.normal,
  // 여기서는 함수가 호출된 것이 아닌 함수가 할당된 것임!
  // jiwon.normal() 이런식으로 ()가 붙어야 호출임.
  arrow: jiwon.arrow,
};

amy.normal(); //Amy
// 호출될 때 연결되어져 있는 this는 Amy임으로, Amy 출력됨.
amy.arrow(); //undefined

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const doli = new User("doli");

doli.normal(); //doli
doli.arrow(); //undefined

