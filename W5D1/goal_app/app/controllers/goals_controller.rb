class GoalsController < ApplicationController

  def create
  end

  def update
  end

  def destroy
  end

  def show
    @goal = Goal.find(params[:id])
    render :show
  end

  private
  def goal_params
    params.require(:goal).permit(:title, :body, :private, :completed)
  end
end
