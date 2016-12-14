class AddRecipientEmailToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :recipient_email, :string
  end
end
