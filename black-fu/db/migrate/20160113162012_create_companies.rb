class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :ceo
      t.string :logo

      t.timestamps null: false
    end
  end
end
