class MeteorOpal
  class << self
    def mount(controller, element)
      controller.new(element)
    end
  end
end
