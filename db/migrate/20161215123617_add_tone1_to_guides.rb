class AddTone1ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone1, :string
  end
end
