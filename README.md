# Application Templates

> Generate professional CVs and cover letters in minutes — without worrying about layout, formatting, or design.

---

## 🚀 How to use

### 1. Setup your personal data

You can either create your personal data file manually or use the built-in import/export functionality.

#### Option A: Create the file manually

Copy the example file:

```bash
cp userInfo.json.example userInfo.json
```

Then replace the example content with your own information.

#### Option B: Import an existing configuration or enter your information manually

Open the `/user-information` page and either import a previously exported `.json` file or fill in your data manually.

You can also download your current configuration at any time at the bottom of the `/user-information` page as `.json`.

> Note: Your personal information never leaves your device. All `.json` files are ignored by Git and will never be committed to the repository.

---

### 2. (Optional) Add a signature image

If you want to include a signature:

* Place your image inside the `public` folder
* Set the file name in your user configuration:

```json
"userSignatureFilename": "signature.png";
```

If you do not want to include a signature, set:

```json
"userSignatureFilename": "";
```

> Note: The entire `public` folder is ignored by Git to prevent personal data from being committed accidentally.

---

### 3. Install dependencies
```bash
npm install
```

---

### 4. Start the development server

```bash
npm run dev
```

Your application will be available at: [http://localhost:5173](http://localhost:5173)

---

### 5. Export your documents

* Open the website
* Navigate to **Resume** or **Cover Letter**
* Use your browser’s print function
* Save as **PDF**

---

## 📄 Notes

Currently, only German versions of the CV and cover letter are available.

You can customize or extend the templates located in: `/app/pages/german`

---

## 💡 Future ideas

* Multi-language support (EN / DE)
* More CV templates (modern, minimal, creative)
* PDF export button (no browser print needed)

---

## 📸 Preview

<p align="center">
  <img src="./assets/cv-1.png" width="48%" style="margin-right: 10px;" />
  <img src="./assets/cl-1.png" width="48%" />
</p>
