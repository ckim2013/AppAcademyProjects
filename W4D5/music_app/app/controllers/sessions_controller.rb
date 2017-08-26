class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user.nil?
      flash.now[:errors] = ["Invalid username or password!"]
      render :new
    else
      log_in_user!(@user)
      redirect_to user_url(@user)
    end
  end

  def destroy
    log_out_user!
    redirect_to new_session_url
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
