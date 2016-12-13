class Rename < ActiveRecord::Migration[5.0]
  def change
     rename_column :guides, :colour, :colour1
  end
end
