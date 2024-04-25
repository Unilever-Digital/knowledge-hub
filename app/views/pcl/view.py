from flask import (
    Blueprint,
    render_template,
    request,
    jsonify
)
from app.models.dbmodel import *
from app.controls.control import *
from app.utils.function import *

pcl = Blueprint("pcl", __name__)


@pcl.route("/deoc_trend_pcl")
def deoc_trend_pcl():
    pass


@pcl.route("/deoc_line_trend_pcl")
def deoc_line_trend_pcl():
    pass


@pcl.route("/deoc_sku_trend_pcl")
def deoc_sku_trend_pcl():
    pass




    