class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.text :quote
      t.string :context
      t.string :source
      t.string :theme

      t.timestamps
    end
  end
end
