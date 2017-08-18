# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  pregunta   :text             not null
#  poll_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord

  validates :pregunta, :poll_id, presence: true

  belongs_to :poll,
  class_name: :Poll,
  primary_key: :id,
  foreign_key: :poll_id

  has_many :answer_choices,
  class_name: :AnswerChoice,
  primary_key: :id,
  foreign_key: :question_id

end
