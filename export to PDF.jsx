#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.textSize(64);
	var tf = b.text("this content will be overwritten", b.width/2-250, b.height/2-150, 500, 300);

	for ( var i = 0; i < 20; i++) {
		tf.contents = "hello pdf " + i; // tf.contents overwrites the contents of object tf

	};

	// show export options
	b.savePDF("hello.pdf", false);
};

b.go();
