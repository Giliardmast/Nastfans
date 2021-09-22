import React, { useState, useEffect } from 'react'

export function usePlayerState(videoRef: React.RefObject<HTMLVideoElement>) {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
    volume: 70,
    sound: true,
    soundbar: false
  })

  useEffect(() => {
    if (playerState.playing) {
      videoRef.current!.play()
      videoRef.current!.volume = 0.7
    } else {
      videoRef.current!.pause()
    }
  }, [playerState.playing, videoRef])

  function toggleVideoPlay() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  function handlerTimeUpdate() {
    const currentPercentage =
      (videoRef.current!.currentTime / videoRef.current!.duration) * 100
    setPlayerState({
      ...playerState,
      percentage: currentPercentage
    })
  }
  function handlerVideoPercentage(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.value)
    const currentPercentageValue = parseInt(e.target.value)

    videoRef.current!.currentTime =
      (videoRef.current!.duration / 100) * currentPercentageValue
    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue
    })
  }

  function handlerVolumeUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    const currentPercentageValue = parseInt(e.target.value) / 100
    videoRef.current!.volume = currentPercentageValue
    setPlayerState({
      ...playerState,
      volume: currentPercentageValue * 100
    })
  }

  function handlerSound() {
    videoRef.current!.muted = playerState.sound
    const playSoud = !playerState.sound
    setPlayerState({
      ...playerState,
      sound: playSoud
    })
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
