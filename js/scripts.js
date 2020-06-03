$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const adverbInput = $("input#verb").val();
    const verbInput = $("input#verb").val();
    const adjInput = $("input#adj").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".adverb").text(adverbInput);
    $(".verb").text(verbInput);
    $(".adj").text(adjInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});