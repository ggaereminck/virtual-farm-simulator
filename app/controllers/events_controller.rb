class EventsController < ApplicationController

    def index
        render json: Event.all
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    private

    def event_params
        params.permit(:name, :reward)
    end
end
