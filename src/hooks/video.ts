import React, { useState, useEffect } from 'react'

export function usePlayerState(videoRef: React.RefObject<HTMLVideoElement>) {
  const [playerState, setPlayerState] = useState({
    playing: true,
    percentage: 0,
    volume: 70,
    sound: true,
    soundbar: false
  })

  useEffect(() => {
    if (playerState.playing) {
      if (videoRef.current !== null) {
        videoRef.current.play()
        videoRef.current.volume = 0.7
      }
    } else {
      videoRef.current?.pause()
    }
  }, [playerState.playing, videoRef])

  function toggleVideoPlay() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  function handlerTimeUpdate() {
    if (videoRef.current !== null) {
      const currentPercentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      setPlayerState({
        ...playerState,
        percentage: currentPercentage
      })
    }
  }
  function handlerVideoPercentage(e: React.ChangeEvent<HTMLInputElement>) {
    if (videoRef.current !== null) {
      const currentPercentageValue = parseInt(e.target.value)

      videoRef.current.currentTime =
        (videoRef.current.duration / 100) * currentPercentageValue
      setPlayerState({
        ...playerState,
        percentage: currentPercentageValue
      })
    }
    //console.log(e.target.value)
  }

  function handlerVolumeUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    if (videoRef.current !== null) {
      const currentPercentageValue = parseInt(e.target.value) / 100
      videoRef.current.volume = currentPercentageValue
      setPlayerState({
        ...playerState,
        volume: currentPercentageValue * 100
      })
    }
  }

  function handlerSound() {
    if (videoRef.current !== null) {
      videoRef.current.muted = playerState.sound
      const playSoud = !playerState.sound
      setPlayerState({
        ...playerState,
        sound: playSoud
      })
    }
  }

  function handlerSoundBar() {
    {
      const soundBar = !playerState.soundbar
      setPlayerState({
        ...playerState,
        soundbar: soundBar
      })
    }
  }
  return {
    playerState,
    toggleVideoPlay,
    handlerTimeUpdate,
    handlerVideoPercentage,
    handlerVolumeUpdate,
    handlerSound,
    handlerSoundBar
  }
}
