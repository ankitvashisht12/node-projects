const express = require("express");

const app = express();

// app.use((req, res, next) => {
//     console.log("This is first middleware");
//     next();
// });
// 
// app.use((req, res, next) => {
//     console.log("This is second  middleware");
//     res.send("Hi there");
// });

app.use("/users", (req, res, next) => {
    res.send("USERS PAGE");
});

app.use("/", (req, res, next) => {
    res.send("HOMEPAGE");
});

app.listen(3000);

