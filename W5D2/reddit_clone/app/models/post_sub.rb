# == Schema Information
#
# Table name: post_subs
#
#  id         :integer          not null, primary key
#  sub_id     :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PostSub < ApplicationRecord
  validates :sub, :post, presence: true
  validates :sub, uniqueness: { scope: :post }

  belongs_to :sub
  belongs_to :post
end
