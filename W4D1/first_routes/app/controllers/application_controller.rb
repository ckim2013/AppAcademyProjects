class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save!
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: users.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user.destroy
      render json: user
    else
      render json: "Can't destroy user, too important!"
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end