# Chrome Extension (Local Testing)

This repository contains a Chrome extension for local testing and development. Since it’s not published on the Chrome Web Store, you’ll need to load it manually in your browser. Follow the instructions below to install and use the extension locally.

---

## Prerequisites

- **Google Chrome** (or another Chromium-based browser that supports extensions).
- A copy of the extension's source files (either cloned or downloaded from this repository).
- The Google Doc with your resume. REMEMBER, this document MUST be a native Google Doc document. It **CANNOT** be a .docx file. 

---

## Installation Instructions

1. **Download or Clone the Repository**  
   - If you have Git installed, you can clone this repository using:
     ```bash
     git clone https://github.com/yourusername/your-extension-repository.git
     ```
   - Otherwise, download the ZIP file from the repository and extract it to a folder on your computer.

2. **Open the Extensions Page**  
   - In Google Chrome, go to:
     ```
     chrome://extensions
     ```
   - You can also access this by clicking the Chrome menu (three dots in the top-right corner) → **More Tools** → **Extensions**.
   - ![Screenshot 2025-02-23 153158](https://github.com/user-attachments/assets/7b305df3-9661-4383-8f49-4e17873921b4)


3. **Enable Developer Mode**  
   - On the Extensions page, toggle on **Developer mode** (usually in the top-right corner).

4. **Load Unpacked Extension**  
   - Click the **Load unpacked** button (or **Load unpacked extension** in some Chrome versions).
   - ![Screenshot 2025-02-23 153116](https://github.com/user-attachments/assets/3dcc0ded-c091-4744-8b55-02aa967e837d)
   - In the file chooser, select the folder containing your extension’s source files (the folder with the `manifest.json` file).

5. **Verify Installation**  
   - The extension should now appear in your list of installed extensions.
   - Click on the extensions logo on your navbar (last one). Find the black icon (second last one) and pin it, by hitting the pin icon.
   -  ![Screenshot 2025-02-23 165514](https://github.com/user-attachments/assets/72760027-45eb-48f5-82bd-4d576bd71209)
   - Your navbar should now look like the image above

---

## Usage

- **Extension Icon**: If your extension has a browser action or page action icon, it will appear in the top-right corner of your browser.
- Click it to open any popup UI and add your Google Doc ID and the font your document uses for its text.
- ![Screenshot 2025-02-21 180807](https://github.com/user-attachments/assets/d35ffd67-3f30-4bf2-ae67-2a3def093cf2)
- Your Google Doc ID can be found by copy pasting the highlighted portion below.
- ![Screenshot 2025-02-23 165808](https://github.com/user-attachments/assets/faeac737-ef2b-4ea8-8ba2-bb1b430479c1)
- Now, go to your Service Account JSON file, and copy the client_email_id. Share your main resume Google Doc with the client_email.
  - Don't worry, this document will not be modified.
- Now, go to LinkedIn, and you should see this button show up. ![Screenshot 2025-02-23 155405](https://github.com/user-attachments/assets/60a3d410-3d5b-44d2-8e6d-32d5e73335c2)
- Click on it, and wait. Go to your Google Drive → **Shared with me**. Your file should be there and look something like this
- ![Screenshot 2025-02-23 164608](https://github.com/user-attachments/assets/59fadb19-e5f5-4c88-849f-0e6d220f0df3)

---

## Troubleshooting

- **Extension Not Appearing**: Make sure Developer mode is enabled and that you selected the correct folder containing `manifest.json`.
- **Errors or Warnings**: If Chrome detects issues with your extension’s code, it will display error messages in the Extensions page. Click **Errors** or **Warnings** under your extension to learn more.
- **Updates**: If you modify the extension’s code, return to the Extensions page and click **Reload** (visible under your extension’s name in Developer mode).
- Sometimes the resume may not generate. Check your Python console for any errors. If there is a range error (usually denoted by XXXX index cannot be larger than YYYY index), just click the button again and it should work.
- If there are access errors, you might have to re-check your permissions.
  - Your service account must have owner privileges
  - Your Google Doc must be shared with the service account email, and granted owner permissions

---

## Contributing

1. Fork this repository (if using GitHub).
2. Make changes on a feature branch.
3. Test locally by reloading the extension.
4. Submit a pull request or share your changes with collaborators.

---
