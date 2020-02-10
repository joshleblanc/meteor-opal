require 'erb'

class Controller
  @@templates =  {}

  def render(element)
    Tracker.autorun do
      track
      html = template.render self
      element.JS[:innerHTML] = html
    end
  end

  def self.template(path)
    @@templates[self.name] = path
  end

  def self.template_for(name)
    Template[@@templates[name]]
  end

  private

  def template
    Controller.template_for self.class.name
  end
end