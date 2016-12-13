class GuidesController < ApplicationController

  def index
    @guides = Guide.all
    # render :index
  end

  def new
    @guide = Guide.new
    @guide.title = ""
    @guide.description = ""
    @guide.url = ""
    @guide.author = ""  #haven't created column for this yet
    @guide.colour1 =
    @guide.font1 = ""

  end

  def create
    guide = Card.new
    guide.title = params[:title]
    guide.description = params[:description]
    guide.url =
    guide.sender = params[:sender]

    if guide.save
      redirect_to '/'
    else
      render :new # just showing the template
    end
  end

  def show
    @guide = Guide.find_by(id: params[:id])
  end

  def success
    render :success
  end

end
