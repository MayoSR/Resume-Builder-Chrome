function addBuildResumeButton(){
    let parentElement = document.querySelector('.jobs-save-button').parentNode;
    const el = document.createElement('div');
    const svgUrl = chrome.runtime.getURL('icons/icon-svg.svg');
    el.setAttribute('class', 'build-resume-button');
    Object.assign(el.style, { background: '#151515', color: 'white', fontSize: '14px', padding: '0px 10px', borderRadius: '5px', margin: '0px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' });
    let imgIcon = document.createElement('img');
    imgIcon.src = svgUrl;
    imgIcon.style.width = '16px';
    imgIcon.style.height = '16px';
    imgIcon.style.marginRight = '5px';
    el.appendChild(imgIcon);
    el.appendChild(document.createElement('span')).innerText = 'Custom Resume';
    
    el.addEventListener('click', () => {
        const text = document.querySelector('#job-details').innerText;
        const requestData = {
          documentId: null,
          fontFamily: null,
          companyName: document.querySelector('.job-details-jobs-unified-top-card__company-name > a').innerText,
          jobDesc: text
        };
      
        // Retrieve both keys at once
        chrome.storage.local.get(['documentId', 'fontFamily'], async function(result) {
          requestData.documentId = result.documentId || null;
          requestData.fontFamily = result.fontFamily || null;
          console.log('Retrieved data:', result);
          // Send the data to the Flask API
          const apiUrl = "http://127.0.0.1:5000/process_lines"; // Flask API URL
          try {
            const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(requestData)
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const responseData = await response.json();
            console.log("Response from Flask:", responseData);
          } catch (error) {
            console.error("Error sending data:", error);
          }
        });
      });
    
      parentElement.appendChild(el);
      parentElement.appendChild(document.createElement('br'));
}

function getLinkedInJobDescription(){
    if(document.querySelector('.build-resume-button')) return;
    addBuildResumeButton();
}

{
    let linkedInJobInterval = setInterval(() => {
        const jobDesc = document.getElementById('job-details')
        if (jobDesc) {
            getLinkedInJobDescription();
            clearInterval(linkedInJobInterval);
        }
    }, 1000);

}