from flask import (
    Blueprint,
    render_template,
    request,
    jsonify,
    url_for,
    redirect
)
from app.models.dbmodel import *
from app.controls.control import *
from app.utils.function import *
from app.views.event import *

blue_print = Blueprint("blue_print", __name__)


@blue_print.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        if request.form.get('button') == "login":
            return redirect(url_for('event.home'))
    return render_template("login.html")

