class AddTone2ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone2, :string
  end
end
