class MyFavoritesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
skip_before_action :authorize, only: [:index]

    def index
        my_favorite = MyFavorite.all
        render json: my_favorite, status: :ok
    end

    def show
        my_favorite = find_by_id
        if my_favorite
        render json: my_favorite, status: :ok
        else
           render_not_found_response
        end
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

    def render_not_found_response
        render json: {error: "Not found"}, status: :not_found
    end

    def fav_params
        params.permit(:title, :category, :description, :image_url)
    end

    def unprocessable_entity(exception)
        render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
