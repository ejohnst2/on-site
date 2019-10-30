module Types
  class QueryType < Types::BaseObject
    field :all_earthquakes, [EarthquakeType], null: false,
    description: 'returning all earthquake instances'

    def all_earthquakes
      Earthquake.all
    end
  end
end
