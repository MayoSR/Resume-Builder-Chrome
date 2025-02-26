function addBuildResumeButton(jobDesc) {
  let parentElement = document.querySelector('.jobs-save-button').parentNode;
  const el = document.createElement('div');
  const svgUrl = chrome.runtime.getURL('icons/icon-svg.svg');
  el.setAttribute('class', 'build-resume-button');
  Object.assign(el.style, {
    background: '#151515',
    color: 'white',
    fontSize: '14px',
    padding: '0px 10px',
    borderRadius: '5px',
    margin: '0px 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  });

  let imgIcon = document.createElement('img');
  imgIcon.src = svgUrl;
  imgIcon.style.width = '16px';
  imgIcon.style.height = '16px';
  imgIcon.style.marginRight = '5px';
  el.appendChild(imgIcon);
  el.appendChild(document.createElement('span')).innerText = 'Custom Resume';

  el.addEventListener('click', () => {
    // Change button style to indicate it's been clicked.
    el.style.background = '#333';

    // Create and show the snackbar at the top right.
    const snackbar = document.createElement('div');
    snackbar.innerText = 'Generating...';
    Object.assign(snackbar.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      zIndex: '1000',
      opacity: '0',
      transform: 'translateX(0)',
      transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
    });
    document.body.appendChild(snackbar);
    // Fade in the snackbar.
    setTimeout(() => {
      snackbar.style.opacity = '1';
    }, 100);

    // After 2 seconds, slide the snackbar sideways out and fade it.
    setTimeout(() => {
      snackbar.style.opacity = '0';
      snackbar.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(snackbar);
        el.style.background = '#151515';
      }, 500);
    }, 2000);

    const requestData = {
      documentId: null,
      fontFamily: null,
      companyName: document.querySelector('.job-details-jobs-unified-top-card__job-title a').innerText,
      jobDesc: jobDesc
    };

    // Retrieve both keys at once.
    chrome.storage.local.get(['documentId', 'fontFamily'], async function (result) {
      requestData.documentId = result.documentId || null;
      requestData.fontFamily = result.fontFamily || null;
      console.log('Retrieved data:', result);

      // Send the data to the Flask API.
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


function getLinkedInJobDescription(jobDesc){
    if(document.querySelector('.build-resume-button')) return;
    addBuildResumeButton(jobDesc);
}

{
    let linkedInJobInterval = setInterval(() => {
      
        const jobDesc = document.querySelectorAll('#job-details li')
        let descStr = ""
        jobDesc.forEach((li) => descStr += li.textContent)
        if (jobDesc) {
            getLinkedInJobDescription(descStr);
            clearInterval(linkedInJobInterval);
        }
    }, 1000);

}