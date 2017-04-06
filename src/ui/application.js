const Gtk = imports.gi.Gtk

function headerbar(){
  let headerbar = new Gtk.HeaderBar()
  headerbar.set_title("HeaderBar")
  //headerbar.set_subtitle("With Subtitle")
  headerbar.set_show_close_button(true)
  headerbar.set_vexpand(false)
  return headerbar
}

export default class Application {
  
  constructor() {
    this.application = new Gtk.Application({
      application_id: 'com.example.newapp'
    })

    this.application.connect('startup', this._startup.bind(this))
    this.application.connect('activate', this._activate.bind(this))
  }

  _startup() {
    this.buildUI()
  }

  _activate() {
    this.window.present()
  }

  buildUI() {
    this.window = new Gtk.ApplicationWindow({
      application: this.application,
      window_position: Gtk.WindowPosition.CENTER,
      default_height: 600,
      default_width: 600
    })
    this.window.set_titlebar(headerbar())

    this.window.show_all()
  }
}
