import React, { useRef } from 'react'
import * as S from './styles'
import { usePlayerState } from 'hooks/video'
import { Play } from '@styled-icons/fa-solid/Play'
import { Unmute } from '@styled-icons/octicons/Unmute'
import { VolumeMute as Mute } from '@styled-icons/remix-fill/VolumeMute'

export type VideoProps = {
  url: string
  soundBar?: boolean
}

const Videos = ({ url }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const {
    playerState,
    toggleVideoPlay,
    handlerTimeUpdate,
    handlerVideoPercentage,
    handlerVolumeUpdate,
    handlerSound,
    handlerSoundBar
  } = usePlayerState(videoRef)

  // console.log(videoRef)
  return (
    <S.ContentVideo>
      <S.Wrappervideo
        className="video__player"
        loop
        playsInline
        ref={videoRef}
        src={url}
        onTimeUpdate={handlerTimeUpdate}
      ></S.Wrappervideo>
      <S.PlayButton onClick={toggleVideoPlay}>
        {playerState.playing ? '' : <Play />}
      </S.PlayButton>
      <S.PlayBar>
        <input
          type="range"
          min="0"
          id="time"
          max="100"
          onChange={handlerVideoPercentage}
          value={playerState.percentage}
        />
      </S.PlayBar>
      <S.VolumeControl>
        <S.Volume>
          <S.SoundBar
            soundBar={playerState.soundbar}
            type="range"
            min="0"
            id="volume"
            max="100"
            onChange={handlerVolumeUpdate}
            onMouseUp={handlerSoundBar}
            onMouseOver={handlerSoundBar}
            value={playerState.volume}
          />
          <S.SoundWrapper onClick={handlerSound}>
            {playerState.sound ? <Unmute /> : <Mute />}
          </S.SoundWrapper>
        </S.Volume>
      </S.VolumeControl>
    </S.ContentVideo>
  )
}

export default Videos
