'use strict';

angular.module('app.controllers', []).controller('DashCtrl', function ($scope, Post) {

  Post.query(function (data) {
    $scope.query(function (data) {
      $scope.posts = data;
    });
  });

  $scope.clientSideList = [{ text: "Backbone", value: "bb" }, { text: "Angular", value: "ng" }, { text: "Ember", value: "em" }, { text: "Knockout", value: "ko" }];

  $scope.serverSideList = [{ text: "Go", value: "go" }, { text: "Python", value: "py" }, { text: "Ruby", value: "rb" }, { text: "Java", value: "jv" }];

  $scope.data = {
    clientSide: 'ng'
  };

  $scope.serverSideChange = function (item) {
    console.log("Selected Serverside, text:", item.text, "value:", item.value);
  };
}).controller('ChatsCtrl', function ($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  };
}).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}).controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
"use strict";

angular.module('app.services', ['ngResource']).factory('Post', function ($resource) {
  return $resource('/api/posts/:id');
}).factory('Chats', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function all() {
      return chats;
    },
    remove: function remove(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function get(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
"use strict";
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('Users', Users);

  Users.$inject = ['$resource', 'SERVER_URL'];

  function Users($resource, SERVER_URL) {
    var url = SERVER_URL + '/rest/api/:uri/:uri2';

    var params = { uri: '@uri' };

    var actions = {
      register: {
        method: 'POST',
        params: {
          uri: 'register'

        }
      },
      login: {
        method: 'POST',
        params: {
          uri: 'login',
          uri2: 'auth'
        }
      }
    };

    var Service = $resource(url, params, actions);

    console.log(url);
    console.log(params);
    console.log(actions);

    return Service;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').constant('SERVER_URL', 'http://localhost:3000').constant('APP_NAME', 'myApp');
})();
'use strict';

/* global angular */
(function (angular) {
  'use strict';

  angular.module('app').factory('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['AppStorage'];

  function AuthInterceptor(AppStorage) {

    function request(req) {
      var token = AppStorage.token;
      if (token) {
        req.headers.Authorization = 'Bearer ' + token;
      }

      return req;
    }

    var interceptor = {
      request: request
    };

    return interceptor;
  }
})(angular);
'use strict';

/* global angular */
(function (angular) {
  'use strict';

  angular.module('app').factory('AppStorage', AppStorage);

  AppStorage.$inject = ['$localStorage', 'APP_NAME'];

  function AppStorage($localStorage, APP_NAME) {

    if (!$localStorage[APP_NAME]) {
      $localStorage[APP_NAME] = {};
    }

    return $localStorage[APP_NAME];
  }
})(angular);
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('FaqDetailController', FaqDetailController);

  FaqDetailController.$inject = ['FaqDetailModel', '$stateParams'];

  function FaqDetailController(FaqDetailModel, $stateParams) {
    console.log($stateParams);
    var vm = this;
    vm.Model = FaqDetailModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('FaqDetailModel', FaqDetailModel);

  FaqDetailModel.$inject = [];

  function FaqDetailModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('FaqListController', FaqListController);

  FaqListController.$inject = ['FaqListModel'];

  function FaqListController(FaqListModel) {
    var vm = this;
    vm.Model = FaqListModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('FaqListModel', FaqListModel);

  FaqListModel.$inject = [];

  function FaqListModel() {

    var model = {
      items: [{ index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index last" }]
    };

    return model;
  }
})();
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('HelpdeskListController', HelpdeskListController);

  HelpdeskListController.$inject = ['HelpdeskListModel'];

  function HelpdeskListController(HelpdeskListModel) {
    var vm = this;
    vm.Model = HelpdeskListModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('HelpdeskListModel', HelpdeskListModel);

  HelpdeskListModel.$inject = [];

  function HelpdeskListModel() {

    var model = {
      items: [{ index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index10" }, { index: "index20" }, { index: "index30" }, { index: "index40" }, { index: "index50" }, { index: "index60" }, { index: "index70" }, { index: "index last" }]
    };

    return model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('HelpdeskModController', HelpdeskModController);

  HelpdeskModController.$inject = ['HelpdeskModModel'];

  function HelpdeskModController(HelpdeskModModel) {
    var vm = this;
    vm.Model = HelpdeskModModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('HelpdeskModModel', HelpdeskModModel);

  HelpdeskModModel.$inject = [];

  function HelpdeskModModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();
"use strict";
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('LoginController', LoginController);

  LoginController.$inject = ['$ionicPopup', '$state', 'LoginModel', 'Users', 'AppStorage'];

  function LoginController($ionicPopup, $state, LoginModel, Users, AppStorage) {
    var vm = this;
    vm.Model = LoginModel;
    vm.login = login;

    //==========================
    // implements functions
    //==========================

    function login() {

      Users.login({}, vm.Model.user).$promise.then(function (userWrapper) {

        console.log(userWrapper);

        AppStorage.user = userWrapper.user;
        AppStorage.token = userWrapper.token;

        return $ionicPopup.alert({
          title: '성공',
          template: '성공'
        });
      }).then(function () {
        $state.go('main.faqList');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var model = {
      user: {
        email: '',
        passwd: ''
      }
    };

    return model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('SignupController', SignupController);

  SignupController.$inject = ['SignupModel'];

  function SignupController(SignupModel) {
    var vm = this;
    vm.Model = SignupModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('SignupModel', SignupModel);

  SignupModel.$inject = [];

  function SignupModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();