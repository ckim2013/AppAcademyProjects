require_relative 'tic_tac_toe'
require 'byebug'
class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)

    if @board.over?
      return true if @board.winner != evaluator
      return false if @board.winner == evaluator || @board.winner.nil?
    end

    if @next_mover_mark == evaluator
      children.all? { |child| child.losing_node?(evaluator) }
    else
      children.any? { |child| child.winning_node?(@next_mover_mark) }
      # children.any? { |child| child.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    # byebug
    if @board.over?
      return @board.winner == evaluator
    end

    if @next_mover_mark == evaluator
      children.any? { |child| child.winning_node?(evaluator) }
    else
      children.all? { |child| child.winning_node?(evaluator) }
    end
  end

  def children
    children = []
    @board.rows.each.with_index do |row, row_i|
      row.each.with_index do |spot, spot_i|
        if spot.nil?
          next_board = @board.dup
          next_board[[row_i, spot_i]] = @next_mover_mark
          next_mark = @next_mover_mark == :x ? :o : :x
          children << TicTacToeNode.new(next_board, next_mark, [row_i, spot_i])
        end
      end
    end
    children
  end

  def display_children
    children.each do |child|
      child.board.render
    end
    nil
  end

  def render
    puts "The next marker is: #{@next_mover_mark}"
    @board.render
  end
end
#load 'lib/tic_tac_toe.rb'
# node = TicTacToeNode.new(Board.new, :o)
# node.board[[2,1]] = :o
# node.board[[1,0]] = :o
# node.board[[2,0]] = :x
# node.board[[0,1]] = :x
# node.board[[0,0]] = :x
# node.winning_node?(:x)
# Should be false.
