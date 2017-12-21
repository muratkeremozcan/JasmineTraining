import vdog = dogsrus.virtdog;


describe('In the file masterController.ts', () => {
    // tslint:disable-next-line:no-empty
    describe('the masterController\'s ', () => {
        let sut: vdog.MasterController,        // using alias from import
                $rootScope: ng.IRootScopeService, // need constructor variable
                $controller: ng.IControllerService, // need controller service from angular to get an instance of the controller
                masterControllerParams: {        // to pass in the parameters to the controller service
                   $rootScope: ng.IRootScopeService;        // adding slot for the constructor parameter
                   eventNames: vdog.EventNames              // adding slot for the constructor parameter
                };
        beforeEach( () => { // preparing variables and objects for the tests
                angular.mock.module('app.people');  // need to bring in mocking for our angular module
                inject(($injector: ng.auto.IInjectorService) => { // need to set references to the angular services (using inject)
                        $controller = $injector.get<ng.IControllerService>('$controller');  // controller service to instantiate controller
                        $rootScope = $injector.get<ng.IRootScopeService>('$rootScope'); // controller service to instantiate controller
                        masterControllerParams = {
                                $rootScope: $rootScope,            // setting up master controller parameters
                                eventNames: vdog.eventNames        // using the configuration variable from our namespace
                        };
                });
                sut = $controller<vdog.MasterController>('masterController', masterControllerParams); // instantiating the sut,our cntrler
        });                                             // provide the name of the controller and pas in the parameters for construction
        // tslint:disable-next-line:no-empty
        describe('constructor', () => {
                it('shoud set familiarName to Dillon', () => {
                        expect(sut.familiarName).toEqual('Dillon');
                });
                it('should set speciesName to Homo Sapiens', () => {
                        expect(sut.speciesName).toEqual('Homo Sapiens');
                });
                it('should add 2 items to masterActions', () => {
                        expect(sut.masterActions.length).toEqual(2); // making sure we have 2 items
                });
                it('should set first item actionName in masterActions to \'Throw Object\' ', () => {
                        expect(sut.masterActions[0].actionName).toEqual('Throw Object'); // checking the first item
                });
                it ('should set first item actionFunc in masterActions', () => { // make sure the action function is being set
                        expect(sut.masterActions[0].actionFunc).toBeDefined('actionFunct not defined for Throw Object');
                        expect(sut.masterActions[0].actionFunc).not.toBeNull('action is null for Throw Object');
                });
                it('should set second item actionName in masterActions to \'Feed\' ', () => {
                        expect(sut.masterActions[1].actionName).toEqual('Feed');  // checking the second item
                });
                it ('should set second item actionFunc in masterActions, ', () => { // make sure the action function is being set
                        expect(sut.masterActions[1].actionFunc).toBeDefined('actionFunct not defined for Feed');
                        expect(sut.masterActions[1].actionFunc).not.toBeNull('action is null for Feed');
                });
                it ('should add 6 items to masterObjects', () => {
                        expect(sut.masterObjects.length).toEqual(6); // making sure we have 6 items
                });
                it ('should set masterObject item 1 name to \'Babe Ruth autographed baseball\' ', () => {
                        expect(sut.masterObjects[0].name).toEqual('Babe Ruth autographed baseball'); // testing for the object name
                });
                it ('should set masterObject item 2 name to \'ball\' ', () => {
                        expect(sut.masterObjects[1].name).toEqual('ball'); // testing for the object name
                });
                it ('should set masterObject item 3 name to \'Frisbee\' ', () => {
                        expect(sut.masterObjects[2].name).toEqual('Frisbee'); // testing for the object name
                });
                it ('should set masterObject item 4 name to \'stick\' ', () => {
                        expect(sut.masterObjects[3].name).toEqual('stick'); // testing for the object name
                });
                it ('should set masterObject item 5 name to \'dog food\' ', () => {
                        expect(sut.masterObjects[4].name).toEqual('dog food'); // testing for the object name
                });
                it ('should set masterObject item 6 name to \'table scraps\'  ', () => {
                        expect(sut.masterObjects[5].name).toEqual('table scraps'); // testing for the object name
                });
        });
        // tslint:disable-next-line:no-empty
        describe('throwSomething method', () => {
                it('should broadcast the throw event name', () => {
                        pending('finish in mocking module'); // placeholder telling us that there is a test to run here later
                });
        });
        // tslint:disable-next-line:no-empty
        describe('feedTheDog method', () => {
                it('should broadcast the feed event name', () => {
                        pending('finish in mocking module'); // placeholder telling us that there is a test to run here later
                });
        });
      });
      // tslint:disable-next-line:no-empty
    describe('the MasterAction\'s constructor', () => {
        let sut: vdog.MasterAction,        // need sut for master action
        // tslint:disable-next-line:no-empty
        actionFunc = (o: vdog.DogObject) => {};  // need an action function to instantiate the master action
        beforeEach( () => {
                // tslint:disable-next-line:max-line-length
                sut = new vdog.MasterAction('masterActionName', actionFunc);  // instantiate the sut, passing in name and actionFunction
        });
                it ('should set actionName to passed in name', () => {
                        expect(sut.actionName).toEqual('masterActionName');
                });
                it ('should set the actionFunc to passed in function', () => {
                        expect(sut.actionFunc).toBe(actionFunc, 'actionFunc should match passed in action function');
                });
       });

});
