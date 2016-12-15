class AddTone6ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone6, :string
  end
end
