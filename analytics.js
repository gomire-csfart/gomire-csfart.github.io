/* CSFART shared GA4 bootstrap — single measurement ID, no customer/order fields. */
(function () {
  'use strict';
  var measurementId = 'G-DKMKTGJEGW'; // CSFART GA4 web stream measurement ID
  /* A redacted/example ID must never be treated as working analytics. */
  if (!/^G-[A-Z0-9]{6,20}$/.test(measurementId) || /^G-X+$/.test(measurementId)) {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  var loader = document.createElement('script');
  loader.async = true;
  loader.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(loader);
  /* Outbound 'click' event is GA4 Enhanced Measurement; do not duplicate it manually. */
}());
