const {
    app,
    BrowserWindow: e,
    globalShortcut: i
} = require("electron"), s = require("path"), t = require("url");
class n {
    constructor(n = 1200, r = 800, o = !0, l = !0, w = !1, c) {
        this._window = new e({
            width: n,
            height: r,
            frame: o,
            resizable: l,
            webPreferences: {
                nodeIntegration: !0,
                plugins: !0,
                webSecurity: !0,
                webviewTag: !0
            }
        }), this._window.loadURL(t.format({
            pathname: s.join(__dirname, `../views/${c}.html`),
            protocol: "file:",
            slashes: !0,
            icon: s.join(__dirname, "../resources/img/icons/png/64x64.png")
        })), ["win32", "linux"].includes(process.platform) && this._window.removeMenu(), this._view = c, this._fullScreen = w, "home" === this._view && (this._window.on("closed", () => {
            i.unregisterAll()
        }))
    }
    getWindow() {
        return this._window
    }
    getView() {
        return this._view
    }

    // Fullscreen
    toggleFullScreen() {
        this._fullScreen = !this.getFullScreen(), this._window.setFullScreen(this._fullScreen)
    }
    getFullScreen() {
        return this._fullScreen
    }

    // Zoom
    toggleZoomIn() {
        if (this.getZoom() < 3) {
            this._window.webContents.setZoomFactor(this.getZoom() + 0.01);
        }
    }
    toggleZoomOut() {
        if (this.getZoom() > 0.3) {
            this._window.webContents.setZoomFactor(this.getZoom() - 0.01);
        }
    }
    getZoom() {
        return this._window.webContents.getZoomFactor();
    }

    // Clear Cache
    clearCache() {
        let session = this._window.webContents.session;
        session.clearCache();
        app.relaunch();
        app.exit();
    }
    close() {
        this._window.close()
    }
}
module.exports = n;