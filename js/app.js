// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function($ionicConfigProvider)   {
    if (ionic.Platform.isAndroid())
       $ionicConfigProvider.scrolling.jsScrolling(true);
     })
    



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'ChatsCtrl'
      }
    }
  })
    .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
          controller:'EmailCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.favourites', {
    url: '/favourites',
     views: {
        'tab-favourites': {
        templateUrl: 'templates/tab-favourites.html',
        controller: 'FavouritesCtrl'
      
    }}
  })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
      .state('tab.account-detail', {
      url: '/account/:chatId',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-detail.html',
          controller: 'AccountDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html'
      }
    }
  })
    
    .state('tab.student', {
        url:'/account/student',
        views: {
            'tab-account': {
                templateUrl: 'templates/student.html'
            }
        }
    })
    
        .state('tab.stubarb', {
        url:'/account/student/barbering',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubarb.html'
            }
        }
    })
  
          .state('tab.stuthin', {
        url:'/account/student/thinning',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuthin.html'
            }
        }
    })
          .state('tab.stublunt', {
        url:'/account/student/blunt',
        views: {
            'tab-account': {
                templateUrl: 'templates/stublunt.html'
            }
        }
    })
  
          .state('tab.stupoint', {
        url:'/account/student/point',
        views: {
            'tab-account': {
                templateUrl: 'templates/stupoint.html'
            }
        }
    })
  
          .state('tab.stuslice', {
        url:'/account/student/slice',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuslice.html'
            }
        }
    })

      .state('tab.junior', {
        url:'/account/junior',
        views: {
            'tab-account': {
                templateUrl: 'templates/junior.html'
            }
        }
    })
    
        .state('tab.junbarb', {
        url:'/account/junior/barbering',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbarb.html'
            }
        }
    })
  
          .state('tab.junthin', {
        url:'/account/junior/thinning',
        views: {
            'tab-account': {
                templateUrl: 'templates/junthin.html'
            }
        }
    })
          .state('tab.junblunt', {
        url:'/account/junior/blunt',
        views: {
            'tab-account': {
                templateUrl: 'templates/junblunt.html'
            }
        }
    })
  
          .state('tab.junpoint', {
        url:'/account/junior/point',
        views: {
            'tab-account': {
                templateUrl: 'templates/junpoint.html'
            }
        }
    })
  
          .state('tab.junslice', {
        url:'/account/junior/slice',
        views: {
            'tab-account': {
                templateUrl: 'templates/junslice.html'
            }
        }
    })
  
       .state('tab.stylist', {
        url:'/account/stylist',
        views: {
            'tab-account': {
                templateUrl: 'templates/stylist.html'
            }
        }
    })
    
        .state('tab.stybarb', {
        url:'/account/stylist/barbering',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybarb.html'
            }
        }
    })
  
          .state('tab.stythin', {
        url:'/account/stylist/thinning',
        views: {
            'tab-account': {
                templateUrl: 'templates/stythin.html'
            }
        }
    })
          .state('tab.styblunt', {
        url:'/account/stylist/blunt',
        views: {
            'tab-account': {
                templateUrl: 'templates/styblunt.html'
            }
        }
    })
  
          .state('tab.stypoint', {
        url:'/account/stylist/point',
        views: {
            'tab-account': {
                templateUrl: 'templates/stypoint.html'
            }
        }
    })
  
          .state('tab.styslice', {
        url:'/account/stylist/slice',
        views: {
            'tab-account': {
                templateUrl: 'templates/styslice.html'
            }
        }
    })
  
   .state('tab.senior', {
        url:'/account/senior',
        views: {
            'tab-account': {
                templateUrl: 'templates/senior.html'
            }
        }
    })
    
        .state('tab.senbarb', {
        url:'/account/senior/barbering',
        views: {
            'tab-account': {
                templateUrl: 'templates/senbarb.html'
            }
        }
    })
  
          .state('tab.senthin', {
        url:'/account/senior/thinning',
        views: {
            'tab-account': {
                templateUrl: 'templates/senthin.html'
            }
        }
    })
       
          .state('tab.senpoint', {
        url:'/account/senior/point',
        views: {
            'tab-account': {
                templateUrl: 'templates/senpoint.html'
            }
        }
    })
  
          .state('tab.senslice', {
        url:'/account/senior/slice',
        views: {
            'tab-account': {
                templateUrl: 'templates/senslice.html'
            }
        }
    })
  
  
  
   .state('tab.premium', {
        url:'/account/premium',
        views: {
            'tab-account': {
                templateUrl: 'templates/premium.html'
            }
        }
    })
    
        .state('tab.prembarb', {
        url:'/account/premium/barbering',
        views: {
            'tab-account': {
                templateUrl: 'templates/prembarb.html'
            }
        }
    })
  
          .state('tab.premthin', {
        url:'/account/premium/thinning',
        views: {
            'tab-account': {
                templateUrl: 'templates/premthin.html'
            }
        }
    })
       
          .state('tab.prempoint', {
        url:'/account/premium/point',
        views: {
            'tab-account': {
                templateUrl: 'templates/prempoint.html'
            }
        }
    })
  
        .state('tab.premslice', {
        url:'/account/premium/slice',
        views: {
            'tab-account': {
                templateUrl: 'templates/premslice.html'
            }
        }
    })
  
    .state('tab.stubluntstraight', {
        url:'/account/student/blunt/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubluntstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
      .state('tab.stubluntoff', {
        url:'/account/student/blunt/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubluntoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.stubluntleft', {
        url:'/account/student/blunt/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubluntleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
   .state('tab.stupointcrane', {
        url:'/account/student/point/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/stupointcrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
     .state('tab.stuslicestraight', {
        url:'/account/student/slice/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuslicestraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.stusliceoff', {
        url:'/account/student/slice/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stusliceoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
  .state('tab.stuslicecrane', {
        url:'/account/student/slice/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuslicecrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  .state('tab.stubarbstraight', {
        url:'/account/student/barb/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubarbstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.stubarboff', {
        url:'/account/student/barb/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubarboff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stubarbleft', {
        url:'/account/student/barb/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stubarbleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.stuthinstraight', {
        url:'/account/student/thin/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuthinstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stuthinoff', {
        url:'/account/student/thin/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuthinoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
     .state('tab.stuthincrane', {
        url:'/account/student/thin/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuthincrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stuthinleft', {
        url:'/account/student/thin/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stuthinleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
     .state('tab.junbluntstraight', {
        url:'/account/junior/blunt/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbluntstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
      .state('tab.junbluntoff', {
        url:'/account/junior/blunt/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbluntoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.junbluntleft', {
        url:'/account/junior/blunt/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbluntleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
     .state('tab.junpointoff', {
        url:'/account/junior/point/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/junpointoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   .state('tab.junpointcrane', {
        url:'/account/junior/point/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/junpointcrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
     .state('tab.junslicestraight', {
        url:'/account/junior/slice/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/junslicestraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.junsliceoff', {
        url:'/account/junior/slice/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/junsliceoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
  .state('tab.junslicecrane', {
        url:'/account/junior/slice/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/junslicecrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.junsliceleft', {
        url:'/account/junior/slice/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/junsliceleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  .state('tab.junbarbstraight', {
        url:'/account/junior/barb/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbarbstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.junbarboff', {
        url:'/account/junior/barb/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbarboff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.junbarbleft', {
        url:'/account/junior/barb/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/junbarbleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.junthinstraight', {
        url:'/account/junior/thin/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/junthinstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.junthinoff', {
        url:'/account/junior/thin/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/junthinoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
     .state('tab.junthincrane', {
        url:'/account/junior/thin/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/junthincrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.junthinleft', {
        url:'/account/junior/thin/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/junthinleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
      .state('tab.stybluntstraight', {
        url:'/account/stylist/blunt/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybluntstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.stybluntleft', {
        url:'/account/stylist/blunt/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybluntleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
     .state('tab.stypointoff', {
        url:'/account/stylist/point/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stypointoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   
  
     .state('tab.styslicestraight', {
        url:'/account/stylist/slice/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/styslicestraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.stysliceoff', {
        url:'/account/stylist/slice/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stysliceoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
  .state('tab.styslicecrane', {
        url:'/account/stylist/slice/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/styslicecrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.stysliceleft', {
        url:'/account/stylist/slice/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stysliceleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  .state('tab.stybarbstraight', {
        url:'/account/stylist/barb/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybarbstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.stybarboff', {
        url:'/account/stylist/barb/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybarboff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stybarbleft', {
        url:'/account/stylist/barb/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stybarbleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    .state('tab.stythinstraight', {
        url:'/account/stylist/thin/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/stythinstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stythinoff', {
        url:'/account/stylist/thin/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/stythinoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
     .state('tab.stythincrane', {
        url:'/account/stylist/thin/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/stythincrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.stythinleft', {
        url:'/account/stylist/thin/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/stythinleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.senpointcrane', {
        url:'/account/senior/point/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/senpointcrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   
  
     .state('tab.senslicestraight', {
        url:'/account/senior/slice/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/senslicestraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.sensliceoff', {
        url:'/account/senior/slice/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/sensliceoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
  .state('tab.senslicecrane', {
        url:'/account/senior/slice/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/senslicecrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.sensliceleft', {
        url:'/account/senior/slice/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/sensliceleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  .state('tab.senbarbstraight', {
        url:'/account/senior/barb/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/senbarbstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   
    .state('tab.senthinstraight', {
        url:'/account/senior/thin/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/senthinstraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.senthinoff', {
        url:'/account/senior/thin/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/senthinoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    
       .state('tab.prempointcrane', {
        url:'/account/premium/point/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/prempointcrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   
  
     .state('tab.premslicestraight', {
        url:'/account/premium/slice/straight',
        views: {
            'tab-account': {
                templateUrl: 'templates/premslicestraight.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
       .state('tab.premsliceoff', {
        url:'/account/premium/slice/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/premsliceoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
  .state('tab.premslicecrane', {
        url:'/account/premium/slice/crane',
        views: {
            'tab-account': {
                templateUrl: 'templates/premslicecrane.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  
    .state('tab.premsliceleft', {
        url:'/account/premium/slice/left',
        views: {
            'tab-account': {
                templateUrl: 'templates/premsliceleft.html',
                controller: 'ChatsCtrl'
            }
        }
    })
  .state('tab.prembarboff', {
        url:'/account/premium/barb/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/prembarboff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
   
      .state('tab.premthinoff', {
        url:'/account/premium/thin/off',
        views: {
            'tab-account': {
                templateUrl: 'templates/premthinoff.html',
                controller: 'ChatsCtrl'
            }
        }
    })
    
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');





});
