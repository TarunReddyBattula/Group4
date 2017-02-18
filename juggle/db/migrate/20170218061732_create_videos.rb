class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :tags
      t.text :embeddedUrl
      t.string :name
      t.text :data

      t.timestamps
    end
  end
end
