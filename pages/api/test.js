export default function handler(req, res) {
  res.status(200).json({
    state: {
      paused: true,
      movie: {
        id: 81672085,
        trackId: 272833771,
      },
      playbackPos: "00:10:20",
    },
  });
}
