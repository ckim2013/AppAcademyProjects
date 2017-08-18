require_relative 'p05_hash_map'
require_relative 'p04_linked_list'
require 'byebug'
class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map.include?(key)
      # debugger
      refreshed_node = @map[key]
      update_node!(refreshed_node)
    else
      calc!(key)
    end
    @map[key].val
  end

  def to_s
    "Map: " + @map.to_s + "\n" + "Store: " + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    eject! if count == @max
    new_val = @prc.call(key)
    new_node = @store.append(key, new_val)
    @map[key] = new_node
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    key, val = node.key, node.val
    @store.remove(key)
    new_node = @store.append(key, val)
    @map[key] = new_node
  end

  def eject!
    removed_node = @store[0].remove
    @map.delete(removed_node.key)
  end
end
