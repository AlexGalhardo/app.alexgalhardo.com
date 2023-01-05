import app from "./app";

app.listen(process.env.PORT || 3000, () => {
    console.log("info", `Galhardo APP Server started at => ${process.env.APP_URL}`);
});
