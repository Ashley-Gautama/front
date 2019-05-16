angular.module('demo')
.directive('resize', function ($timeout) {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs, controller) {
			
			
			
			
			
			console.log("resizing.............")
			angular.element(document).ready(function () {
				$(window).resize();
				$timeout(function() {
					
					
					
					if (($(elem).height()  + $('#main_navbar').height()) < $(window).height()) {
						console.log('true');
						$(elem).css('height', ($(window).height() - $('#main_navbar').height()) + 'px');
					}})
				});
		}
	};
});
