(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var _fontSize = clientWidth / 10;
      if (_fontSize > 50) {
        _fontSize = 50;
      }
      docEl.style.fontSize = _fontSize + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  recalc();
  doc.addEventListener('DOMContentLoaded', recalc, false);
  /*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
})(document, window);
