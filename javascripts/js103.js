var listMusicViewRef = document.getElementById("listMusicView");
var addMusicViewRef  = document.getElementById("addMusicView");
var inputFieldValues = document.getElementsByClassName("inputField"); // should ref 3 elements
var navRefs = document.getElementsByClassName("navItem"); // should ref 3 elements
var songArtistAlbumRef = document.getElementById("songArtistAlbum")

addMusicViewRef.classList.add("nodisplay"); // start in listMusicView

navRefs[0].addEventListener("click",function(e) { // clicked on Add Music?
  e.preventDefault();
  changeSelectedNav(0); // 0 = ViewMusic
  inputFieldValues[0].value = "";
  inputFieldValues[1].value = "";
  inputFieldValues[2].value = "";
  listMusicViewRef.classList.remove("nodisplay");
  addMusicViewRef.classList.add("nodisplay");
});
navRefs[1].addEventListener("click",function(e) { // clicked on View Music?
  e.preventDefault();
  changeSelectedNav(1); // 1 = AddMusic
  listMusicViewRef.classList.add("nodisplay");
  addMusicViewRef.classList.remove("nodisplay");
});
add_button.addEventListener("click",addNewItem);

function addNewItem(e) {
  e.preventDefault();
  var newSong = inputFieldValues[1].value;
  var newArtist = inputFieldValues[0].value;
  var newAlbum = inputFieldValues[2].value;

  var newLI = document.createElement("li");
  newLI.className = "song-title";
  newLI.innerHTML = newSong;
  songArtistAlbumRef.appendChild(newLI);

  newUL = document.createElement("ul");
  newUL.className = "song-details";
  
  newLI = document.createElement("li");
  newLI.innerHTML = newArtist;
  newUL.appendChild(newLI);

  newLI = document.createElement("li");
  newLI.innerHTML = newAlbum;
  newUL.appendChild(newLI);

  newLI = document.createElement("li");
  newLI.className = "last-item";
  newLI.innerHTML = "unknown genre";
  newUL.appendChild(newLI);

  songArtistAlbum.appendChild(newUL);
}

function changeSelectedNav(index) {
  for (var i =0; i < navRefs.length; i++) {
    if (navRefs[i].firstChild.classList) { // does the anchor tag have a class?
      navRefs[i].firstChild.classList.remove("nav-selected");
    }
    if (i == index) {
      navRefs[i].firstChild.className = "nav-selected";
    }
  }
}