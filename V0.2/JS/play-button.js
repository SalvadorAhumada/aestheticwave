
function SimpleHTML5Player(audioId, playlistId, playId, downloadId ) {

  // elements
  _player = document.getElementById(audioId),
  _playlist = document.getElementById(playlistId),
  _play = document.getElementById(playId),
  _download = document.getElementById(downloadId);

  // functions
  function setIsPlaying(selectEl, isPlaying) {
    selectEl.setAttribute('playstate', isPlaying);

    if (isPlaying === true) {
      _play.innerHTML = '<i class="fa fa-pause"></i><span class="tooltiptext">Pause Track ' + (selectEl.selectedIndex + 1) + '</span>';
      _play.classList.add('paused');
    } else {
      _play.innerHTML = '<i class="fa fa-play"></i><span class="tooltiptext">Play Track ' + (selectEl.selectedIndex + 1) + '</span>';
      _play.classList.remove('paused');
    }
  }

  function getIsPlaying(selectEl) {
    return selectEl.getAttribute('playstate');
  }

  function play(selectEl) {
    if (getIsPlaying(selectEl) === "true") {
      _player.pause();
    } else {
      _player.play();
    }

    updatePlayTooltip(selectEl);
  }

  function updatePlayTooltip(selectEl) {
    var state = "";
    if (getIsPlaying(selectEl) === "true")
      state = "[ Pause";
    else
      state = "[ Play";

    _play.getElementsByTagName("span")[0].innerHTML = state + " music ]";
  }

  function playOption(option) {
    _player.src = option.getAttribute("data-mp3");

    if (getIsPlaying(_playlist) === "true")
      _player.play();
  }

  function selectionChanged(selectEl) {
    var curId = selectEl.selectedIndex;
    var lastIdx = selectEl.options.length - 1;
  }

  _player.addEventListener("play", function(e) {
    setIsPlaying(_playlist, true);
  });

  _player.addEventListener("pause", function(e) {
    setIsPlaying(_playlist, false);
  });

  _player.addEventListener("ended", function(e) {
    setIsPlaying(_playlist, false);
    //playNext(_playlist);
  });

  _play.addEventListener("click", function(e) {
    play(_playlist);
  });

  _play.addEventListener("mouseover", function(e) {
    updatePlayTooltip(_playlist);
  });

  _download.addEventListener("click", function(e) {
    alert(_download);
    window.open(_download.getAttribute('data-url'), '_blank');
  });

  _playlist.addEventListener("change", function(e) {
    if (e.target && e.target.nodeName === "SELECT") {
      selectionChanged(_playlist);
      playOption(e.target.options[e.target.selectedIndex], !getIsPlaying(_player));
    }
  });

  selectionChanged(_playlist);
  //Get the first song loaded but paused
  playOption(_playlist.options[_playlist.selectedIndex], true);

}

var audioPlayer = new SimpleHTML5Player(
  'audio',
  'playlist',
  'play',
  'download');
