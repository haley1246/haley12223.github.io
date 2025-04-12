function makeBigger() {
    //alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
  }
  
  function applyStyles() {
    alert("Style changed!");
    let textArea = document.getElementById("userText");

    if (document.getElementById("fancy").checked){
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked){
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";

    }
  }
  function mooText(){
    let textArea = document.getElementById("userText");
    let str = textArea.value.toUpperCase();

    let sentences = str.split(".");
    for (let i = 0; i < sentences.length -1; i++){
      let words = sentences[i].trim().split(" ");
      if (words.length > 0){
        words[words.length -1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
    str = sentences.join(". ");
    textArea.value = str;
  }