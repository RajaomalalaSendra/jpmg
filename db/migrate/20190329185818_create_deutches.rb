class CreateDeutches < ActiveRecord::Migration[5.2]
  def change
    create_table :deutches do |t|
      t.text :english
      t.text :german
      t.text :malagasy

      t.timestamps
    end
  end
end
