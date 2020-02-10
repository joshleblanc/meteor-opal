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

        def publish(name, &block)
            meteor.publish(name, block)
        end

        def subscribe(name, *params)
            meteor.subscribe(name, *params)
        end

        private

        def meteor
            @@meteor ||= Native(`Meteor`)
        end
    end
end