class CreateGermen < ActiveRecord::Migration[5.2]
  def change
    create_table :germen do |t|
      t.text :english
      t.text :german

      t.timestamps
    end
  end
end
