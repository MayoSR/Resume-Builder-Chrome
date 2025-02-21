document.addEventListener("DOMContentLoaded", () => {

    let setKeys = [
        'documentId',
        'fontFamily'
    ];

    setKeys.forEach((key) => {
        chrome.storage.local.get(key, function(result) {
            if ( result[key]) {
            document.getElementById(key).value = result[key];
            } else {
            console.log('No data found.');
            }
        });
    });

    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", () => {
        chrome.storage.local.set({ documentId: document.getElementById('documentId').value ,fontFamily: document.getElementById('fontFamily').value }, function() {
            console.log("Data Saved",chrome.storage.local);
          });
    });
    
  });
  