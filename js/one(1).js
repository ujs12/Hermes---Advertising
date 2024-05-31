var zImg = document.getElementsByClassName("z-img")[0];
var xImg = document.getElementsByClassName("x-img")[0];
var mbImg = document.getElementsByClassName("mb-img")[0];
var pOne = document.getElementsByClassName("p-one")[0];
var pTow = document.getElementsByClassName("p-tow")[0];
var yzImg = document.getElementsByClassName("yz-img")[0];
// xImg.click = function(){
//   setTimeout(function () {
//     zImg.className = 'z-dx';
//   }, 4000);
// }

// 改
// window.addEventListener('load', function() {
zImg.classList.add('expanded');
xImg.classList.add('down');
setTimeout(() => {
  mbImg.classList.add('start');
  pOne.classList.add('p-onet')
}, 2000);
setTimeout(() => {
  pTow.classList.add('p-towt')
}, 3000);
setTimeout(() => {
  yzImg.classList.add('yz-imgt')
}, 4000);

// });

var oneImg = document.getElementsByClassName("one-img")[0];
var towImg = document.getElementsByClassName("tow-img")[0];
var rwTow = document.getElementsByClassName("rw-tow")[0];
var ztImg = document.getElementsByClassName("zt-img")[0];
var threeImg = document.getElementsByClassName("three-img")[0];
var fourImg = document.getElementsByClassName("four-img")[0];
var one = document.getElementsByClassName("one")[0];
// 按钮
var ksBtn = document.getElementsByClassName("ks-btn")[0];

var tow = document.getElementsByClassName("tow")[0];
var oneOne = document.getElementsByClassName("one-bf-one")[0];
var oneTow = document.getElementsByClassName("one-bf-tow")[0];
var towBf = document.getElementsByClassName("tow-bf")[0];
var fiveBf = document.getElementsByClassName("five-bf")[0];
var threeOne = document.getElementsByClassName("three-bf-one")[0];
var threeTow = document.getElementsByClassName("three-bf-tow")[0];
var fourOne = document.getElementsByClassName("four-bf-one")[0]
var fourTow = document.getElementsByClassName("four-bf-tow")[0]
var fourThree = document.getElementsByClassName("four-bf-three")[0]





// window.addEventListener('load', function() {
ksBtn.onclick = function () {
  // console.log(1);
  one.style.display = 'none';

  oneImg.classList.add('one-imgt');


  setTimeout(() => {
    towImg.classList.add('tow-imgt');

  }, 2000);
  setTimeout(() => {
    rwTow.classList.add('rw-towt');

  }, 4000);
  setTimeout(() => {
    ztImg.classList.add('zt-imgt');

  }, 6000);
  setTimeout(() => {
    threeImg.classList.add('three-imgt');

  }, 8000);
  setTimeout(() => {
    fourImg.classList.add('four-imgt');
  }, 10000);
  setTimeout(() => {
   tow.style.display="none";
   oneOne.classList.add("one-bf-onet")
  }, 12000);
  
  setTimeout(() => {
    oneTow.classList.add("one-bf-towt")
  }, 14000);
  setTimeout(() => {
    fiveBf.classList.add("five-bft")
  }, 16000);
  
  setTimeout(() => {
    towBf.classList.add("tow-bft")
  }, 18000);
  
  setTimeout(() => {
    threeOne.classList.add("three-bf-onet")
  }, 20000);
  setTimeout(() => {
    threeTow.classList.add("three-bf-towt")
  }, 22000);
  setTimeout(() => {
    fourOne.classList.add("four-bf-onet")
  }, 24000);
  setTimeout(() => {
    fourTow.classList.add("four-bf-towt")
  }, 26000);
  
  setTimeout(() => {
    fourThree.style.opacity="1";
    fourThree.classList.add("four-bf-threet")
  }, 28000);

}

var three = document.getElementsByClassName("three")[0];
var attAreat = document.getElementsByClassName("attAreat")[0];
var bOne = document.getElementsByClassName("bb-one")[0];
var bTow = document.getElementsByClassName("bb-tow")[0];
var xzOne = document.getElementsByClassName("xz-one")[0];
var xzTow = document.getElementsByClassName("xz-tow")[0];

fourThree.onclick = function(){
  three.style.display="none"


  attAreat.classList.add("attAreatt");

setTimeout(() => {
  bOne.classList.add("bb-onet");
},1000);
setTimeout(() => {
  bTow.classList.add("bb-towt");
}, 2000);
setTimeout(() => {
  xzOne.style.opacity="1";
  xzOne.classList.add("xz-onett");
  xzTow.style.opacity="1";
  xzTow.classList.add("xz-towtt");
}, 3000);

}

var attAs = document.getElementsByClassName("attAreats")[0];
var sbImg = document.getElementsByClassName("sb-img")[0];
var jdImg = document.getElementsByClassName("jd-img")[0];
var rlImg = document.getElementsByClassName("rl-img")[0];
var nyImg = document.getElementsByClassName("ny-img")[0];
var mbjImg = document.getElementsByClassName("mbj-img")[0];
var yxImg = document.getElementsByClassName("yx-img")[0];
var btnImg = document.getElementsByClassName("btn-img")[0];
var xzOne = document.getElementsByClassName("xz-one")[0];
var four = document.getElementsByClassName("four")[0];

xzOne.onclick = function(){
four.style.display = "none"

attAs.classList.add("attAreatst");
setTimeout(() => {
  sbImg.classList.add("sb-imgt");
}, 1000);
setTimeout(() => {
  jdImg.classList.add("jd-imgt");
}, 2000);
setTimeout(() => {
  rlImg.classList.add("rl-imgt");
}, 3000);
setTimeout(() => {
  nyImg.classList.add("ny-imgt");
}, 4000);
setTimeout(() => {
  mbjImg.classList.add("mbj-imgt");
  yxImg.classList.add("yx-imgt");
}, 5000);

setTimeout(() => {
  btnImg.style.opacity="1";
  btnImg.classList.add("btn-imgtt");
}, 7000);
}
btnImg.onclick=function(){
  four.style.display = "";
}
// 第六部分
var xzTow = document.getElementsByClassName("xz-tow")[0];
var crImg = document.getElementsByClassName("cr-img")[0];
var xxMax = document.getElementsByClassName("xx-max")[0];
var xxMin = document.getElementsByClassName("xx-min")[0];
var sxMin = document.getElementsByClassName("left-sx")[0];
var leMin = document.getElementsByClassName("left-xx")[0];
var rgMin = document.getElementsByClassName("right-xx")[0];
var mbTow = document.getElementsByClassName("mb-tow")[0];
var cgImg = document.getElementsByClassName("cg-img")[0];
var jxImg = document.getElementsByClassName("jx-img")[0];
var five = document.getElementsByClassName("five")[0];


xzTow.onclick = function(){
  four.style.display = "none"
  five.style.display = "none"
  setTimeout(() => {
    crImg.classList.add("cr-imgt");
  }, 1000);
  setTimeout(() => {
    xxMax.classList.add("xx-maxt");
    xxMin.classList.add("xx-mint");
    leMin.classList.add("left-xxt");
    rgMin.classList.add("right-xxt");
    sxMin.classList.add("left-sxt");
  }, 2000);
  setTimeout(() => {
    mbTow.classList.add("mb-towt");
    cgImg.classList.add("cg-imgt");
  }, 3000);
  setTimeout(() => {
    jxImg.style.opacity="1";
    jxImg.classList.add("jx-imgt");
  }, 5000);
}