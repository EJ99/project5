class AddColour3ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :colour3, :string
  end
end
