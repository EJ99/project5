class AddUidToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :uid, :string
  end
end
