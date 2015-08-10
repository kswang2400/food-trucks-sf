module Api
  class DataController < ApplicationController
    def index
      client = SODA::Client.new({:domain => "data.sfgov.org", :app_token => ENV["socrata_app_token"]})

      if params[:location]
        lat = params[:location][:latitude].to_f
        long = params[:location][:longitude].to_f
        query_string = "latitude > #{lat - 0.1} AND latitude < #{lat + 0.1} AND longitude > #{long - 0.1} AND longitude < #{long + 0.1}"
        
        response = client.get("6a9r-agq8",
          { "$limit" => 20,
            "$where" => query_string})

        response = "No trucks near there, where you at?" if response.empty?
      elsif
        response = client.get("6a9r-agq8", 
          { "$limit" => 20, 
            "$where" => "latitude IS NOT NULL AND longitude IS NOT NULL" })
      end

      render json: response
    end
  end
end