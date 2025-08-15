# Sound Files Directory

This directory contains all audio files for the FlowSounds MVP application.

## Current Audio Structure

### **Focus Sounds** (for focus sessions)
- `white-noise.mp3` - Clean white noise for concentration
- `brown-noise.mp3` - Deep brown noise for deep focus
- `pink-noise.mp3` - Balanced pink noise for productivity

### **Relax Sounds** (for break sessions)
- `fireplace.mp3` - Fireplace crackling ambient sound
- `rain.mp3` - Rain falling ambient sound  
- `ocean.mp3` - Ocean waves ambient sound

### **Notification Sounds**
- `focus-complete.mp3` - Plays when focus timer completes
- `break-complete.mp3` - Plays when break timer completes

## Adding Focus Sound Files

Please add these three focus sound files to this directory:

### 1. White Noise
**File:** `white-noise.mp3`
**Purpose:** Clean, consistent noise for concentration
**Recommended:** Pure white noise, 2-3 minutes loopable
**Duration:** 2-3 minutes (loopable)

### 2. Brown Noise  
**File:** `brown-noise.mp3`
**Purpose:** Deep, low-frequency noise for deep focus
**Recommended:** Deep brown noise, 2-3 minutes loopable
**Duration:** 2-3 minutes (loopable)

### 3. Pink Noise
**File:** `pink-noise.mp3`
**Purpose:** Balanced noise spectrum for productivity
**Recommended:** Balanced pink noise, 2-3 minutes loopable
**Duration:** 2-3 minutes (loopable)

## File Requirements

- **Format:** MP3 (recommended for best browser compatibility)
- **Quality:** 128kbps or higher
- **Size:** Keep under 2MB each for fast loading
- **Volume:** Normalized to comfortable listening level
- **Looping:** Seamless looping for continuous playback

## Usage

The application will automatically:
1. Play **focus sounds** during focus sessions
2. Play **relax sounds** during break sessions
3. Switch between sounds automatically when timer changes
4. Play notification sounds when timers complete

## Free Sound Resources

For focus sounds (white, brown, pink noise):
- **Online generators:** Many websites generate these noises
- **Freesound.org:** Search for "white noise", "brown noise", "pink noise"
- **Audio software:** Generate using Audacity or similar tools

For relax sounds:
- **Freesound.org**
- **Pixabay.com** (free section)
- **Zapsplat.com** (free tier)

## Testing

After adding the focus sound files:
1. Start a focus timer
2. Verify focus sounds play during focus sessions
3. Verify relax sounds play during break sessions
4. Test sound switching when timers change
5. Verify notification sounds work correctly
