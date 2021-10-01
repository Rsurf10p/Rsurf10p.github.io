// 最初の画面を立ち上げた時
var windowSize = window.innerWidth;
var value = 0;

if (windowSize < 1000) {
  // $("#lesson0_number").unwrap();
  value=0;
} else {
  console.log('Large!');
  $('#lesson0_number ,#lesson0_sentence').wrapAll('<div class="lesson_wrap">');
  value=1;
}
console.log(value);

const INTERVAL 	= 100;
const onGet 	= function() { return value; };
const onChanged	= function() {
        console.log( '値が変更されました。' );
        console.log(value);
        if(value==0){
          $("#lesson0_number").unwrap();
          $("#lesson1_number").unwrap();
          $("#lesson2_number").unwrap();
          $("#lesson3_number").unwrap();
          $("#lesson4_number").unwrap();
        }else{
          $('#lesson0_number ,#lesson0_sentence').wrapAll('<div class="lesson_wrap">');
          $('#lesson1_number ,#lesson1_sentence').wrapAll('<div class="lesson_wrap">');
          $('#lesson2_number ,#lesson2_sentence').wrapAll('<div class="lesson_wrap">');
          $('#lesson3_number ,#lesson3_sentence').wrapAll('<div class="lesson_wrap">');
          $('#lesson4_number ,#lesson4_sentence').wrapAll('<div class="lesson_wrap">');
        }
      };




window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', function(){
    windowSize = window.innerWidth
    // console.log("Width:" + windowSize);
    if (windowSize < 1000) {
      // console.log('Small!');
      value=0;
    } else {
      // console.log('Large!');
      value=1;
    }
  });
});

observe( INTERVAL, onGet, onChanged );

function observe( interval, onGet, onChanged ) {
    let     previousValue   = onGet();
    const   onObserve       = function() {
        const VALUE = onGet();
        if ( previousValue === VALUE ) return;

        onChanged( VALUE );
        previousValue = VALUE;
    };

    setInterval( onObserve, interval );
}
