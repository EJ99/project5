class AddIconToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :icon, :string
  end
end
