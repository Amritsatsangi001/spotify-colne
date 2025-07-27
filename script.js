// Spotify Clone JavaScript
// Loads songs, creates playlist cards, and handles playback

// Sample playlist data
const playlists = [
  {
    title: "Happy Hits",
    description: "Listen to your favorite happy songs",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
  },
  {
    title: "Chill Vibes",
    description: "Relaxing music for your mood",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center"
  },
  {
    title: "Workout Mix",
    description: "High energy tracks for your workout",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center"
  },
  {
    title: "Late Night",
    description: "Perfect for those late night sessions",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
  },
  {
    title: "Road Trip",
    description: "The perfect soundtrack for your journey",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center"
  },
  {
    title: "Party Mode",
    description: "Get the party started with these hits",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center"
  }
];

// Sample songs data
const songs = [
  {
    title: "Kul (Original Mix)",
    artist: "DJ Kantik",
    cover: "https://i1.sndcdn.com/artworks-000208857857-2v7k7w-t500x500.jpg",
    file: "songs/Dj Kantik - Kul (Original Mix)(MP3_128K)-mc.mp3"
  },
  {
    title: "Rockabye (feat. Sean Paul & Anne-Marie)",
    artist: "Clean Bandit",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Clean_Bandit_-_Rockabye.png",
    file: "songs/Clean_Bandit_-_Rockabye_ft._Sean_Paul___Anne-Marie_[Official_Video].mp3"
  },
  {
    title: "Ocean (feat. Khalid)",
    artist: "Martin Garrix",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Martin_Garrix_feat._Khalid_-_Ocean.png",
    file: "songs/Martin_Garrix_feat._Khalid_-_Ocean_(Official_Video).mp3"
  },
  {
    title: "Titanium (feat. Sia)",
    artist: "David Guetta",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6e/David_Guetta_-_Titanium.png",
    file: "songs/David_Guetta_-_Titanium_ft._Sia_(Official_Video).mp3"
  },
  {
    title: "Swalla (feat. Nicki Minaj & Ty Dolla $ign)",
    artist: "Jason Derulo",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Jason_Derulo_Swalla.jpg",
    file: "songs/Jason_Derulo_-_Swalla_(feat._Nicki_Minaj___Ty_Dolla_$ign)_(Official_Music_Video).mp3"
  },
  {
    title: "New Level (Remix) (feat. Future, A$AP Rocky, Lil Uzi Vert)",
    artist: "A$AP Ferg",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/2d/ASAP_Ferg_-_New_Level.png",
    file: "songs/A$AP_Ferg_-_New_Level_REMIX_(Audio)_ft._Future,_A$AP_Rocky,_Lil_Uzi_Vert.mp3"
  },
  {
    title: "Wake Me Up",
    artist: "Avicii",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Avicii_wake_me_up.jpg",
    file: "songs/Avicii - Wake Me Up (Official Video).mp3"
  },
  {
    title: "One Kiss",
    artist: "Calvin Harris, Dua Lipa",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/2b/Calvin_Harris_and_Dua_Lipa_One_Kiss.png",
    file: "songs/Calvin Harris, Dua Lipa - One Kiss (Lyric Video).mp3"
  },
  {
    title: "Mi Gente",
    artist: "J Balvin, Willy William",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/J_Balvin_and_Willy_William_Mi_Gente.png",
    file: "songs/J Balvin, Willy William - Mi Gente (Official Video).mp3"
  },
  {
    title: "rockstar (feat. 21 Savage)",
    artist: "Post Malone",
    cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Post_Malone_-_Rockstar.png",
    file: "songs/Post Malone - rockstar ft. 21 Savage.mp3"
  }
];

// DOM elements
const cardContainer = document.querySelector('.card-container');
const songList = document.querySelector('.song-list ul');
const playBar = document.querySelector('.play-bar');
const playButton = document.querySelector('.song-buttons img[src*="play"]');
const prevButton = document.querySelector('.song-buttons img[src*="prev"]');
const nextButton = document.querySelector('.song-buttons img[src*="next"]');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const currentTimeSpan = document.querySelector('.current-time');
const durationSpan = document.querySelector('.duration');
const playerCover = document.querySelector('.player-cover');
const playerTitle = document.querySelector('.player-title');
const playerArtist = document.querySelector('.player-artist');
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');
const currentTimeEl = document.querySelector('.current-time');
const durationTimeEl = document.querySelector('.duration-time');

