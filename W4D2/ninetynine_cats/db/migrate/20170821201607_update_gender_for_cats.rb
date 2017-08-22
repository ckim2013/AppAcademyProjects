class UpdateGenderForCats < ActiveRecord::Migration[5.1]
  def change
    change_column :cats, :sex, :string, limit: 2, null: false
  end
end
