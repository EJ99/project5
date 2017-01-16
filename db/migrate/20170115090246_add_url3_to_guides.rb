class AddUrl3ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :url3, :string
  end
end
