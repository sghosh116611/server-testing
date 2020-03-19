const express = require("express");
const hbs = require("hbs");

var app = express();

var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

hbs.registerHelper("currentYear", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("uppertext", (text) => {
    return text.toUpperCase();
});
app.get("/", (req, res) => {
    res.render("home.hbs", {
        welcomeMessage: "Hi! This is your home page.",
        pageTitle: "welcome to your home page!",
        currentYear: new Date().getFullYear()
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        welcomeMessage: "Hi! This is your about page.",
        currentYear: new Date().getFullYear()
    });
});


console.log("Starting server!");
app.listen(port);