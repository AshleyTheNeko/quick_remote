const express = require("express");
const app = express();

app.use(require("./routes/image"));
app.use(require("./routes/html"));
app.use(require("./routes/toggle"));

app.listen(3333, () => {
    console.log(`Listening on port ${3333}`);
});
