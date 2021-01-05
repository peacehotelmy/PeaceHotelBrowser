const {
    Menu: e
} = require("electron"), u = [{
    label: "Quit Peace Hotel Browser",
    submenu: [{
        role: "quit"
    }]
}];
module.exports = e.buildFromTemplate(u);