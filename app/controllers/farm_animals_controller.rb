class FarmAnimalsController < ApplicationController

    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: FarmAnimal.all
    end

    def show
        farm_animal = FarmAnimal.find(params[:id])
        render json: farm_animal, status: :ok
    end

    def create
        farm_animal = FarmAnimal.create!(farm_animal_params)
        render json: farm_animal, status: :created
    end

    def destroy
        farm_animal = FarmAnimal.find(params[:id])
        farm_animal.destroy
    end

    def update
        farm_animal = FarmAnimal.find(params[:id])
        farm_animal.update(farm_animal_params)
        render json: farm_animal
    end

    private

    def farm_animal_params
        params.permit(:name, :harvest_value, :img, :farm_id, :good_produced)
    end

end
