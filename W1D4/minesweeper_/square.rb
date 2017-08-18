class Square

  attr_reader :flag, :bomb, :value

  def initialize
    @flag = false
    @bomb = false
    @value = nil
  end

  def flag
    @flag = @flag ? false : true
  end

  def is_bomb?
    @bomb
  end

  def set_bomb
    @bomb = true
  end

end