let currentSong = 0;

// Initialize the app
function init() {
  renderPlaylistCards();
  renderSongList();
  setupEventListeners();
}

// Render playlist cards
function renderPlaylistCards() {
  cardContainer.innerHTML = '';
  
  playlists.forEach(playlist => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${playlist.image}" alt="${playlist.title}">
      <h2>${playlist.title}</h2>
      <p>${playlist.description}</p>
      <div class="play">
        <svg viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    `;
    
    card.addEventListener('click', () => {
      console.log(`Playing playlist: ${playlist.title}`);
      // Here you would load the playlist songs
    });
    
    cardContainer.appendChild(card);
  });
}

// Render song list in sidebar
function renderSongList() {
  songList.innerHTML = '';
  
  songs.forEach((song, idx) => {
    const li = document.createElement('li');
    li.className = 'flex gap-10 align-center cursor-pointer';
    li.innerHTML = `
      <img src="${song.cover}" width="40" height="40" style="border-radius:6px;object-fit:cover;">
      <div>
        <div style="font-weight:600;">${song.title}</div>
        <div style="font-size:12px;opacity:0.7;">${song.artist}</div>
      </div>
    `;
    li.onclick = () => playSong(idx);
    songList.appendChild(li);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Play button
  if (playButton) {
    playButton.addEventListener('click', togglePlay);
  }
  
  // Previous button
  if (prevButton) {
    prevButton.addEventListener('click', playPrevious);
  }
  
  // Next button
  if (nextButton) {
    nextButton.addEventListener('click', playNext);
  }
}

// Play a song
function playSong(idx) {
  currentSong = idx;
  const song = songs[idx];
  audio.src = song.file;
  playerCover.src = song.cover;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  audio.play();
  updatePlayBtn();
}

// Toggle play/pause
function togglePlay() {
  if (!currentSong) {
    // Play first song if nothing is playing
    if (songs.length > 0) {
      playSong(0);
    }
    return;
  }
  
  isPlaying = !isPlaying;
  
  if (playButton) {
    playButton.src = isPlaying ? 'assets/pause.svg' : 'assets/play.svg';
  }
  
  console.log(isPlaying ? 'Playing' : 'Paused');
}

// Play previous song
function playPrevious() {
  if (!currentSong) return;
  
  const prevIndex = currentSong > 0 ? currentSong - 1 : songs.length - 1;
  playSong(prevIndex);
}

// Play next song
function playNext() {
  if (!currentSong) return;
  
  const nextIndex = (currentSong + 1) % songs.length;
  playSong(nextIndex);
}

// Simulate progress bar
function simulateProgress() {
  if (!isPlaying) return;
  
  let currentSeconds = 0;
  const totalSeconds = parseTimeToSeconds(currentSong.duration);
  
  const interval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(interval);
      return;
    }
    
    currentSeconds++;
    currentTimeSpan.textContent = formatTime(currentSeconds);
    
    if (currentSeconds >= totalSeconds) {
      clearInterval(interval);
      playNext();
    }
  }, 1000);
}

// Helper function to parse time string to seconds
function parseTimeToSeconds(timeString) {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
}

// Helper function to format seconds to time string
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Update play button state
function updatePlayBtn() {
  if (audio.paused) {
    playBtn.src = 'assets/play.svg';
  } else {
    playBtn.src = 'assets/pause.svg';
  }
}

// Add event listeners for player controls
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayBtn();
});

prevBtn.addEventListener('click', () => {
  playSong((currentSong - 1 + songs.length) % songs.length);
});

nextBtn.addEventListener('click', () => {
  playSong((currentSong + 1) % songs.length);
});

audio.addEventListener('ended', () => {
  playSong((currentSong + 1) % songs.length);
});

audio.addEventListener('play', updatePlayBtn);
audio.addEventListener('pause', updatePlayBtn);

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationTimeEl.textContent = formatTime(audio.duration);
  }
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
});

function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Add Home and Search button functionality
const homeBtn = document.querySelector('.home li:nth-child(1)');
const searchBtn = document.querySelector('.home li:nth-child(2)');
const playlistSection = document.querySelector('.spotify-playlist');

if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    if (playlistSection) {
      playlistSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    // If you add a search input, focus it here. For now, show an alert.
    alert('Search functionality coming soon!');
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 