class AddUrl2ToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :url2, :string
  end
end
