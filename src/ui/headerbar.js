const Gtk = imports.gi.Gtk

export default class HeaderBar {
    constructor(data = {}) {
        this._headerbar = new Gtk.HeaderBar()
        Object.assign(this._headerbar, data);
    }

    set title(tit) {
        //TODO set custom title if widget
        this._headerbar.set_title(tit)
    }

    get title() { return this._headerbar.get_title() }

    set subtitle(sub) {
        this._headerbar.set_subtitle(sub)
    }

    get subtitle() { return this._headerbar.get_subtitle() }
}