require_relative 'board'
require_relative 'cursor'
require_relative 'errors'
require_relative 'game'
require_relative 'players'

module SlidingPiece
  def moves

  end

  def move_dirs

  end

  def horizontal_dirs
  end

  def diagonal_dirs
  end

  def grow_unblocked_moves_in_dir(dx, dy)

  end
end

module SteppingPiece

  def moves


  end

  def move_diffs
  end

end


class Piece
  def initialize

  end

  def move

  end
end

class NullPiece < Piece

end

class Rook < Piece
  include SlidingPiece

end

class Queen < Piece
  include SlidingPiece
end

class Bishop < Piece
  include SlidingPiece
end

class King < Piece
  include SteppingPiece
end

class Knight < Piece
  include SteppingPiece
end

class Pawn < Piece
end
