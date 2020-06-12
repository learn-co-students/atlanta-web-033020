class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :img
      t.references :user

      t.timestamps
    end
  end
end
