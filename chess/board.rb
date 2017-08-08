require_relative 'pieces'
require_relative 'errors'
require_relative 'display'


class Board
  attr_reader :grid
  def self.setup_board
    valid_rows = [0, 1, 6, 7]
    grid = Array.new(8) { Array.new(8) }
    grid.each.with_index do |row, i|
      if valid_rows.include?(i)
        row.map! { |spot| Piece.new }
      end
    end
  end


  def initialize
    @grid = Board.setup_board
  end

  def move_piece(start_pos, end_pos)
    begin
      raise NoPieceError if self[start_pos].nil?
      raise InvalidMoveError if self[end_pos]
    rescue NoPieceError
      puts 'No Piece selected'
    rescue InvalidMoveError
      puts "Piece can't move there!"
    end
    self[end_pos] = self[start_pos]
    self[start_pos] = NullPiece.new

  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, piece)
    x, y = pos
    @grid[x][y] = piece
  end

  def in_bounds?(new_pos)
    x, y = new_pos
    x.between?(0,7) && y.between?(0,7)
  end

  def render
    Display.new(@grid).render
  end

end
