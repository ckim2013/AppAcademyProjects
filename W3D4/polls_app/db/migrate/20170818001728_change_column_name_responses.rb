class ChangeColumnNameResponses < ActiveRecord::Migration[5.1]
  def change
    rename_column :responses, :answer_id, :answer_choice_id
  end
end
