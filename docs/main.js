var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
  winScrollTop = $(this).scrollTop();
  if (winScrollTop >= startPos) {
      if(winScrollTop >= 200){
          $('.header').addClass('hide');
      }
  } else {
      $('.header').removeClass('hide');
  }
  startPos = winScrollTop;
});

$(function() {
  // ↓windowがスクロールされた時に実行する処理
  $(window).scroll(function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".scroll").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt + 300) {
        $(this).addClass("blockIn");
      }
    });
  });
});


$(function(){
 
    //個別印刷用
    $('.print-btn').on('click', function(){
        var printPage = $(this).closest('.print-page').html();
        $('body').append('<div id="print"></div>');
        $('#print').append(printPage);
        $('body > :not(#print)').addClass('print-off');
        window.print();
        $('#print').remove();
        $('.print-off').removeClass('print-off');
    });
 
});