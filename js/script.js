(function (d) {
  var config = {
      kitId: 'fcm7plc',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config)
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s)
})(document);

$(function () {
  var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
  var myD = new Date(); //日付データを取得
  var myYear = String(myD.getFullYear()); //年
  var myMonth = String(myD.getMonth() + 1); //月
  var myDate = String(myD.getDate()); //日

  if (splash_text != myYear + myMonth + myDate) { //cookieデータとアクセスした日付を比較↓
    $("#splash").css("display", "block"); //１回目はローディングを表示
    setTimeout(function () {
      $("#splash_logo").fadeIn(1000, function () { //1000ミリ秒（1秒）かけてロゴがフェードイン
        setTimeout(function () {
          $("#splash_logo").fadeOut(1000); //1000ミリ秒（1秒）かけてロゴがフェードアウト
        }, 1000); //1000ミリ秒（1秒）後に処理を実行
        setTimeout(function () {
          $("#splash").fadeOut(1000, function () { //1000ミリ秒（1秒）かけて画面がフェードアウト
            var myD = new Date();
            var myYear = String(myD.getFullYear());
            var myMonth = String(myD.getMonth() + 1);
            var myDate = String(myD.getDate());
            $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
          });
        }, 1700); //1700ミリ秒（1.7秒）後に処理を実行
      });
    }, 1000); //1000ミリ秒（1秒）後に処理を実行
  } else {
    $("#splash").css("display", "none"); //同日2回目のアクセスでローディング画面非表示
  };
  $('svg', $(this)).addClass('active');
});
$(function () {
  $('header').on('inview', function (event, isInView) {
    if (isInView) {
      $('svg', $(this)).addClass('active');
    } else {
      $('svg', $(this)).removeClass('active');
    }
  });
});
$(function () {
  $('.repeat').on('inview', function (event, isInView) {
    if (isInView) {
      var classes = $(this).parent().attr('class');
      $(this).parent().attr('class', 'animate');
      var indicator = $(this);
      setTimeout(function () {
        $(indicator).parent().addClass(classes);
      }, 20);
    }
  });
});
$(function () {
  setTimeout(() => document.body.classList.add('render'), 60);
  const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
  const total = navdemos.length;
  const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
  const navigate = (linkEl) => {
    document.body.classList.remove('render');
    document.body.addEventListener('transitionend', () => window.location = linkEl.href);
  };
  navdemos.forEach(link => link.addEventListener('click', (ev) => {
    ev.preventDefault();
    navigate(ev.target);
  }));
  document.addEventListener('keydown', (ev) => {
    const keyCode = ev.keyCode || ev.which;
    let linkEl;
    if (keyCode === 37) {
      linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
    } else if (keyCode === 39) {
      linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
    } else {
      return false;
    }
    navigate(linkEl);
  });
  imagesLoaded('.glitch__img', {
    background: true
  }, () => {
    document.body.classList.remove('loading');
    document.body.classList.add('imgloaded');
  });
});


$(function () {
  $('.button').click(function () {
    $(this).parent().find(".works_wrapper").stop().fadeToggle(1000);
  });
});