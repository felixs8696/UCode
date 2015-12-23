angular
  .module('ucode')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'app/menu/menu.html',
      controller: 'MenuController as vm'
    })

    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'app/main/main.html',
          controller: 'MainController as vm'
        }
      }
    })

    .state('app.primary', {
      url: '/primary-contact-settings',
      views: {
        'menuContent': {
          templateUrl: 'app/primary/primary.html',
          controller: 'PrimaryController as vm'
        }
      }
    })

    .state('app.primary.edit-primary', {
      url: '/primary-contact-settings/edit',
      templateUrl: 'app/primary/edit-primary.html',
      controller: 'PrimaryController as vm'
    })

    .state('app.professional', {
        url: '/professional-contact-settings',
        views: {
          'menuContent': {
            templateUrl: 'app/professional/professional.html',
            controller: 'ProfessionalController as vm'
          }
        }
      })

    .state('app.social', {
        url: '/social',
        views: {
          'menuContent': {
            templateUrl: 'app/social/social.html',
            controller: 'SocialController as vm'
          }
        }
      })

    .state('app.playlist', {
        url: '/playlist',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
  });
