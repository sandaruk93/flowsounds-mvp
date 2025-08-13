# Sound Files Directory

This directory contains all audio files for the FlowSounds MVP application.

## Current Ambient Sounds

- `fireplace.mp3` - Fireplace crackling ambient sound
- `rain.mp3` - Rain falling ambient sound  
- `ocean.mp3` - Ocean waves ambient sound

## Notification Sounds (Required)

Please add these two notification sound files to this directory:

### 1. Focus Complete Notification
**File:** `focus-complete.mp3`
**Purpose:** Plays when the focus timer completes
**Recommended:** A gentle, encouraging sound (e.g., soft bell, chime, or notification tone)
**Duration:** 2-3 seconds

### 2. Break Complete Notification  
**File:** `break-complete.mp3`
**Purpose:** Plays when the break timer completes
**Recommended:** A different sound to distinguish from focus completion (e.g., different bell tone, gentle alert)
**Duration:** 2-3 seconds

## File Requirements

- **Format:** MP3 (recommended for best browser compatibility)
- **Quality:** 128kbps or higher
- **Size:** Keep under 500KB each for fast loading
- **Volume:** Normalized to comfortable listening level

## Usage

The application will automatically:
1. Play `focus-complete.mp3` when focus time ends
2. Play `break-complete.mp3` when break time ends
3. Automatically switch between focus and break timers
4. Continue the timer cycle until manually stopped

## Testing

After adding the notification files:
1. Start a focus timer
2. Wait for it to complete (or temporarily set a short time like 1 minute)
3. Verify the focus completion sound plays
4. Verify the timer automatically switches to break mode
5. Wait for break to complete
6. Verify the break completion sound plays
7. Verify the timer automatically switches back to focus mode
