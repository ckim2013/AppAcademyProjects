class Tile
  attr_accessor :value
  attr_reader :given

  def initialize(value)
    @value = value
    @given = given?
  end

  def given?
    @value != 0
  end


end
