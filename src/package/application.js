import hello from './hello'

const Gtk = imports.gi.Gtk

export default class Application {
  constructor() {
    this.application = new Gtk.Application({
      application_id: 'com.example.newapp'
    })

    this.application.connect('startup', this.onStartup.bind(this))
    this.application.connect('activate', this.onActivate.bind(this))
  }

  onStartup() {
    this.buildWindow()
  }

  onActivate() {
    this.window.present()
  }

  buildWindow() {
    this.window = new Gtk.ApplicationWindow({
      application: this.application,
      window_position: Gtk.WindowPosition.CENTER,
      default_height: 600,
      default_width: 600,
      title: hello()
    })

    let label = new Gtk.Label({
      label: hello()
    })
    this.window.add(label)

    this.window.show_all()
  }
}

