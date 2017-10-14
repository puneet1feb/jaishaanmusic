'use strict';

angular.module('myApp').controller(
		'ContactController',
		[
				'$scope',
				'ContactService',
				function($scope, ContactService) {
					var self = this;
					self.contactDetails = {
						name : '',
						inquiryType : '',
						inquiry : '',
						email : ''
					};

					self.submit = submit;
					self.reset = reset;

					function contactUs(contactDetails) {
						ContactService.contactUs(contactDetails).then(
								console.log('Inquiry sent '),
								function(errResponse) {
									console.error('Error while creating User');
								});
					}

					function submit() {
						console.log('Submitting new inquiry',
								self.contactDetails);
						contactUs(self.contactDetails);
					}

					function reset() {
						self.contactDetails = {
							name : '',
							inquiryType : '',
							inquiry : '',
							email : ''
						};
						$scope.myForm.$setPristine(); // reset Form
					}

				} ]);