require 'erb'
require 'securerandom'

class Controller
  @@templates =  {}

  def initialize(element)
    if element
      @element = element
    else
      @id = SecureRandom.uuid
    end
    Tracker.autorun do
      track
      element.JS[:innerHTML] = template.render self if element
    end
  end

  def html
    el = Native(`document`).createElement("div##{@id}")
    el[:innerHTML] = template.render self
    el[:outerHTML]
  end

  def render(controller)
    controller.html
  end

  def self.template(path)
    @@templates[self.name] = path
  end

  def self.template_for(name)
    Template[@@templates[name]]
  end

  def track
    # stub
  end

  private

  def element
    @element ||= Native(`document`).getElementById(@id)
  end

  def template
    Controller.template_for self.class.name
  end
end
