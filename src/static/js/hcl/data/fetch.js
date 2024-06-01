async function serviceDataPo2TableImageFail() {
    const data = await fetch("https://knowledge-hub-oietm.appengine.bfcplatform.vn/vision/hcl/po2/imagefail", () => {
        method: 'POST',
        headers: '',
        body: { message },
    });
}