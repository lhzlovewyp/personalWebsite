function addTrackerToEvent(a,b){var c="tk";if(b){c=b}if(a instanceof jQuery){a.find("a["+c+"]").click(function(){var e=$(this),d=e.attr(c);if(d){addTrackPositionToCookie("1",d)}})}else{$(a+" a["+c+"]").each(function(d){var e=this;$(e).click(function(){addTrackPositionToCookie("1",$(e).attr(c))})})}};