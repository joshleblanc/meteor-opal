class Tracker
  class << self
    def autorun(opts = {}, &blk)
      tracker.autorun(blk, opts)
    end

    private

    def tracker
      @tracker ||= Native(`Tracker`)
    end
  end
end