
		$(document).ready(function(){
		
			$('.menu_items ul li, .menu_items_bottom ul li').click(function(){
				
				checkClass = $('#page_holder').hasClass('open');
				if(checkClass ==false){
					$('#page_holder').toggleClass('open');
				}
				
				var page = '.page';
				hidePage(page);
				page = '.page_' + $(this).attr('data-page');
				setTimeout(loadPage(page), 6500);
				
			});
			
		});
		
		function hidePage(page){
			TweenMax.to(page + ' h1', 1.3, { top: '25%', opacity:0, display: 'none', ease:Linear.easeNone},1.5);
			TweenMax.to(page, 1.5, { y:'-70px', opacity:0, display: 'none', ease:Linear.easeNone},1.5);
		}
		
		function loadPage(page){
			TweenMax.to(page, 1.8, { y:'0px', opacity:1, display: 'inline', delay: 1, ease:Linear.easeNone});
			TweenMax.to(page + ' h1', 1.3, { top: '5%', opacity:1, display: 'inline', ease:Linear.easeNone},1.5);
		}
		
		
		document.documentElement.className = 'js';
		
		(function() {
			var segmenter = new Segmenter(document.querySelector('.segmenter'), {
					pieces: 4,
					positions: [
						{top: 0, left: 5, width: 400, height: 80},
						{top: 50, left: 25, width: 30, height: 30},
						{top: 5, left: 75, width: 40, height: 20},
						{top: 30, left: 45, width: 40, height: 20}
					],
					animation: {
						duration: 2000,
						easing: 'easeInOutCubic',
						delay: 0,
						opacity: 1,
						translateZ: 85,
						translateX: {min: -20, max: 20},
						translateY: {min: -20, max: 20}
					},
					parallax: true,
					parallaxMovement: {min: 5, max: 10},
					onReady: function() {
						
						segmenter.animate();
						
					}
				});
			
		})();
		