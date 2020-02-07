$meteor = `Meteor`

class Meteor
  def self.server?
    `Meteor.isServer`
  end

  def self.client?
    `Meteor.isClient`
  end

  def self.publish(name, &block)
    $meteor.JS.publish(name, block)
  end

  def self.subscribe(name, *params)
    $meteor.JS.subscribe(name, *params)
  end
end