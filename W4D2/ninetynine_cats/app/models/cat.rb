class Cat < ApplicationRecord

  validates :name, :birth_date, :color, :sex, presence: true

  validates :color, inclusion: CAT_COLORS
  validates :sex, inclusion: SEX

  CAT_COLORS = %w{black white brown orange yellow}
  SEX = %w{M F}

  def age

  end

end
