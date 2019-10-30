module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :test_field, String, null: false
    field :all_earthquakes, [EarthquakeType], null: false,
      description: "returning all earthquake instances"

    def all_earthquakes
      Earthquake.all
    end

    def test_field
      "Hello"
    end
  end
end
