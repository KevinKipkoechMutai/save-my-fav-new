class MyFavoritesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        my_favorite = MyFavorite.all
        render json: my_favorite
    end

    def show
        my_favorite = find_by_id
        render json: my_favorite
    end

    def create
        my_favorite = MyFavorite.create!(fav_params)
        render json: my_favorite, status: :created
    end

    def update
        find_by_id.update!(fav_params)
        render json: find_by_id, status: :accepted
    end

    def destroy
        my_favorite = find_by_id.destroy
        head :no_content
    end

    private
    def find_by_id
        MyFavorite.find_by(id: params[:id])
    end

    def render_not_found_response(exception)
        render json: {error: "Not found"}, status: :not_found
    end

    def fav_params
        params.permit(:title, :category, :description, :image_url)
    end

end
