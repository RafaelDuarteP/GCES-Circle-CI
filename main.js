function Add(a, b) {
    return a + b;
  }
  
  function SayHello() {
    console.log("sup world from srcmake");
  }
  
  if (typeof require !== "undefined" && require.main === module) {
    SayHello();
  }
  
module.exports = Add;