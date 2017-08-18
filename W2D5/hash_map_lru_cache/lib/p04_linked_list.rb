require 'byebug'

class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key, @val = key, val
    @next, @prev = nil, nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    remove_from_next_prev if has_next_prev?
    remove_from_next if has_only_next?
    remove_from_prev if has_only_prev?
    become_alone
    self
  end

  private

  def has_next_prev?
    @next && @prev
  end

  def remove_from_next_prev
    @next.prev, @prev.next = @prev, @next
  end

  def has_only_next?
    @next && @prev.nil?
  end

  def remove_from_next
    @next.prev = nil
  end

  def has_only_prev?
    @next.nil? && @prev
  end

  def remove_from_prev
    @prev.next = nil
  end

  def become_alone
    @next, @prev = nil, nil
  end

end

class LinkedList
  include Enumerable

  def initialize
    @head, @tail = Node.new, Node.new
    @head.next, @tail.prev = @tail, @head
  end

# Returns node at a particular index
  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  # returns value of the key
  def get(key)
    each { |node| return node.val if node.key == key }
    nil
  end

  def include?(key)
    each { |node| return true if node.key == key }
    false
  end

  def append(key, val)
    # Append to the end of the list
    new_node = Node.new(key, val)
    empty? ? insert_empty_l(new_node) : insert_nonempty_l(new_node)
    new_node
  end

  def update(key, val)
    each { |node| node.val = val if node.key == key }
  end

  def remove(key)
    each do |node|
      if node.key == key
        node.remove
        break
      end
    end
    nil
  end

  def each(&prc)
    current_node = @head.next
    until current_node == @tail
      prc.call(current_node)
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end

  private

  def insert_empty_l(node)
    @head.next, @tail.prev = node, node
    node.prev, node.next = @head, @tail
  end

  def insert_nonempty_l(node)
    node.prev, node.next = @tail.prev, @tail
    @tail.prev.next, @tail.prev = node, node
  end

end
