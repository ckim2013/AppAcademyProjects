# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
  RENTAL_STATUS = %w(PENDING APPROVED DENIED)

  validates :cat_id, :start_date, :end_date, :status, presence: true

  validates :status, inclusion: { in: RENTAL_STATUS,
     message: "Cat must be in one of three states"}

  belongs_to :cat,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: 'Cat'

  def overlapping_requests
    s_date = self[:start_date]
    e_date = self[:end_date]

    CatRentalRequest
      .where('cat_id = ? AND start_date BETWEEN ? AND ? OR end_date BETWEEN ? AND ?', self[:cat_id], e_date, s_date, e_date, s_date)
      # Need to be an or in here.
  end





end
