$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})
// this array hold all of our boo facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

$("#textPink").on("click", function() {
	// change funText to pink.
	$("#funText").css("color", "pink"
	)
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


// when the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})