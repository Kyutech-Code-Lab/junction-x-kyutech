const reportVideo = document.querySelector(".event-report-player video");
const reportPlayButton = document.querySelector(".event-report-play");

if (reportVideo && reportPlayButton) {
  const icon = reportPlayButton.querySelector("path");
  const updatePlayButton = () => {
    const showPause = !reportVideo.paused && !reportVideo.ended;
    icon.setAttribute("d", showPause ? "M6 5h4v14H6zM14 5h4v14h-4z" : "M8 5v14l11-7z");
    reportPlayButton.setAttribute("aria-label", reportVideo.paused
      ? "Play video / 動画を再生"
      : "Pause video / 動画を一時停止");
    reportPlayButton.hidden = false;
  };

  reportPlayButton.addEventListener("click", async () => {
    try {
      if (reportVideo.paused) {
        await reportVideo.play();
      } else {
        reportVideo.pause();
      }
    } catch {
      // Keep the play button available if playback cannot start.
      updatePlayButton();
    }
  });

  ["play", "pause", "ended"].forEach((event) => {
    reportVideo.addEventListener(event, updatePlayButton);
  });
  updatePlayButton();
}
