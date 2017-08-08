require_relative 'board'
require_relative 'cursor'
require 'colorize'

class Display
  def initialize(board, cursor)
    @board = board
    @cursor = cursor
  end

  def render
    cursor_pos = @cursor.cursor_pos
    @board.grid.each.with_index do |row, i|
      row.each.with_index do |spot, j|
        if spot.nil?
          print [i, j] == cursor_pos ? ' _ '.colorize(:red) : ' _ '
        else
          print [i, j] == cursor_pos ? ' P '.colorize(:red) : ' P '
        end
      end
      puts "\n"
    end
    nil
  end

  def display_board
    render
    while true
      var = @cursor.get_input
      system('clear')
      Display.new(@board, @cursor).render
    end
  end

end
