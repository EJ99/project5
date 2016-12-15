class AddTone4ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone4, :string
  end
end
