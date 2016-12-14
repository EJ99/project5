class AddTrelloToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :trello, :string
  end
end
