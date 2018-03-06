var playlist = { 'Green Day': 'American Idiot'};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: songTitle })
  return playlist
}
