import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSound, setCurrentSound] = useState('fireplace')
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false)
  const [focusTime, setFocusTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  
  const audioRef = useRef(null)
  const intervalRef = useRef(null)
  const notificationRef = useRef(null)

  const sounds = {
    fireplace: './sounds/fireplace.mp3',
    rain: './sounds/rain.mp3',
    ocean: './sounds/ocean.mp3'
  }

  const notificationSounds = {
    focusComplete: './sounds/focus-complete.mp3',
    breakComplete: './sounds/break-complete.mp3'
  }

  const soundIcons = {
    fireplace: './icons/fireplace.svg',
    rain: './icons/rain.svg',
    ocean: './icons/ocean.svg'
  }

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play()
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isPlaying, currentSound])

  useEffect(() => {
    if (isTimerRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Timer finished - play notification sound
            const notificationSound = isBreak ? notificationSounds.breakComplete : notificationSounds.focusComplete
            if (notificationRef.current) {
              notificationRef.current.src = notificationSound
              notificationRef.current.play().catch(e => console.log('Notification sound failed to play:', e))
            }
            
            // Switch to next timer automatically
            setIsBreak(!isBreak)
            const nextTime = isBreak ? focusTime * 60 : breakTime * 60
            setTimeLeft(nextTime)
            
            // Keep timer running for the next session
            setIsPaused(false)
            // Don't stop the timer, just continue with the new session
            
            return nextTime
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isTimerRunning, isPaused, isBreak, focusTime, breakTime])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStartPause = () => {
    if (!isTimerRunning) {
      // Starting the timer
      setIsPlaying(true)
      setIsTimerRunning(true)
      setIsPaused(false)
      setTimeLeft(isBreak ? breakTime * 60 : focusTime * 60)
    } else if (isPaused) {
      // Resuming from pause
      setIsPlaying(true)
      setIsPaused(false)
    } else {
      // Pausing the timer
      setIsPlaying(false)
      setIsPaused(true)
    }
  }



  const handleReset = () => {
    setIsPlaying(false)
    setIsTimerRunning(false)
    setIsPaused(false)
    setIsBreak(false)
    setTimeLeft(focusTime * 60)
  }

  const handleSoundChange = (sound) => {
    setCurrentSound(sound)
    if (isPlaying) {
      // Restart audio with new sound
      setIsPlaying(false)
      setTimeout(() => setIsPlaying(true), 100)
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Update document title with timer status
  useEffect(() => {
    const originalTitle = 'FlowSounds — MVP'
    
    if (isTimerRunning) {
      const status = isPaused ? '⏸️ Paused' : isBreak ? '☕ Break' : '⏱️ Focus'
      const timeString = formatTime(timeLeft)
      document.title = `${status} ${timeString} | ${originalTitle}`
    } else {
      document.title = originalTitle
    }

    // Cleanup function to restore original title
    return () => {
      document.title = originalTitle
    }
  }, [isTimerRunning, isPaused, isBreak, timeLeft])

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Flow Sounds</h1>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Timer Display */}
        <div className="timer-section">
          <div className="timer-display">
            <div className="timer-label">
              {isBreak ? 'Break Time' : 'Focus Time'}
              {isPaused && <span className="paused-indicator"> (Paused)</span>}
            </div>
            <div className="timer">{formatTime(timeLeft)}</div>
          </div>
        </div>

        {/* Sound Selection */}
        <div className="sound-section">
          <h3>Choose Your Sound</h3>
          <div className="sound-buttons">
            {Object.keys(sounds).map((sound) => (
              <button
                key={sound}
                className={`sound-btn ${currentSound === sound ? 'active' : ''}`}
                onClick={() => handleSoundChange(sound)}
              >
                <div className="sound-icon">
                  <img 
                    src={soundIcons[sound]} 
                    alt={`${sound} icon`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="fallback-icon" style={{display: 'none'}}>
                    {sound === 'fireplace' ? '🔥' : sound === 'rain' ? '🌧️' : '🌊'}
                  </span>
                </div>
                <span className="sound-label">{sound.charAt(0).toUpperCase() + sound.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timer Controls */}
        <div className="timer-controls">
          <div className="time-settings">
            <div className="setting-group">
              <label>
                <span className="setting-icon">⏱️</span>
                Focus Time (min)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={focusTime}
                onChange={(e) => setFocusTime(parseInt(e.target.value) || 25)}
                disabled={isTimerRunning}
                placeholder="25"
              />
              <div className="preset-buttons">
                <button 
                  className="preset-btn"
                  onClick={() => setFocusTime(25)}
                  disabled={isTimerRunning}
                >
                  25
                </button>
                <button 
                  className="preset-btn"
                  onClick={() => setFocusTime(50)}
                  disabled={isTimerRunning}
                >
                  50
                </button>
                <button 
                  className="preset-btn"
                  onClick={() => setFocusTime(15)}
                  disabled={isTimerRunning}
                >
                  15
                </button>
              </div>
            </div>
            <div className="setting-group">
              <label>
                <span className="setting-icon">☕</span>
                Break Time (min)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={breakTime}
                onChange={(e) => setBreakTime(parseInt(e.target.value) || 5)}
                disabled={isTimerRunning}
                placeholder="5"
              />
              <div className="preset-buttons">
                <button 
                  className="preset-btn"
                  onClick={() => setBreakTime(5)}
                  disabled={isTimerRunning}
                >
                  5
                </button>
                <button 
                  className="preset-btn"
                  onClick={() => setBreakTime(10)}
                  disabled={isTimerRunning}
                >
                  10
                </button>
                <button 
                  className="preset-btn"
                  onClick={() => setBreakTime(3)}
                  disabled={isTimerRunning}
                >
                  3
                </button>
              </div>
            </div>
          </div>
          
          <div className="control-buttons">
            <button 
              className={!isTimerRunning ? "start-btn" : isPaused ? "resume-btn" : "pause-btn"} 
              onClick={handleStartPause}
            >
              {!isTimerRunning ? "Start" : isPaused ? "Resume" : "Pause"}
            </button>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {/* Hidden Audio Elements */}
        <audio
          ref={audioRef}
          src={sounds[currentSound]}
          loop
          preload="auto"
        />
        <audio
          ref={notificationRef}
          preload="auto"
        />
      </div>
    </div>
  )
}

export default App
