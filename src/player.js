// Initialize Fluid Player
const player = fluidPlayer('video-id', {
    layoutControls: {
        controlBar: {
            autoHide: true
        }
    }
});

const video = document.getElementById('video-id');
# Add button controls
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnSkip = document.getElementById('btn-skip');
const btnFs = document.getElementById('btn-fullscreen');

# connect buttons to player functions
if (btnPlay) btnPlay.addEventListener('click', () => player.play());
if (btnPause) btnPause.addEventListener('click', () => player.pause());
if (btnSkip) btnSkip.addEventListener('click', () => {
    const newTime = video.currentTime + 10; // Skip ahead by 10 seconds
    player.skipTo(newTime)
});
if (btnFs) btnFs.addEventListener('click', () => player.toggleFullscreen());

