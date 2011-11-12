/* Copyright (C) 2011 by Donna Murphy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
jQuery plugin to continuously cycle through information by item. */
(function ($) {
    $.fn.infiniteScroll = function (options) {
	var scrollTimerID = null,
	    defaults = {
		direction: "up",
		duration: 10000
	    };
	    
	if (options) {
	    //Duration has to be at least one second since the animation itself takes 600ms.
	    if (defaults.duration < 1000) {
		defaults.duration = 1000;
	    }
	    
	    //Merge options with defaults.
	    $.extend(defaults, options);
	}
	    
	return this.each(function() {
	    var $obj = $(this);
	    
	    /* Private methods */
	    /* Scroll the content one item at a time. */
	    function scrollByItem() {
		var $page = $obj.find(".page"), $item, top = 0, height;

		//Content is larger than viewable area.
		if ($page.height() > $obj.height()) {
		    if (defaults.direction === "up") {
			$item = $obj.find(".item:first");
			
			if ($item) {			
			    top = $item.position().top + $item.outerHeight(true);
			    
			    //Clone the item and append it.
			    $page.append($item.clone());

			    //Scroll by using a negative top margin.
			    $page.animate({"margin-top": $page.position().top - parseInt($page.css("margin-top"), 10) - top + "px"}, "slow", function() {
				$page.css("margin-top", "0px");
				$item.remove();
				$obj.trigger("onScroll");
			    });
			}
		    }
		    else if (defaults.direction === "down") {
			$item = $obj.find(".item:last");
			    
			if ($item) {
			    height = $item.outerHeight(true);
			    
			    //Clone the item and prepend it. Adjust the top margin so that the cloned item is not yet visible.
			    $page.prepend($item.clone()).css("margin-top", -height + "px");		
			    
			    //Push it down.
			    $page.animate({"margin-top": "0px"}, "slow", function() {
				$item.remove();
				$obj.trigger("onScroll");
			    });
			}
		    }
		}
	    }
	    
	    /* Public methods */   
	    $.fn.infiniteScroll.start = function() {	
		scrollTimerID = setInterval(function() {
		    scrollByItem();
		}, defaults.duration);
	    };
		
	    $.fn.infiniteScroll.pause = function() {
		clearInterval(scrollTimerID);
	    };
	});
    };
})(jQuery);