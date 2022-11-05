const words = ["Zvonimir Prpić.", "A Frontend Developer."];
let i = 0;
let counter;
const typeNow = () => {
  let word = words[i].split("");
  const loopTyping = () => {
    if (word.length > 0) {
      document.getElementById("text").innerHTML += word.shift();
    } else {
      setTimeout(() => {
        deleteNow();
      }, 700);

      return;
    }
    counter = setTimeout(loopTyping, 150);
  };
  loopTyping();
};
const deleteNow = () => {
  let word = words[i].split("");
  const loopDeleting = () => {
    if (word.length > 0) {
      word.pop();
      document.getElementById("text").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typeNow();
      return;
    }
    counter = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
};
typeNow();
