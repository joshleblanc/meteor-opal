class Collection
  @@collections = {}

  class << self

    def inherited(klass)
      name = klass.name
      collections[name] = Native(JS.new(`Mongo.Collection`, name))
    end

    def find(*args)
      collection.find(*args)
    end

    private
    def collections
      @@collections
    end

    def collection
      collections[self.name]
    end
  end

end