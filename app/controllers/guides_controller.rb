class GuidesController < ApplicationController

  def index
    @guides = Guide.all
  end

  def new
    @guide = Guide.new
    @guide.title = ""
    @guide.description = ""
    @guide.url = ""
    @guide.author = ""
    @guide.colour1 = ""
    @guide.colour2 = ""
    @guide.colour3 = ""
    @guide.colour4 = ""
    @guide.font1 = ""
    @guide.font2 = ""
    @guide.logo = ""
    @guide.github = ""
    @guide.trello = ""
    @guide.icon = ""
    @guide.recipient_email = ""
    @guide.recipient_name = ""
    @guide.image = ""
    @guide.website = ""
    @guide.tone1 = ""
    @guide.tone2 = ""
    @guide.tone3 = ""
    @guide.tone4 = ""
    @guide.tone5 = ""
    @guide.tone6 = ""
    @guide.tone7 = ""


  end

  def create
    @guide = Guide.new
    @guide.title = params[:title]
    @guide.description = params[:description]
    @guide.author = params[:author]
    @guide.colour1 = params[:colour1]
    @guide.colour2 = params[:colour2]
    @guide.colour3 = params[:colour3]
    @guide.colour4 = params[:colour4]
    @guide.font1 = params[:font1]
    @guide.font2 = params[:font2]
    @guide.github = params[:github]
    @guide.trello = params[:trello]
    @guide.icon = params[:icon]
    @guide.recipient_email = params[:recipient_email]
    @guide.recipient_name = params[:recipient_name]
    @guide.image = params[:image]
    @guide.website = params[:website]
    @guide.tone2 = params[:tone2]
    @guide.tone3 = params[:tone3]
    @guide.tone4 = params[:tone4]
    @guide.tone5 = params[:tone5]
    @guide.tone6 = params[:tone6]
    @guide.tone7 = params[:tone7]
    @guide.uid = SecureRandom.urlsafe_base64

    if @guide.save
      GuideMailer.send_guide(@guide).deliver
      redirect_to "/guides/#{@guide.uid}"
    else
      render :new
    end
  end

  # def show
  #   @guide = Guide.find(params[:id])
  # end

  def hey
    @guide = Guide.find_by(uid: params[:uid])
    render :show
  end


  def success
    render :success
  end



end
