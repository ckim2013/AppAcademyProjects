require_relative 'tile'
require 'colorize'

class Board
  attr_reader :grid

  def initialize(puzzle_file = 'sudoku1.txt')
    @grid = Board.from_file(puzzle_file)
  end

  def self.from_file(puzzle_file)
    rows = File.readlines(puzzle_file)
    rows.map! do |line|
      line.chomp!("\n")
      line.chars.map(&:to_i)
    end
    rows.map! do |line|
      line.map { |num| Tile.new(num) }
    end
    rows
  end

  def [](pos)
    x, y = pos
    @grid[x][y].value
  end

  def []=(pos, num)
    x, y = pos
    @grid[x][y].value = num
  end

  def solved?
    rows_solved? && columns_solved?
  end


  # private

  def render
    print "  1  2  3  4  5  6  7  8  9\n".colorize(:blue)
    @grid.each.with_index do |row, row_i|
      print "#{row_i + 1}".colorize(:blue)
      row.each { |tile| print colorized(tile.value, tile.given) }
      puts "\n"
    end
    nil
  end

  def colorized(value, given)
    if value == 0
      ' _ '
    else
      given ? " #{value} ".colorize(:red) : " #{value} "
    end
  end

  def rows_solved?
    (0..8).each do |row_i|
      row = @grid[row_i].map(&:value)
      return false unless row.sort == (1..9).to_a
    end
    true
  end

  def columns_solved?
    (0..8).each do |col_i|
      columns = []
      @grid.each { |row| columns << row[col_i].value }
      return false unless columns.sort == (1..9).to_a
      columns = []
    end
    true
  end
end
