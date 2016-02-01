var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace(/>/g, "-");
  songs[i] = songs[i].replace(/[^a-zA-z&\- ]/g, ""); // nuke anything that matches this regex
};

songs.unshift("Wanna be Starting Something - by Michael Jackson on the album Thriller");
songs.push("Fake Plastic Trees - by Radiohead on the album The Bends");

var mainContentArea = document.getElementById("mainContent");

for (var i = 0; i < songs.length; i++) {
  mainContentArea.innerHTML += songs[i] + "<br>";
};