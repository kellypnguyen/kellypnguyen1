// baby one more time **********************
let britney = $('.britney');

britney.on('mouseenter focus', function () {
  britney.get(0).play();
});

britney.on('mouseleave blur', function () {
  britney.get(0).pause();
});
var videoBritney= $('.britney').get(0);       
videoBritney.addEventListener('ended',function(){
    videoBritney.load();     
},false);

// lucky **********************
let $dinos = $('.dinos');
$dinos.on('mouseenter focus', function () {
  $dinos.get(0).play();
});

$dinos.on('mouseleave blur', function () {
  $dinos.get(0).pause();
});

var videoDinos= $('.dinos').get(0);       
videoDinos.addEventListener('ended',function(){
    videoDinos.load();     
},false);

// lucky **********************
let $toxic = $('.toxic');
$toxic.on('mouseenter focus', function () {
  $toxic.get(0).play();
});

$toxic.on('mouseleave blur', function () {
  $toxic.get(0).pause();
});

var videoToxic= $('.toxic').get(0);       
videoToxic.addEventListener('ended',function(){
    videoToxic.load();     
},false);

// circus **********************
let $circus = $('.circus');
$circus.on('mouseenter focus', function () {
  $circus.get(0).play();
});

$circus.on('mouseleave blur', function () {
  $circus.get(0).pause();
});

var videoCircus= $('.circus').get(0);       
videoCircus.addEventListener('ended',function(){
    videoCircus.load();     
},false);

// gimme more **********************
let $gimmemore = $('.gimmemore');
$gimmemore.on('mouseenter focus', function () {
  $gimmemore.get(0).play();
});

$gimmemore.on('mouseleave blur', function () {
  $gimmemore.get(0).pause();
});

var videoGimmemore= $('.gimmemore').get(0);       
videoGimmemore.addEventListener('ended',function(){
    videoGimmemore.load();     
},false);

// if you seek amy **********************
let $amy = $('.amy');
$amy.on('mouseenter focus', function () {
  $amy.get(0).play();
});

$amy.on('mouseleave blur', function () {
  $amy.get(0).pause();
});

var videoamy= $('.amy').get(0);       
videoamy.addEventListener('ended',function(){
    videoamy.load();     
},false);