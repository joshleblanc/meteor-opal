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

    def find_one(*args)
      collection.findOne(*args)
    end

    def insert(*args)
      collection.insert(*args) do |err, res|
        yield err, res if block_given?
      end
    end

    def upsert(*args)
      collection.upsert(*args) do |err, res|
        yield err, res if block_given?
      end
    end

    def remove(*args)
      collection.remove(*args) do |err, res|
        yield err, res if block_given?
      end
    end

    def update(*args)
      collection.update(*args) do |err, res|
        yield err, res if block_given?
      end
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