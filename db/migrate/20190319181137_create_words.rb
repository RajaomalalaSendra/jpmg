class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
      t.text :japanese
      t.text :malagasy

      t.timestamps
    end
  end
end
