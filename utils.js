function updateExploitsMessage(message) {
    window.exploitsMessage.innerHTML = message;
}

function updateCacheProgress(e) {
    const percentage = Math.round((e.loaded / e.total) * 100);
    updateExploitsMessage("Offline cache installation progress: " + percentage + "%");
}

function onCacheInstallation() {
    updateExploitsMessage("Cache installation finished successfully !<br>You can now close and re-open your browser");
}

function loadPayload(payloadSrc, payloadLoadedMsg) {
    PayloadLoadedMsg = payloadLoadedMsg;

    var script = document.createElement('script');
    script.src = payloadSrc;
    document.getElementsByTagName('head')[0].appendChild(script);

    var script = document.createElement('script');
    script.src = "exploits/exploit_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}
