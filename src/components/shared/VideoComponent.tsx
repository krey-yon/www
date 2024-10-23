interface VideoComponentProps {
  fileName: string
  title: string
}

function VideoComponent({ fileName, title }: VideoComponentProps) {
  return (
    <video
      className="size-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
      aria-label={`${title} project video`}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="none"
    >
      <source src={fileName} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoComponent
