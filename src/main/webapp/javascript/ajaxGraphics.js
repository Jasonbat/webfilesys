function ajaxRotate(path, degrees, domId)
{
    hideMenu();

    var xmlUrl = '/webfilesys/servlet?command=xformImage&action=rotate&degrees=' + degrees + '&imgName=' + encodeURIComponent(path) + '&domId=' + domId;

    var xslUrl = "/webfilesys/xsl/transformImageResult.xsl";

    var newHtml = browserXslt(xmlUrl, xslUrl);
    
    var tdElement = document.getElementById(domId);
        
    if (!tdElement)
    {
        alert('td element with DOM id ' + domId + ' not found');
        return;
    }
    
    tdElement.innerHTML = newHtml;
}

function checkLossless(path)
{
    var xmlUrl = '/webfilesys/servlet?command=checkLossless&imgPath=' + encodeURIComponent(path);

    var responseXml = xmlRequestSynchron(xmlUrl);
    
    var losslessItem = responseXml.getElementsByTagName("lossless")[0];            
    var lossless = losslessItem.firstChild.nodeValue;
                 
    if (lossless == "true")
    {
        return(true);
    }
    
    return(false);
}
