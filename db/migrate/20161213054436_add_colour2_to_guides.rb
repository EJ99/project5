class AddColour2ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :colour2, :string
  end
end
