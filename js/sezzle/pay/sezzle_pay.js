(function () {
  Sezzle = {}
  Sezzle.render = function () {
    if (!document.sezzleConfig) {
      console.warn('SezzlePay: document.sezzleConfig is not set, cannot render widget');
      return;
    }
  
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.sezzle.com/v1/javascript/price-widget?uuid=' + document.sezzleConfig.merchantID;
    document.head.appendChild(script);
  }
})();