class AddRecipientNameToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :recipient_name, :string
  end
end
