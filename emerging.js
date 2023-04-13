var clicks = 0;

function moveImage(img) {
    img.style.position = "absolute";
  clicks++;
  if (clicks === 3) {
    var winElement = document.createElement('div');
    winElement.classList.add('win');
    winElement.innerText = 'KO';
    document.body.appendChild(winElement);
    winElement.style.fontSize = "1000px"
    winElement.style.color = "white"
  }
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  img.style.left = x + 'px';
  img.style.top = y + 'px';
}
