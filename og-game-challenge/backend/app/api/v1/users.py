from flask_restx import Namespace, Resource
from flask_jwt_extended import get_jwt_identity, jwt_required

from app.services import facade


api = Namespace(
    "users",
    description="Authenticated user operations"
)

@api.route("/<string:user_id>")
class UserResource(Resource):
    """Single user resource."""

    @jwt_required()
    def get(self, user_id):
        """Return the authenticated user's profile."""
        if get_jwt_identity() != user_id:
            return {"error": "access forbidden"}, 403

        user = facade.get_user(user_id)

        if not user:
            return {"error": "user not found"}, 404

        return user.to_dict(), 200
