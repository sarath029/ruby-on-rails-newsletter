class Api::V1::TopicsController < ApplicationController
    def index
        topics = Topic.all
        render json: TopicSerializer.new(topics, options).as_json
    end

    def show
        topic = Topic.find_by(permalink: params['permalink'])
        render json: TopicSerializer.new(topic, options).as_json
    end

    def create
        topic = Topic.new(topic_params)
    
        if topic.save
            render json: TopicSerializer.new(topic).as_json
        else
            render json: {error: topic.error.messages}, status: 422
        end
    end

    def update
        topic = Topic.new(topic_params)
    
        if topic.update
            render json: TopicSerializer.new(topic, options).as_json
        else
            render json: {error: topic.error.messages}, status: 422
        end
    end

    def destroy
        topic = Topic.new(topic_params)
    
        if topic.destroy
            render json: {}, status: 200
        else
            render json: {error: topic.error.messages}, status: 422
        end
    end

    private
    
    def topic_params
        params.require(:topic).permit!
    end

    def options
        @options ||= {include: %i(comments)}
    end
    
end
