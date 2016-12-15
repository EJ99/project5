class AddTone7ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :tone7, :string
  end
end
