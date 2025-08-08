import os


BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY") or "zocketsecret"
    # Use an absolute path so the DB file is consistent regardless of CWD
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'db.sqlite3')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False