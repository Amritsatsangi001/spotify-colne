# Spotify Clone

A fully functional Spotify web clone built following a detailed step-by-step process. This project replicates the core features and design of Spotify's web interface.

## Features

### 🎵 Music Player
- **Playlist Cards**: Beautiful hover effects with play button overlay
- **Song Library**: Sidebar with clickable song list
- **Player Controls**: Play/pause, previous, next buttons
- **Progress Tracking**: Simulated progress bar with time display
- **Auto-play**: Automatically plays next song when current ends

### 🎨 Design
- **Spotify-like UI**: Dark theme with black and gray color scheme
- **Responsive Layout**: Works on desktop and mobile devices
- **Hover Effects**: Interactive elements with smooth transitions
- **Rounded Corners**: Modern design with consistent border radius
- **Custom Scrollbars**: Dark-themed scrollbars for better UX

### 📱 Layout
- **Left Sidebar**: Logo, navigation (Home, Search), and song library
- **Main Content**: Header with sign up/login buttons and playlist cards
- **Player Bar**: Fixed bottom player with controls and song info
- **Responsive**: Adapts to different screen sizes

## Project Structure

```
Spotify clone/
├── index.html          # Main HTML file
├── style.css           # Main styles
├── utility.css         # Utility classes
├── script.js           # JavaScript functionality
├── assets/             # SVG icons and images
│   ├── logo.svg
│   ├── home.svg
│   ├── search.svg
│   ├── playlist.svg
│   ├── music.svg
│   ├── play.svg
│   ├── pause.svg
│   ├── prev.svg
│   └── next.svg
├── songs/              # MP3 files directory
└── transcript .md      # Full build process (in Hindi)
```

## Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Enjoy** the Spotify clone experience!

## How to Use

### Playing Music
1. **Click on any song** in the left sidebar to start playing
2. **Use the player controls** at the bottom to play/pause, skip tracks
3. **Click on playlist cards** to view playlists (currently shows console logs)

### Navigation
- **Home**: Navigate to home section
- **Search**: Access search functionality
- **Your Library**: View your song collection

## Sample Content

The clone comes with sample data:
- **6 Playlist Cards**: Happy Hits, Chill Vibes, Workout Mix, etc.
- **8 Sample Songs**: Classic hits from Queen, Eagles, Led Zeppelin, etc.
- **Interactive Elements**: All buttons and cards are fully functional

## Technical Details

### CSS Features
- **Flexbox Layout**: Modern CSS layout system
- **CSS Grid**: For complex layouts
- **CSS Variables**: For consistent theming
- **Transitions**: Smooth hover effects
- **Media Queries**: Responsive design

### JavaScript Features
- **ES6+ Syntax**: Modern JavaScript features
- **Event Listeners**: Interactive functionality
- **DOM Manipulation**: Dynamic content updates
- **State Management**: Track playing status
- **Time Formatting**: Convert seconds to MM:SS format

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Future Enhancements

- [ ] Real audio file playback
- [ ] Volume control
- [ ] Shuffle and repeat modes
- [ ] User authentication
- [ ] Backend integration
- [ ] Real playlist management

## Credits

- **Design Inspiration**: Spotify
- **Icons**: Custom SVG icons
- **Images**: Unsplash (for sample playlist images)
- **Build Process**: Detailed transcript guide

## License

This project is for educational purposes. All rights belong to their respective owners.

---

**Note**: This is a frontend-only implementation. For real music playback, you would need to integrate with a backend service and audio files. 