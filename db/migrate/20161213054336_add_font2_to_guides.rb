class AddFont2ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :font2, :string
  end
end
