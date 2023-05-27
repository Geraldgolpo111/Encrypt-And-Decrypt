function caesarCipher(text, shift) {
    var cipherText = "";
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-z]/i)) {
        var asciiOffset = char.charCodeAt(0) < 97 ? 65 : 97;
        var cipherChar = String.fromCharCode(
          ((char.charCodeAt(0) - asciiOffset + shift) % 26) + asciiOffset
        );
        cipherText += cipherChar;
      } else {
        cipherText += char;
      }
    }
    return cipherText;
  }
  
  // Function to handle file selection
  function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function (e) {
      document.getElementById("textInput").value = e.target.result;
    };
  
    reader.readAsText(file);
  }
  
  // Function to perform encryption
  function encrypt() {
    var text = document.getElementById("textInput").value;
    var shift = parseInt(document.getElementById("shiftInput").value);
  
    var encryptedText = caesarCipher(text, shift);
    document.getElementById("resultTextarea").value = encryptedText;
  
    document.getElementById("saveButton").disabled = false;
  }
  
  // Function to perform decryption
  function decrypt() {
    var text = document.getElementById("textInput").value;
    var shift = parseInt(document.getElementById("shiftInput").value);
  
    var decryptedText = caesarCipher(text, -shift);
    document.getElementById("resultTextarea").value = decryptedText;
  
    document.getElementById("saveButton").disabled = false;
  }
  
  // Function to save text as a file
  function saveToFile() {
    var text = document.getElementById("resultTextarea").value;
    var filename = "result.txt";
  
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  // Event listeners
  document.getElementById("fileInput").addEventListener("change", handleFileSelect);
  document.getElementById("encryptButton").addEventListener("click", encrypt);
  document.getElementById("decryptButton").addEventListener("click", decrypt);
  document.getElementById("saveButton").addEventListener("click", saveToFile);
  