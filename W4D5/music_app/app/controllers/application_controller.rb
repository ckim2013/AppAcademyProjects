class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out_user!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def require_login
    unless logged_in?
      flash[:errors] = ["You must be logged in to view this page!"]
      redirect_to new_session_url
    end
  end

end
