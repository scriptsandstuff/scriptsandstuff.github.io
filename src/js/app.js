// console.log( "loaded" );
window.$ = window.jQuery = require('jquery');

require("jquery-ui/ui/widgets/accordion");
// require("expose?$!jquery");

$( function() {
	$( "#pf-accordion" ).accordion(
		{
			active: false,
			collapsible: true,
			heightStyle: "content"
		}
		);
} );


// (function($){
// 	$(document).scroll(function() {
// 		myScrollyFunc();
// 	});
//  })(jQuery); 

// $(document).ready(function () {
// 	myScrollyFunc();
// });

/**
 * Plan to get user to scroll to the bottom
 * have a counter...once they get to the bottom there is no way back up
 * if they scroll up then change image to bird hopping over
 * scroll all the way to the end then easter egg video (yum)
 * 
 * 
 */
function myScrollyFunc() {
	  // $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
	  // console.log("scrolled");
}

/**
 * we want pf items to open in new window cause we don't want them to have to find the pf page again
 */
function openPFWin(str1, str2) {
	// Set height and width
	var NewWinHeight=200;
	var NewWinWidth=200;

	// Place the window
	var NewWinPutX=10;
	var NewWinPutY=10;


	TheNewWin = 
		window.open(str1+".html",
			''+str2,
			'fullscreen=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes');

	//Get what is above onto one line

	TheNewWin.resizeTo(NewWinHeight,NewWinWidth);
	TheNewWin.moveTo(NewWinPutX,NewWinPutY);
}