// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var marketApp= angular.module('MarketApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

marketApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('Home',{
      url:'/home',
    templateUrl:'app/Home/Home.html'
    }
  )
    .state('Home.Login',{
    url:'/login',
    views:{
      'mainView':{
        templateUrl:'app/Login/Login.html',
        controller:'LoginCtrl'
      }
    }
  })

    .state('main',{

      url:'/main',
      templateUrl:'app/Main/Main.html',
      abstract:true,
      controller:'MainCtrl'
    })
    .state('main.favirate',{
      url:'/favirate',
      views:{
        'tab-LiveStock':{
          templateUrl:'app/Favirate/Favirate.html',
          controller:'FavirateCtrl'
        }
  }
    })

    .state('main.livestock',{
      url:'/livestock',
      views:{
        'tab-LiveStock':{
          templateUrl:'app/LiveStock/LiveStock.html',
          controller:'LiveStockCtrl'
        }
      }
    })


  $urlRouterProvider.otherwise('/main/livestock')
})
