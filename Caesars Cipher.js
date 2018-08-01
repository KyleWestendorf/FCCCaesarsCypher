function rot13(str) { // LBH QVQ VG!
  
    let newString = str.split('')
        .map(character => character.charCodeAt(0) < 65 || character.charCodeAt(0) > 90 ? 
        String.fromCharCode(character.charCodeAt(0)) 
        : character.charCodeAt(0) < 78 ? 
        String.fromCharCode(character.charCodeAt(0) + 13) 
        : String.fromCharCode(character.charCodeAt(0) - 13)).join('');
    
      return newString;
    }