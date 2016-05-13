var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/teamvneonlogo.png') {
      myImage.setAttribute ('src','images/teamvpsy.png');
    } else {
      myImage.setAttribute ('src','images/teamvneonlogo.png');
    }
}
