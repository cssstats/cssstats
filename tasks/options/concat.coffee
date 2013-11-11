module.exports =
  vendor_debug:
    src: [
      'src/client/vendor/angular/angular.js'
      'src/client/vendor/angular-route//angular-route.js'
    ]
    dest: 'public/js/vendor.js'
  vendor_dist:
    src: [
      'src/client/vendor/angular/angular.min.js'
      'src/client/vendor//angular-route//angular-route.min.js'
    ]
    dest: 'public/js/vendor.js'