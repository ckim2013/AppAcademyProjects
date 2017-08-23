class ArtworkSharesController < ApplicationController

  def create
  end

  def destroy
  end

  private
  def artwork_share_params
    params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
  end
end
