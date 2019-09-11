class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :url, null: false

      t.timestamps
    end

    add_reference :tracks, :campaign, index: true
    add_reference :tracks, :client, index: true
  end
end
