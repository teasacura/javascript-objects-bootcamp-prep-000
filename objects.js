var playlist = { "Green Day": "American Idiot"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  var name = artistName
  delete playlist['name'];
  return playlist;
}
