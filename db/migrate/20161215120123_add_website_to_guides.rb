class AddWebsiteToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :website, :string
  end
end
