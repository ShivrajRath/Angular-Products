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
* Angular Service exposes model (on rootscope) and model CRUD operators. This is like collection in Backbone.
* Remove the need for controllers, if views are directly referring to models on rootscope
* Local storage events to update views across tabs/windows

### References
* Service as angular model: http://joelhooks.com/blog/2013/04/24/modeling-data-and-state-in-your-angularjs-application/
* Providers: https://docs.angularjs.org/guide/providers
* Improved angular module: http://www.hiddentao.com/archives/2013/11/04/an-improved-angular-module-split-your-modules-into-multiple-files/
* Angular JS scope and apply: http://jimhoskins.com/2012/12/17/angularjs-and-apply.html

### To Read
* Creating services- https://docs.angularjs.org/guide/services
* Dependency Injection- https://docs.angularjs.org/guide/di
* UI Router: https://github.com/angular-ui/ui-router
* Resouce: https://docs.angularjs.org/api/ngResource/service/$resource
* Provider: https://docs.angularjs.org/guide/providers
* Root Scope: https://docs.angularjs.org/api/ng/type/$rootScope.Scope
* Angular and Require JS: https://www.youtube.com/watch?v=4yulGISBF8w#t=113
	We can use AMD loader for lodash, jquery too
* Angular $apply, $digest

### To Think/Do
* How to avoid long list of js inclusion on index.html page. Can js come with their views.
* http://amitavroy.com/justread/content/articles/html5-local-storage-angular-js
* Closure around all JS
* Caching of 
	- Desktop & mobile views
* Why Sorting not working
* Custom directives, filters
* Require.JS to avoid long list of JS inclusion
* Default values in model
* Change plan on plan details, it should refect in plan grid

## Functionality
* Compare functionality
* Add plans to cart
* Remove from cart details page
* Put 40 phone + 3 plans

### Expectations
* Mobile friendly
* Complete Unit test cases
* Offline

### Angular Docs
* Developer Guide - https://docs.angularjs.org/guide
* API - https://docs.angularjs.org/api