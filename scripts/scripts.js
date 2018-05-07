$(document).ready(function() {

  console.log(vowelFinder("bangular"));

  function vowelFinder(word) {

    var vowels = ['a','e','i','o','u'];

    for (var i = 0; i < vowels.length; i++) {
      if (word.charAt(0) == vowels[i]) {
        return "This word starts with a vowel!";
      }

      for (var e = 0; e < word.length; e++) {

        if (word[e] == vowels[i]) {

          return "The vowel " + vowels[i] + "  is located at position " + (e + 1) + " of " + word;
        }
      }
    }
  }

});
