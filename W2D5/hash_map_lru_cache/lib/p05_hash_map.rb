require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  attr_reader :count
  include Enumerable

  def initialize(num_lists = 8)
    @store = Array.new(num_lists) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    current_list(key).include?(key)
  end

  def set(key, val)
    if include?(key)
      current_list(key).update(key, val)
    else
      current_list(key).append(key, val)
      @count += 1
    end
    resize! if @count == num_lists
  end

  def get(key)
    # debugger
    current_list(key).get(key)
  end

  def delete(key)
    if include?(key)
      removed = current_list(key).remove(key)
      @count -= 1
    end
    removed
  end

  def each(&prc)
    @store.each do |list|
      list.each { |node| prc.call(node.key, node.val) }
    end
  end

  # uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_lists
    @store.length
  end

  def resize!
    new_array = Array.new(num_lists * 2) { LinkedList.new }
    @store.each do |list|
      list.each do |node|
        list_id = node.key.hash % new_array.length
        new_array[list_id].append(node.key, node.val)
      end
    end
    @store = new_array
    # Do we actually reset the count after resizing?
    @count = 0
  end

  def list_id(key)
    # optional but useful; return the list corresponding to `key`
    key.hash % num_lists
  end

  def current_list(key)
    list_id = list_id(key)
    @store[list_id]
  end
end
