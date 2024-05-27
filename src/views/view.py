from flask import (
    Blueprint,
    render_template,
    request,
    jsonify,
    url_for,
    redirect
)
from src.models.dbmodel import *
from src.controls.control import *
from src.utils.function import *
from src.views.event import *

blue_print = Blueprint("blue_print", __name__)


@blue_print.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        if request.form.get('button') == "login":
            return redirect(url_for('event.home'))
    return render_template("login.html")

