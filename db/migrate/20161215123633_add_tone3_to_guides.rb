class AddTone3ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone3, :string
  end
end
