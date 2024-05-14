const { exec } = require("child_process");
const router = require("express").Router();
const path = require("path");

router.get("/toggle/mic", (content, res) => {
    exec(
        'sh -c "amixer set Capture toggle | grep off"',
        (error, stdout, stderr) => {
            if (stdout.length < 2) {
                res.sendFile(path.resolve("assets/1.jpg"));
            } else {
                res.sendFile(path.resolve("assets/0.jpg"));
            }
        }
    );
});

router.get("/toggle/music", (content, res) => {
    exec(
        'sh -c "qdbus org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.PlayPause"',
        (err, out, serr) => {
            setTimeout(() => {
                exec(
                    'sh -c "qdbus org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.PlaybackStatus | grep laying"',
                    (error, stdout, stderr) => {
                        if (stdout.length < 2) {
                            res.sendFile(path.resolve("assets/play.png"));
                        } else {
                            res.sendFile(path.resolve("assets/pause.png"));
                        }
                    }
                );
            }, 150);
        }
    );
});

module.exports = router;
