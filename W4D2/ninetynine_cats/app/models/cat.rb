# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
  CAT_COLORS = %w(black brown orange grey)
  CAT_SEX = %w(M F)

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :sex, inclusion: { in: CAT_SEX,
      message: "%{value} is not a valid gender" }
  validates :color, inclusion: { in: CAT_COLORS,
      message: "%{value} is not a valid color" }

  def age
    Time.now.year - self[:birth_date].year
  end

  has_many :cat_rental_requests,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: 'CatRentalRequest',
    dependent: :destroy


end
