"use client"

import useVideo from "@/app/_components/video-player/use-video";
import {FC} from "react";
import {VideoProps} from "@/app/_components/video-player/video-player.types";
import {Loading} from "@/app/_components/loading";
import Image from "next/image";
import {Button} from "@/app/_components/button";
import {Progress} from "@/app/_components/progress";
import {secondsToHHMMSS} from "@/utils/time";

// todo: Impl change value of video manually
export const VideoPlayer: FC<VideoProps> = ({src, poster = "", className}) => {
  const {
    currentTime,
    duration,
    progress,
    isPlaying,
    isVideoLoaded,
    isVideoWaited,
    videoRef,
    play,
    pause,
    fullScreen,
  } = useVideo(src);

  return (
    <div className="relative">
      {
        isVideoWaited && <Loading className="absolute inset-0 m-auto" variant="neutral" size="large"/>
      }
      <video
        className="w-full"
        ref={videoRef}
        src={src}
        poster={poster}
      />
      <div
        className={`${
          !isVideoLoaded || isVideoWaited
            ? "animate-pulse opacity-40 pointer-events-none"
            : ""
        } h-12 dark:bg-base-50 rounded-lg  p-2 flex items-center mt-2 gap-5`}
        lang="en"
        dir="ltr"
      >
        <Image
          className="hidden lg:block relative top-[-0.15rem]"
          src="/images/logo-en-light.svg"
          width={100}
          height={20}
          alt=""
        />

        <Button
          size="tiny"
          variant={isPlaying ? undefined : "primary"}
          className="font-semibold tracking-widest w-32"
          onClick={!isPlaying ? play : pause}
        >
          {isVideoWaited
            ? "loading..."
            : !isPlaying
              ? "play"
              : "pause"}
        </Button>

        <Progress value={progress} variant="primary"/>
        <div className="flex gap-1 font-semibold text-sm *:w-16">
          <span>{secondsToHHMMSS(currentTime)}</span> /
          <span>{secondsToHHMMSS(duration)}</span>
        </div>
        <Button
          size="tiny"
          className="hidden lg:inline-flex font-semibold tracking-widest w-44"
          onClick={fullScreen}
        >
          full screen
        </Button>
      </div>
    </div>
  )
}