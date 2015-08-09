
class DataController < ApplicationController
  def index
    client = SODA::Client.new({:domain => "https://data.sfgov.org/resource/rqzj-sfat.json", :app_token => ENV["socrata_app_token"]})
    
    render json: client
  end
end
