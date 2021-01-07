class Api::V1::CommentsController < ApplicationController
    
    
    def create
        comment = Comment.new(comment_params)
    
        if comment.save
            render json: CommentSerializer.new(comment).as_json
        else
            render json: {error: comment.error.messages}, status: 422
        end
    end

    def update
        comment = Comment.new(comment_params)
    
        if comment.update
            render json: CommentSerializer.new(comment).as_json
        else
            render json: {error: comment.error.messages}, status: 422
        end
    end

    def destroy
        comment = Comment.new(comment_params)
    
        if comment.destroy
            render json: {}, status: 200
        else
            render json: {error: comment.error.messages}, status: 422
        end
    end

    private
    
    def comment_params
        params.require(:comment).permit!
    end
    
end
