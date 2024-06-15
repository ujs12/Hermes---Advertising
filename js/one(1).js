var zImg = document.getElementsByClassName("z-img")[0];
var xImg = document.getElementsByClassName("x-img")[0];
var mbImg = document.getElementsByClassName("mb-img")[0];
var pOne = document.getElementsByClassName("p-one")[0];
var pTow = document.getElementsByClassName("p-tow")[0];
var yzImg = document.getElementsByClassName("yz-img")[0];
var rwImg = document.getElementsByClassName("rw-img")[0];
var ksBtn = document.getElementsByClassName("ks-btn")[0];
const logo = document.getElementsByClassName("logo")[0];
// xImg.click = function(){
//   setTimeout(function () {
//     zImg.className = 'z-dx';
//   }, 4000);
// } 
const bgMusic = document.getElementById("bgMusic");



// 改
// window.addEventListener('load', function() {
zImg.classList.add('expanded');
xImg.classList.add('down');
setTimeout(() => {
  mbImg.classList.add('start');
  pOne.classList.add('p-onet');
}, 2000);
setTimeout(() => {
  pTow.classList.add('p-towt');
}, 3000);
setTimeout(() => {
  yzImg.classList.add('yz-imgt');
  logo.classList.add('logot')
}, 4000);
setTimeout(() => {
  rwImg.classList.add("rw-imgt");
}, 5000);
setTimeout(() => {
  ksBtn.style.opacity = "1";
  ksBtn.classList.add("anima");
}, 6500);

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
  bgMusic.play();
  one.style.display = 'none';

  oneImg.classList.add('one-imgt');


  setTimeout(() => {
    towImg.classList.add('tow-imgt');

  }, 1000);
  setTimeout(() => {
    rwTow.classList.add('rw-towt');

  }, 2000);
  setTimeout(() => {
    ztImg.classList.add('zt-imgt');

  }, 3000);
  setTimeout(() => {
    threeImg.classList.add('three-imgt');

  }, 4000);
  setTimeout(() => {
    fourImg.classList.add('four-imgt');
  }, 5000);
  setTimeout(() => {
    tow.style.display = "none";
    oneOne.classList.add("one-bf-onet")
  }, 7000);

  setTimeout(() => {
    oneTow.classList.add("one-bf-towt")
  }, 8000);
  setTimeout(() => {
    fiveBf.classList.add("five-bft")
  }, 9000);

  setTimeout(() => {
    towBf.classList.add("tow-bft")
  }, 10000);

  setTimeout(() => {
    threeOne.classList.add("three-bf-onet")
  }, 11000);
  setTimeout(() => {
    threeTow.classList.add("three-bf-towt")
  }, 12000);
  setTimeout(() => {
    fourOne.classList.add("four-bf-onet")
  }, 13000);
  setTimeout(() => {
    fourTow.classList.add("four-bf-towt")
  }, 14000);

  setTimeout(() => {
    fourThree.style.opacity = "1";
    fourThree.classList.add("four-bf-threet")
  }, 15000);

}

var three = document.getElementsByClassName("three")[0];
var attAreat = document.getElementsByClassName("attAreat")[0];
var bOne = document.getElementsByClassName("bb-one")[0];
var bTow = document.getElementsByClassName("bb-tow")[0];
var xzOne = document.getElementsByClassName("xz-one")[0];
var xzTow = document.getElementsByClassName("xz-tow")[0];

fourThree.onclick = function () {
  three.style.display = "none"


  attAreat.classList.add("attAreatt");

  setTimeout(() => {
    bOne.classList.add("bb-onet");
  }, 1000);
  setTimeout(() => {
    bTow.classList.add("bb-towt");
  }, 2000);
  setTimeout(() => {
    xzOne.style.opacity = "1";
    xzOne.classList.add("xz-onett");
    xzTow.style.opacity = "1";
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

xzOne.onclick = function () {
  four.style.display = "none"
  six.style.display = "none"
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
    btnImg.style.opacity = "1";
    btnImg.classList.add("btn-imgtt");
  }, 7000);
}
btnImg.onclick = function () {
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


xzTow.onclick = function () {
  four.style.display = "none"
  five.style.display = "none"
  six.style.display = ""
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
    jxImg.style.opacity = "1";
    jxImg.classList.add("jx-imgt");
  }, 5000);
}

var six = document.getElementsByClassName("six")[0];
var rgYs = document.getElementsByClassName("right-ys")[0];
var rwTh = document.getElementsByClassName("rw-three")[0];
var baImg = document.getElementsByClassName("bao-img")[0];
var qyImg = document.getElementsByClassName("qy-img")[0];
var qzImg = document.getElementsByClassName("qz-img")[0];
var xxzImg = document.getElementsByClassName("xxz-img")[0];

