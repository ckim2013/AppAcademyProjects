class AlbumsController < ApplicationController

  def new
    @album = Album.new
    @band = Band.find_by(id: params[:band_id])
    @bands = Band.all
    render :new
  end

  def create
    @album = Album.new(album_params)
    @band = Band.find_by(id: params[:album][:band_id])
    @bands = Band.all
    if @album.save
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @band = @album.band
    if @album.destroy
      redirect_to band_url(@band)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :year, :band_id, :studio)
  end

end
