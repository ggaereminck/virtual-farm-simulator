class StoreCropsController < ApplicationController

    def index
        render json: StoreCrop.all
    end

    def show
        store_crop = StoreCrop.find(params[:id])
        render json: store_crop, status: :ok
    end

    def create
        store_crop = StoreCrop.create!(store_crop_params)
        render json: store_crop, status: :created
    end

    def destroy
        store_crop = StoreCrop.find(params[:id])
        store_crop.destroy
    end

    def update
        store_crop = StoreCrop.find(params[:id])
        store_crop.update(store_crop_params)
        render json: store_crop
    end

    private

    def store_crop_params
        params.permit(:name, :grow_time, :cost, :sale_value, :img, :store_id)
    end

end
