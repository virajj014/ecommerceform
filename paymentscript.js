function online_pay_fcn() {
  if (document.getElementById("onlinepay").checked) {
    document.getElementById("section4").style.display = "flex";
  } else {
    document.getElementById("section4").style.display = "none";
  }
  //   if (document.getElementById("cod").checked) {
  //     document.getElementById("section4").style.display = "none";
  //   }
}
function cod_fcn() {
  if (document.getElementById("cod").checked) {
    document.getElementById("section4").style.display = "none";
  } else {
    document.getElementById("section4").style.display = "flex";
  }
  //   if (document.getElementById("cod").checked) {
  //     document.getElementById("section4").style.display = "none";
  //   }
}
