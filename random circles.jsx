#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
	b.canvasMode(b.MARGIN);
	var count = 23;

	for (var i = 0; i < 23; i++) {
		var x = b.random(0, b.width);
		var y = b.random(0, b.height);
		var size = b.random(10, 123);
		b.ellipse(x, y, size, size);
	}
}

b.go();