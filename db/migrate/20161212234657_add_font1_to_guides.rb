class AddFont1ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :font1, :string
  end
end
