const { exec } = require("child_process");
const router = require("express").Router();
const path = require("path");

router.get("/image/mic", (content, res) => {
    exec('sh -c "amixer get Capture | grep off"', (error, stdout, stderr) => {
        if (stdout.length < 2) {
            res.sendFile(path.resolve("assets/1.jpg"));
        } else {
            res.sendFile(path.resolve("assets/0.jpg"));
        }
    });
});

router.get("/image/music", (content, res) => {
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
});

module.exports = router;
