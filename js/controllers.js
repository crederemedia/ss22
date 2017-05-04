angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $ionicScrollDelegate, Chats) {
    
    $scope.sttButton=false;
    $scope.scrollToTop = function() {
        $ionicScrollDelegate.scrollTop();
        $scope.sttButton=false;
    };
    
    $scope.getScrollPosition = function() {
        var moveData = $ionicScrollDelegate.getScrollPosition().top;
        
        if(moveData>150){
            $scope.$apply(function(){
                $scope.sttButton=true;
            });
        }else{
            $scope.$apply(function(){
                $scope.sttButton=false;
            });
        }
            };
        
    
    
 $scope.model = {
     // selectedstyle: undefined,
      //selectedlevel: undefined,
      //.selectedhandle: undefined,
     // filterObject: {style:"", level:"", handle:""},
      //newDetails: undefined,
      options: {
        styles: [ "blunt", "point", "slice", "barbering", "thinning"],
        levels: [ "student", "junior", "stylist", "senior", "premium"],
        handles: ["straight", "offset", "crane", "left"]
          
        
      }};
    
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, Favourites) {
  $scope.chat = Chats.get($stateParams.chatId);
  
        
        if (Favourites.get($scope.chat.chat_id)) {
            $scope.chat.addedToFavourites = true;
        }
        
        $scope.addFavourite = function () {
            Favourites.add($scope.chat);
        };
        
        $scope.removeFavourite = function () {
            Favourites.remove($scope.chat);
        };
    
    $scope.sharePost = function () {

            var options = {
  message: 'I love these scissors $scope.chat.title', // not supported on some apps (Facebook, Instagram)
  subject: 'Look at these scissors from Rand Rocket', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.randrocket.co',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
}

var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
}

var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
}

window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        };



})

.controller('AccountDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
    
 
})

.controller('EmailCtrl', function($scope) {
    $scope.sendEmail = function() {
     
    cordova.plugins.email.open({
    to:      'info@randrocket.co',
    subject: 'Hello',
    body:    'Hi Rand Rocket, I am using your app...'
});
        };
})

    .controller('FavouritesCtrl', function ($scope, Favourites) {
        
        $scope.favourites = Favourites.get();
        
        $scope.removeFavourite = function (chat) {
            Favourites.remove(chat);
        };
        
    })


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});