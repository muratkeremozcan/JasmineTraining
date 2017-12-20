import vdog = dogsrus.virtdog;

describe('In the file masterController.ts', () => {
    // tslint:disable-next-line:no-empty
    describe('the masterController\'s ', () => {
        let sut: vdog.MasterController,
                $rootScope: ng.IRootScopeService,
                $controller: ng.IControllerService,
                masterControllerParams: {
                   $rootScope: ng.IRootScopeService;
                   eventNames: vdog.EventNames
                };
        beforeEach( () => {
                angular.mock.module('app.people');
                inject(($injector: ng.auto.IInjectorService) => {
                        $controller = $injector.get<ng.IControllerService>('$controller');
                        $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
                        masterControllerParams = {
                                $rootScope: $rootScope,
                                eventNames: vdog.eventNames
                        };
                });
                sut = $controller<vdog.MasterController>('masterController', masterControllerParams);
        });
        // tslint:disable-next-line:no-empty
        describe('constructor', () => {

        });
        // tslint:disable-next-line:no-empty
        describe('throwSomething method', () => {

        });
        // tslint:disable-next-line:no-empty
        describe('feedTheDog method', () => {

        });
      });
      // tslint:disable-next-line:no-empty
      describe('the MasterAction object\'s constructor', () => {

      });

});
