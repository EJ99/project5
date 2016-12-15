class AddTone5ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone5, :string
  end
end
