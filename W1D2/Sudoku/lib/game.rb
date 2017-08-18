require_relative 'board'
require_relative 'tile'

class Game

  def initialize(board)
    @board = board
  end

  def play
    puts 'Welcome to Sudoku!'
    until @board.solved?
      @board.render
      coord = get_coord
      value = get_val
      place_num
    end
    puts 'Congratulations on finishing Sudoku! Try a different Sudoku puzzle next.'
  end

  def get_coord
    begin
      puts 'Please provide coordinates in x, y format!'
      input = gets.split(',')
      coord = [input[0].to_i, input[1].to_i]
      raise 'Bad coordinates!' unless good_coord?(coord)
    rescue
      puts 'Bad coordinates! Please try again'
      retry
    end
    coord
  end

  def get_value

  end

  def good_coord?(input)
    return false if input.count > 2
    return false unless input.first.between?(1, 9) && input.last.between?(1, 9)
    true
  end

  def good_value?(value)

  end

  def place_num

  end

end
