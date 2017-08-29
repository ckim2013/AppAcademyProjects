class Goal < ApplicationRecord
  validates :title, :body, :private, :completed, :user_id, presence: true
  belongs_to :user
  
end
