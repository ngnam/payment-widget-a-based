(function(window) {
  window.environment = window.environment || {};

  switch (window.location.hostname) {
    case 'http://localhost:8100':
      // API URL Service
      window.environment.BASE_API_URL = 'https://api.paymentwall.com';
      window.environment.PROJECT_KEY = '33ecc3e7c64a7e322e29bc49af361fa8';
      break;
    default:
      // use test for local API
      window.environment.BASE_API_URL = 'https://api.paymentwall.com';
      window.environment.PROJECT_KEY = '33ecc3e7c64a7e322e29bc49af361fa8';
      break;
  }
})(this);
