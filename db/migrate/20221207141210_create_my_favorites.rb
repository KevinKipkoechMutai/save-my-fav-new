class CreateMyFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :my_favorites do |t|
      t.string :title
      t.string :category
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
