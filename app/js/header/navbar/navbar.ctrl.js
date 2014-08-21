angular.module('app')

.controller('NavbarCtrl', function($scope) {

  $scope.items = [
    {
      text: 'Sign In',
      title: 'Sign In',
      href: '#/templates/signin.html',
      state: 'root.signin'
    },
    {
      text: 'Sign Up',
      title: 'Sign Up',
      href: '#/templates/signup.html',
      state: 'root.signup'
    },
    {
      text: 'About',
      title: 'About',
      href: '#/html/partial-about.html',
      state: 'html/partial-about.html'
    }
  ];
});
