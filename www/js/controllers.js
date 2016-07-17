angular.module('app.controllers', [])

.controller('DashCtrl', function($scope, Post) {

  Post.query(function(data) {
    $scope.query(function(data) {
      $scope.posts = data;
    });
  });

  $scope.clientSideList = [
    { text: "Backbone", value: "bb" },
    { text: "Angular", value: "ng" },
    { text: "Ember", value: "em" },
    { text: "Knockout", value: "ko" }
  ];

  $scope.serverSideList = [
    { text: "Go", value: "go" },
    { text: "Python", value: "py" },
    { text: "Ruby", value: "rb" },
    { text: "Java", value: "jv" }
  ];
  
  $scope.data = {
    clientSide: 'ng'
  };
  
  $scope.serverSideChange = function(item) {
    console.log("Selected Serverside, text:", item.text, "value:", item.value);
  };

})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


