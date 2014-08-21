angular.module('app', [
  'ui.router',
  'app.signin'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      url: '',
      views: {
        'header': {
          templateUrl: 'templates/layout/header.html'
        },
        'footer': {
          templateUrl: 'templates/layout/footer.html'
        }
      },
      data:{ pageTitle: 'Home' }
    })
    .state('root.signin', {
      url: '/signin',
      views: {
        'main@' : {
          templateUrl: 'templates/signin/signin.html',
          controller: 'SignInCtrl'
        }
      },
      data:{ pageTitle: 'Sign In' }
    })
    .state('root.signup', {
      url: '/signup',
      views: {
        'main@' : {
          templateUrl: 'templates/signup/signup.html',
          controller: 'SignInCtrl'
        }
      },
      data:{ pageTitle: 'Sign In' }
    })
  ;
})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | AngularJS Boilerplate';
    }
  });
})

;
