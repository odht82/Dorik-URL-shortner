function CopyLongOut() {
    const copyText = document.getElementById('longOutlnk');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    SpeechRecognitionAlternative('Copied to clipboard ' + copyText.value);
}
function CopyShortOut() {
    const copyText = document.getElementById('longOutlnk');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    SpeechRecognitionAlternative('Copied to clipboard ' + copyText.value);
}