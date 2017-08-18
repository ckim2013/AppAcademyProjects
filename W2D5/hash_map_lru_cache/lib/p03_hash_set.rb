require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless include?(key)
      bucket = self[key]
      @store[bucket] << key
      @count += 1
    end
    resize! if @count == num_buckets
  end

  def include?(key)
    bucket = self[key]
    @store[bucket].include?(key)
  end

  def remove(key)
    bucket = self[key]
    if include?(key)
      @store[bucket].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    num.hash % num_buckets
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_array = Array.new(num_buckets * 2) { Array.new }
    @store.each do |bucket|
      bucket.each do |el|
        new_bucket = el.hash % new_array.length
        new_array[new_bucket] << el
      end
    end
    @store = new_array
    @count = 0
  end
end
