(function () {
  const {BrowserWindow} = require('electron').remote;

  function init() {
    document.getElementById("min-button").addEventListener("click", (e) => {
      var window = BrowserWindow.getFocusedWindow();
      window.minimize();
    });

    document.getElementById("max-button").addEventListener("click", (e) => {
      var window = BrowserWindow.getFocusedWindow();
      if(window.isMaximized()){
        document.getElementById("changingIcon").innerHTML = "check_box_outline_blank";
        window.unmaximize();
      } else {
        document.getElementById("changingIcon").innerHTML = "filter_none";
        window.maximize();
      }
    });

    document.getElementById("exit-button").addEventListener("click", (e) => {
      var window = BrowserWindow.getFocusedWindow();
      window.close();
    });
  };

  document.onreadystatechange =  () => {
    if (document.readyState == "complete") {
      init();
    }
  };
})();
