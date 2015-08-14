module Api
  class DataController < ApplicationController
    def index
      client = SODA::Client.new({:domain => "data.sfgov.org", :app_token => ENV["socrata_app_token"]})

      if params[:location]
        lat = params[:location][:latitude].to_f
        long = params[:location][:longitude].to_f
        # KW: doesn't factor in distance, just returns the first 25 trucks in the search area
        # Also, there seems to be a lot of repeats, should trim those out
        query_string = "latitude > #{lat - 0.01} AND latitude < #{lat + 0.01} AND longitude > #{long - 0.01} AND longitude < #{long + 0.01}"

        response = client.get("6a9r-agq8",
          { "$limit" => 25,
            "$where" => query_string,
            :status => "APPROVED"
          })

        response = "No trucks near there, where you at?" if response.empty?
      else
        response = "No trucks near there, where you at?" 
      end

      render json: response
    end
  end
end