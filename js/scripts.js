$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const storyClasses = [".person1", ".person2", ".animal", ".exclamation", ".adverb", ".verb", ".adj", ".noun"]
    let inputs = [];
    inputs.push($("input#person1").val());
    inputs.push($("input#person2").val());
    inputs.push($("input#animal").val());
    inputs.push($("input#exclamation").val());
    inputs.push($("input#verb").val());
    inputs.push($("input#verb").val());
    inputs.push($("input#adj").val());
    inputs.push($("input#noun").val());

    inputs.forEach(function(input, index) {
      $(storyClasses[index]).text(input);
    })

    $("#story").show();
  });
});
