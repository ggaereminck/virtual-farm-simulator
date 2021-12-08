class FarmCropsController < ApplicationController

    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: FarmCrop.all
    end

    def show
        farm_crop = FarmCrop.find(params[:id])
        render json: farm_crop, status: :ok
    end

    def create
        farm_crop = FarmCrop.create!(farm_crop_params)
        render json: farm_crop, status: :created
    end

    def destroy
        farm_crop = FarmCrop.find(params[:id])
        farm_crop.destroy
    end

    def update
        farm_crop = FarmCrop.find(params[:id])
        farm_crop.update(farm_crop_params)
        render json: farm_crop
    end

    private

    def farm_crop_params
        params.permit(:name, :harvest_value, :img, :farm_id)
    end
end
