class SubsController < ApplicationController
  before_action :ensure_moderator_status, only: [:update, :edit]
  # Check this is shit breaks

  def index
    @subs = Sub.all
    render :index
  end

  def new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def edit
    @sub = Sub.find_by(id: params[:id])
    render :edit
  end

  def update
    @sub = Sub.find_by(id: params[:id])
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
    end
  end

  private
  def sub_params
    params.permit(:sub).require(:title, :description)
  end

  def ensure_moderator_status
    @sub = Sub.find_by(id: params[:id])
    unless @sub.moderator_id == current_user.id
      render json: "Forbidden"
    end
  end

end