// 第八部分
var seven = document.getElementsByClassName("seven")[0];
var snImg = document.getElementsByClassName("sn-img")[0];
var dcImg = document.getElementsByClassName("dc-img")[0];
var baoTow = document.getElementsByClassName("bao-tow")[0];
var drX = document.getElementsByClassName("dr-x")[0];
var drZt = document.getElementsByClassName("dr-zt")[0];
var smX = document.getElementsByClassName("sm-x")[0];
var smZt = document.getElementsByClassName("sm-zt")[0];
var ccX = document.getElementsByClassName("cc-x")[0];
var ccZt = document.getElementsByClassName("cc-zt")[0];
var llX = document.getElementsByClassName("ll-x")[0];
var llZt = document.getElementsByClassName("ll-zt")[0];
var wdX = document.getElementsByClassName("wd-x")[0];
var wdZt = document.getElementsByClassName("wd-zt")[0];

//第九部分
var eight = document.getElementsByClassName("eight")[0];
var jkdImg = document.getElementsByClassName("jkd-img")[0];
var jdhImg = document.getElementsByClassName("jdh-img")[0];
var baoThree = document.getElementsByClassName("bao-three")[0];
var baoFour = document.getElementsByClassName("bao-four")[0];
var wxlImg = document.getElementsByClassName("wxl-img")[0];

// 第十部分
var nine = document.getElementsByClassName("nine")[0];
var xkImg = document.getElementsByClassName("xk-img")[0];
var zxImg = document.getElementsByClassName("zx-img")[0];
var rwFour = document.getElementsByClassName("rw-four")[0];
var zlImg = document.getElementsByClassName("zl-img")[0];
var fxImg = document.getElementsByClassName("fx-img")[0];
var logotow = document.getElementsByClassName("logo-tow")[0];

jxImg.onclick = function () {
  six.style.display = "none";
  setTimeout(() => {
    rgYs.classList.add("right-yst")
  }, 1000);
  setTimeout(() => {
    rwTh.classList.add("rw-threet")
  }, 2500);
  setTimeout(() => {
    baImg.classList.add("bao-imgt")
  }, 4000);
  setTimeout(() => {
    qyImg.classList.add("qy-imgt")
    qzImg.classList.add("qz-imgt")
  }, 5500);
  setTimeout(() => {
    xxzImg.classList.add("xxz-imgt")
  }, 7000);
  setTimeout(() => {
    seven.style.display = "none";
  }, 8500)
  setTimeout(() => {
    snImg.classList.add("sn-imgt")
  }, 10000)
  setTimeout(() => {
    dcImg.classList.add("dc-imgt")
  }, 11500)
  setTimeout(() => {
    baoTow.classList.add("bao-towt")
  }, 13000)
  setTimeout(() => {
    drX.classList.add("dr-xt")
  }, 14000)
  setTimeout(() => {
    drZt.classList.add("dr-ztt")
  }, 15000)
  setTimeout(() => {
    smX.classList.add("dr-xt")
  }, 16000)
  setTimeout(() => {
    smZt.classList.add("dr-ztt")
  }, 17000)
  setTimeout(() => {
    ccX.classList.add("dr-xt")
  }, 18000)
  setTimeout(() => {
    ccZt.classList.add("dr-ztt")
  }, 19000)
  setTimeout(() => {
    llX.classList.add("dr-xt")
  }, 20000)
  setTimeout(() => {
    llZt.classList.add("dr-ztt")
  }, 21000)
  setTimeout(() => {
    wdX.classList.add("dr-xt")
  }, 22000)
  setTimeout(() => {
    wdZt.classList.add("dr-ztt")
  }, 23000)

  //第九部分
  setTimeout(() => {
    eight.style.display = "none";
  }, 25000)
  setTimeout(() => {
    jkdImg.classList.add("jkd-imgt");
  }, 26000)
  setTimeout(() => {
    jdhImg.classList.add("jdh-imgt");
  }, 27000)
  setTimeout(() => {
    baoFour.classList.add("bao-fourt");
  }, 28000)
  setTimeout(() => {
    baoThree.classList.add("bao-threet");
  }, 29000)
  setTimeout(() => {
    wxlImg.classList.add("wxl-imgt");
  }, 30000)

  // 第十部分
  setTimeout(() => {
    nine.style.display = "none";
  }, 32000)
  setTimeout(() => {
    xkImg.classList.add("xk-imgt");
  }, 33000)
  setTimeout(() => {
    zxImg.classList.add("zx-imgt");
  }, 34000)
  setTimeout(()=>{
    logotow.classList.add("logo-towt")
  },34500)
  setTimeout(() => {
    rwFour.classList.add("rw-fourt");
  }, 35000)
  
  setTimeout(() => {
    zlImg.style.opacity = '1';
    zlImg.classList.add("btn-s");
    fxImg.style.opacity = '1';
    fxImg.classList.add("btn-s");
  }, 36000)
}
zlImg.onclick = function () {
  one.style.display = "";
  tow.style.display = "";
  three.style.display = "";
  four.style.display = "";
  five.style.display = "";
  six.style.display = "";
  seven.style.display = "";
  eight.style.display = "";
  nine.style.display = "";
  window.location.reload();

}
fxImg.onclick = function(){
  if(confirm("您确定要关闭本页吗？")){
    window.opener=null;
    window.open('','_self');
    window.close();
}
else{
}
}