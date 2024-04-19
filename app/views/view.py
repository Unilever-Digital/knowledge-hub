from flask import (
    Blueprint,
    render_template,
    request,
    jsonify
)
from app.models.dbmodel import *
from app.controls.control import *
from app.utils.function import *

blog = Blueprint("blog", __name__)


#@blog.route("/qltdata/table_imagefail_datecode/push")
# def table_imagefail_datecode_push():
#    columns = getColumns("Table_ImageFail_DateCode")
 #   tableToAppEngineSTN("DESKTOP-DGEHS9H",
  #                      "U-CheckDate-Barcode", "Table_ImageFail_DateCode", columns)

