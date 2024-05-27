from flask import (
    Blueprint,
    render_template,
    request,
    jsonify
)
from src.models.dbmodel import *
from src.controls.control import *
from src.utils.function import *

pcl = Blueprint("pcl", __name__)


@pcl.route("/deoc_trend_pcl", method = "POST")
def deoc_trend_pcl():
    conn = connectToMongoDB("Vision_Mas140")
    collection1 = conn["Table_ResultCarton"]
    collection2 = conn["Table_ResultCap"]
    
    pass


@pcl.route("/deoc_line_trend_pcl", method="POST")
def deoc_line_trend_pcl():
    pass


@pcl.route("/deoc_sku_trend_pcl",  method="POST")
def deoc_sku_trend_pcl():
    pass




    