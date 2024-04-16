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

@blog.route("/qltdata/table_data/push")
def table_data_push():
    columns = getColumns("Table_Data")
    tableToAppEngineSTN("DESKTOP-DGEHS9H","U-CheckDate-Barcode", "Table_Data", columns)
    

@blog.route("/qltdata/table_product/push")
def table_product_push():
    columns = getColumns("Table_Product")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_Product", columns)


@blog.route("/qltdata/table_imagefail_cap1/push")
def table_imagefail_cap1_push():
    columns = getColumns("Table_ImageFail_Cap1")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_Cap1", columns)


@blog.route("/qltdata/table_imagefail_cap2/push")
def table_imagefail_cap2_push():
    columns = getColumns("Table_ImageFail_Cap2")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_Cap2", columns)


@blog.route("/qltdata/table_imagefail_lo1/push")
def table_imagefail_lo1_push():
    columns = getColumns("Table_ImageFail_LO1")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_LO1", columns)
    

@blog.route("/qltdata/table_imagefail_lo2/push")
def table_imagefail_lo2_push():
    columns = getColumns("Table_ImageFail_LO2")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_LO2", columns)
    

@blog.route("/qltdata/table_imagefail_barcode/push")
def table_imagefail_barcode_push():
    columns = getColumns("Table_ImageFail_Barcode")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_Barcode", columns)


@blog.route("/qltdata/table_imagefail_datecode/push")
def table_imagefail_datecode_push():
    columns = getColumns("Table_ImageFail_DateCode")
    tableToAppEngineSTN("DESKTOP-DGEHS9H",
                        "U-CheckDate-Barcode", "Table_ImageFail_DateCode", columns)

