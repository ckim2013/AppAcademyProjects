class UpdateGenderAgainForCats < ActiveRecord::Migration[5.1]
  def change
    change_column :cats, :sex, :string, limit: 1, null: false
  end
end
