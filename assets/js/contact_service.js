'use strict';

angular
		.module('myApp')
		.factory(
				'ContactService',
				[
						'$http',
						'$q',
						function($http, $q) {

							var REST_SERVICE_URI = 'http://localhost:8080/jayshaanmusic/contact/'

							var factory = {
								contactUs : contactUs
							};

							return factory;

							function contactUs(contactDetails) {
								var deferred = $q.defer();
								$http
										.post(REST_SERVICE_URI, contactDetails)
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while sending contact Emails');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}

						} ]);