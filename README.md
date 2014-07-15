### AIM
* Angular folder structure
* Angular features covered
	- Models
	- Controllers
	- Views
	- Two way binding
* End to end testing
* Jasmine unit testing
* Detailed comments

### Covered Usecases
* Multiple views in a single page
* Clear Separation of concern
* Module handling
* Multiple controllers refering same model
* To keep same model reference from the service to controllers.
* Condional loading of partials. If mobile one and on desktop other.
* Service should hold the model CRUD functions

### References
* Service as angular model: http://joelhooks.com/blog/2013/04/24/modeling-data-and-state-in-your-angularjs-application/
* Providers: https://docs.angularjs.org/guide/providers
* Improved angular module: http://www.hiddentao.com/archives/2013/11/04/an-improved-angular-module-split-your-modules-into-multiple-files/

### To Read
* Creating services- https://docs.angularjs.org/guide/services
* Dependency Injection- https://docs.angularjs.org/guide/di
* UI Router: https://github.com/angular-ui/ui-router
* Resouce: https://docs.angularjs.org/api/ngResource/service/$resource
* Provider: https://docs.angularjs.org/guide/providers
* Root Scope: https://docs.angularjs.org/api/ng/type/$rootScope.Scope
* Angular and Require JS: https://www.youtube.com/watch?v=4yulGISBF8w#t=113
	We can use AMD loader for lodash, jquery too

### To Think/Do
* How to avoid long list of js inclusion on index.html page. Can js come with their views.
* http://amitavroy.com/justread/content/articles/html5-local-storage-angular-js
* Closure around all JS
* Caching of 
	- Desktop & mobile views
* Why Sorting not working
* Remove the need for controllers, if views are directly referring to models on rootscope
* Local storage events too
* Custom directives, filters
* Require.JS to avoid long list of JS inclusion
* Compare functionality

### Use case
* Put 40 phone + 3 plans

### Expectations
* Mobile friendly
* Complete Unit test cases
* Offline

### Angular Docs
* Developer Guide - https://docs.angularjs.org/guide
* API - https://docs.angularjs.org/api