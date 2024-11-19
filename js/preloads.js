
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.CG3oGVWg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.DJbo58dY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePage.DAWBdGKh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.D3MqhtPV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.DlF22fQt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods.CcV5qMx2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.C_kFvuW1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.CARN3jV2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/MarketsProDisclaimer.WKJYgBRF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.BoTPQo8b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.BKXCP5ES.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.CsahSLJK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.BjRP-AWH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedPayment.CtAb0AJN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin.B9TU4Jxr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShopPayRequiresVerification.eKnkYcJS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.yUs-S_zA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGooglePaySdk.v8Lg8rSX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLoginLoader.Ck4vfFaL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/publishMessage.DiT7ibtu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.jSmCXco9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/RageClickCapture.CBFAGE_T.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context.DCOiyZyo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.BZsNabUb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useAmazonContact.CYUV10M6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.ilVg2WWY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.C_MEAKXH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.BARrULEU.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.CGQl-irG.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/OnePage.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  