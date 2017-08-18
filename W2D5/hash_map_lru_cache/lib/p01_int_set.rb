class MaxIntSet
  def initialize(max)
    @max = max
    @store = []
  end

  def insert(num)
    validate!(num)
    @store[num] = true
  end

  def remove(num)
    validate!(num)
    @store[num] = false
  end

  def include?(num)
    validate!(num)
    return false unless @store[num]
    true
  end

  private

  def is_valid?(num)
    num.between?(0, @max)
  end

  def validate!(num)
    raise 'Out of bounds' unless is_valid?(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket = self[num]
    @store[bucket] << num unless include?(num)
  end

  def remove(num)
    bucket = self[num]
    @store[bucket].delete(num)
  end

  def include?(num)
    bucket = self[num]
    @store[bucket].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    num % num_buckets
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    unless include?(num)
      bucket = self[num]
      @store[bucket] << num
      @count += 1
    end
    resize! if @count == num_buckets
  end

  def remove(num)
    bucket = self[num]
    @store[bucket].delete(num)
  end

  def include?(num)
    bucket = self[num]
    @store[bucket].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    num % num_buckets
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_array = Array.new(num_buckets * 2) { Array.new }
    @store.each do |bucket|
      bucket.each do |el|
        new_bucket = el % new_array.length
        new_array[new_bucket] << el
      end
    end
    @store = new_array
    # @count = 0
  end
end
