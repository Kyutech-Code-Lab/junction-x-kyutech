/* 共通 head 部分 (includes/head.html) を動的に読み込み、document.head に挿入します。
   このスクリプトファイルからの相対パスで include を解決するため、サブフォルダにあるページでも動作します。
*/
(function () {
  try {
    var scriptEl =
      document.currentScript ||
      (function () {
        var s = document.getElementsByTagName("script");
        return s[s.length - 1];
      })();
    var includeUrl = new URL("../includes/head.html", scriptEl.src).href;
    fetch(includeUrl)
      .then(function (res) {
        if (!res.ok) throw new Error("取得に失敗しました: " + includeUrl);
        return res.text();
      })
      .then(function (html) {
        if (!html) return;
        var template = document.createElement("template");
        template.innerHTML = html.trim();
        // template の子ノードを head に追加
        Array.prototype.slice
          .call(template.content.childNodes)
          .forEach(function (n) {
            document.head.appendChild(n);
          });
      })
      .catch(function (err) {
        console.error("load-head.js エラー:", err);
      });
  } catch (e) {
    console.error("load-head 初期化エラー", e);
  }
})();
