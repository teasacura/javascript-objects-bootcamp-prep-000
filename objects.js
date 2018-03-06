var playlist = { 'Green Day': 'American Idiot'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle })
}
