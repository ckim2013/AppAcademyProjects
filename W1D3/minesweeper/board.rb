require_relative 'square'

class Board

  def initialize(grid = Board.empty_grid)
    @grid = grid
  end

  def self.empty_grid
    Array.new(2) { Array.new(2) }
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def populate_board
    @grid.map! do |row|
      row.map { |el| Square.new }
    end
  end

  def place_bombs(bombs)
    until bombs == 0
      x, y = rand(2), rand(2)
      square = self[[x,y]]
      next if square.is_bomb?
      square.set_bomb
      bombs -= 1
    end
  end

end
