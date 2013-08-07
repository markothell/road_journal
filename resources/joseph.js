/**
 * @author Mark Othell
 */

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function removeEvent(object, evName, fnName, cap) {
	if (object.detachEvent)
		object.detachEvent("on" + evName, fnName);
	else if (object.removeEventListener)
		object.removeEventListener(evName, fnName, cap);
}

addEvent(window, "load", init, false);

function init() {
	var post = document.getElementsByClassName("postBox");
	for (i = 0; i < post.length; i++) {
		var anchor = post[i].getElementsByTagName('a');
		addEvent(anchor[0], "mouseover", roll, false);
		addEvent(anchor[0], "mouseout", rollOut, false);
	}
}

function roll(e) {console.log('rollLog');
	var targetBox = e.target || event.srcElement;
	var shade = targetBox.parentNode.getElementById("titleOverlay");
	console.log("hello");
	//shade.style.zIndex = 0;
	shade.style.opacity = .9;
	  
	//targetBox.parentNode.style.zIndex = 15;
}

function rollOut(e) {console.log('rollOutLog');
	var targetBox = e.target || event.srcElement;
	//var shade = targetBox.parentNode.getElementById("titleOverlay");
	console.log(targetBox.nextSibling.nodeName);
	//shade.style.zIndex = -10;
	shade.style.opacity = .75;
	//targetBox.parentNode.style.zIndex = 0;
}