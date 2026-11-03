import os
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")


def required_environment_variable(name):
    """Return a required secret without defining it in source code."""
    value = os.getenv(name)

    if not value:
        raise RuntimeError(
            f"Missing {name}. Copy .env.example to .env and set a private value."
        )

    return value


class Config:
    SECRET_KEY = required_environment_variable("SECRET_KEY")
    JWT_SECRET_KEY = required_environment_variable("JWT_SECRET_KEY")
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "sqlite:///og_game_challenge.db"
    )
