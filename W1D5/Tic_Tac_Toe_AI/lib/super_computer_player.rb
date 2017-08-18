require_relative 'tic_tac_toe_node'
require 'byebug'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    best_move = nil
    node = TicTacToeNode.new(game.board, mark)
    node.children.each do |child|
      best_move = child.prev_move_pos if child.winning_node?(mark)
    end

    if best_move.nil?
      node.children.each do |child|
        best_move = child.prev_move_pos unless child.losing_node?(mark)
      end
    end

    raise 'No winning or draw inducing move!' if best_move.nil?
    best_move
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
