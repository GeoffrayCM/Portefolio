from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import get_jwt_identity, jwt_required

from app.services import facade


api = Namespace(
    "scores",
    description="Scores operations"
)

score_model = api.model("Score", {
    "game_id": fields.String(required=True, description="Game id"),
    "value": fields.Integer(required=True, description="Score value")
})


@api.route("/")
class ScoreList(Resource):
    """Scores list resource."""

    @api.expect(score_model)
    @jwt_required()
    def post(self):
        """Submit a score for the authenticated user."""
        data = api.payload

        try:
            score = facade.submit_score(
                get_jwt_identity(),
                data.get("game_id"),
                data.get("value")
            )
        except (TypeError, ValueError) as error:
            return {"error": str(error)}, 400

        return score.to_dict(), 201


@api.route("/game/<string:game_id>/leaderboard")
class GameLeaderboard(Resource):
    """Game leaderboard resource."""

    def get(self, game_id):
        """Return leaderboard for a game."""
        try:
            leaderboard = facade.get_leaderboard(game_id)
        except ValueError as error:
            return {"error": str(error)}, 404

        return [
            {
                "rank": index + 1,
                **score.to_dict()
            }
            for index, score in enumerate(leaderboard)
        ], 200
