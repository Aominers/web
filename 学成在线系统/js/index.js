alert(111)
function pic() {
    let pic1 = document.getElementById("pic")
    let color = document.getElementsByClassName("banner")
    pic1.setAttribute('style', "background:url:(../images/index/banner2.png)")
    color.style = "background-color: #c1ee93;"
    // color.setAttribute('style', 'background-color: #0f0;')
    pic1.style = "background: url(../images/index/banner1.png) no-repeat top center;"
}
//每隔5000ms调用一次pic函数
setInterval(function () { pic() }, 5000)