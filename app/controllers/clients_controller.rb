class ClientsController < ApplicationController
  def index
    @category = 'resources'
    @clients = Client.all
  end

  def new
    @category = 'resources'
    @client = Client.new
  end

  def show
  end

  def create
    client = Client.new(client_params)
    if client.save!
      redirect_to client_path(client), notice: "Client #{client.name} created!"
    else
      flash[:alert] = "Error!"
      render :new
    end
  end

  private

  def client_params
    params.require(:client).permit(:name)
  end
end
