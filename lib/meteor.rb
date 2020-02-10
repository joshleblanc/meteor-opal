class Meteor
    class << self
        def server?
            meteor.isServer
        end

        def client?
            meteor.isClient
        end

        def cordova?
            meteor.isCordova
        end

        def development?
            meteor.isDevelopment
        end

        def production?
            meteor.isProduction
        end

        def startup
            meteor.startup do
                yield if block_given?
            end
        end

        def wrap_async(*args)
            meteor.wrapAsync(*args)
        end

        def defer
            meteor.defer do
                yield if block_given?
            end
        end

        def absolute_url(*args)
            meteor.absoluteUrl(*args)
        end

        def settings
            meteor.settings
        end

        def release
            meteor.release
        end

        def publish(name)
            meteor.publish(name) do
                yield.to_n if block_given?
            end
        end

        def subscribe(name, *params)
            meteor.subscribe(name, *params)
        end

        def methods(*args)
            meteor.methods(*args)
        end

        def call(*args)
            meteor.call(*args) do |err, res|
                yield err, res if block_given?
            end
        end

        private

        def meteor
            @@meteor ||= Native(`Meteor`)
        end
    end
end