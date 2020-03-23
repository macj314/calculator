var cap;
var sentence = prompt("Please enter a sentence");	
function capture(string) {
	// alert(sentence);
	cap = sentence.charAt(0);
	cap += sentence.charAt(sentence.length-1);
	cap = cap.toUpperCase();
	// alert(cap);
	return cap;
}

function reverse(string){
	var reverse = cap.charAt(1) + cap.charAt(0)
	// alert(reverse);
	return reverse
}

function combine(capture, reverse){
	var result = capture();
	result = reverse(result);
	result = sentence + result
	// alert(result);
	return result;
}

function count(outputSentence) {
  var index = sentence.length - 1;
  index /= 2;
  var letter = sentence.charAt(index);
  var output = letter + outputSentence;
  // alert(output);

  var reverseOutput = output.split("");
	reverseOutput = reverseOutput.reverse();
	reverseOutput = reverseOutput.join("");
  // alert(reverseOutput);
}

var outputSentence = combine(capture, reverse);
count(outputSentence);


$(".show-original").click(function() {
  $(".original").hide();
});