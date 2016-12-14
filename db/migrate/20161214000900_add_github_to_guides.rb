class AddGithubToGuides < ActiveRecord::Migration[5.0]
  def change
    add_column :guides, :github, :string
  end
end
