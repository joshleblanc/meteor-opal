class MeteorOpal
  class << self
    def mount(controller, element)
      controller.new.render(element)
    end
  end
end