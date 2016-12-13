class AddLogoToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :logo, :string
  end
end
