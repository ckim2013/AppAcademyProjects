# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :subs, :author, presence: true

  has_many :post_subs, inverse_of: :post, dependent: :destroy

  has_many :subs, through: :post_subs

  has_many :comments

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
