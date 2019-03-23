class CreateSentences < ActiveRecord::Migration[5.2]
  def change
    create_table :sentences do |t|
      t.text :english
      t.text :french
      t.text :malagasy

      t.timestamps
    end
  end
end
