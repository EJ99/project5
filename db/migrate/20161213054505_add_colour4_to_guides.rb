class AddColour4ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :colour4, :string
  end
end
