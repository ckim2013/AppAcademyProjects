class PostsController < ApplicationController
  before_action :ensure_right_author, only: [:update, :edit, :destroy]

  def new
    render :new
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
    render :edit
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub)
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end

  def ensure_right_author
    @post = Post.find_by(id: params[:id])
    unless @post.author_id == current_user.id
      render json: "Forbidden you fool"
    end
  end
end
