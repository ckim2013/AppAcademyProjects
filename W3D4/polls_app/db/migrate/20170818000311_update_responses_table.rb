class UpdateResponsesTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :responses, :user_id, :respondent_id
  end
end
