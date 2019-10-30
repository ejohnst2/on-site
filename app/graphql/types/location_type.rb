module Types
  class LocationType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :latitude, Integer, null: false
    field :longitude, Integer, null: false

    def test_field
      "Hello World!"
    end

    def new_field
      "Goodbye World!"
    end
  end
end
