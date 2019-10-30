class CreateEarthquakes < ActiveRecord::Migration[5.2]
  def change
    create_table :earthquakes do |t|
      t.float :latitude
      t.float :longitude
      t.float :magnitude
      t.integer :code
      t.string :title
      t.string :details

      t.timestamps
    end
  end
end
