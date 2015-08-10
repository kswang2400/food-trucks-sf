module Api
  class DataController < ApplicationController
    def index
      client = SODA::Client.new({:domain => "data.sfgov.org", :app_token => ENV["socrata_app_token"]})
      response = client.get("6a9r-agq8", 
        { "$limit" => 100, 
          "$where" => "latitude IS NOT NULL AND longitude IS NOT NULL" })
      
      if params[:query]

      end
      fail
      render json: response
    end
  end
end