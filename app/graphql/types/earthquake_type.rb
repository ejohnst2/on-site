module Types
  class EarthquakeType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :details, String, null: false
    field :latitude, Integer, null: false
    field :longitude, Integer, null: false
  end
end
