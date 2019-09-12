class ClientsController < ApplicationController
  def index
    @category = 'resources'
    @clients = Client.all
  end

  def new
    @category = 'resources'
  end
end
