(function(){var f={};var d=[];f.send=function(a){d.push(a);f.run()};f.run=function(j){if(j==null){j=30}var c=d.length;if(c>=j){var a=[];for(var i=0;i<j;i++){var b=d.shift();if(b){a.push(b)}}batchRecordTrackerInfo(a)}};setTimeout(function(){setInterval(function(){e()},500)},10000);$(window).unload(function(){e()});function e(){var h=d.length;var b=[];for(var a=0;a<h;a++){var c=d.shift();if(c){b.push(c)}}batchRecordTrackerInfo(b)}window.loli=window.loli||{};window.loli.extTrackerSend=f})();