class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :title
      t.string :content
      t.string :nimg
      t.string :postdate
      t.string :from
      t.string :url

      t.timestamps null: false
    end
  end
end
