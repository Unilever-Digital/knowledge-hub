from flask import (
    Flask,
    url_for,
    redirect,
    request,
    render_template
)
import os

    
def create_app(test_config=None):
    """ app init

    Args:
        test_config (_type_, optional): _description_. Defaults to None.

    Returns:
        app : Flask app
    """
    app = Flask(__name__, instance_relative_config=True)
    
    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
        app.config.from_mapping(SECRET_KEY='unilever',
                                CACHE_TYPE='FileSystemCache',
                                CACHE_DIR='cache',
                                CACHE_THRESHOLD=100000)
    else:
        app.config.from_mapping(test_config)
    from .views.view import blue_print
    from .views.event import event
    app.register_blueprint(blue_print)
    app.register_blueprint(event)

    from .models.dbmodel import db
    db.init_app(app)
    # ensure the instance folder exists 
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def main():
        return redirect(url_for('blue_print.login'))
    
    return app
