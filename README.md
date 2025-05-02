# File Layout Coordinate Mapper

## 📝 Description

A lightweight browser-based tool to visually log and export X and Y coordinates from PDFs or images (PNG, JPG). 
Designed for developers working on form overlay systems, PDF automation, or UI alignment.

---

## ✨ Features

- Upload multi-page PDFs or image files like PNG, JPG files
- Click on canvas to log coordinates (in millimeters)
- Add editable notes for each coordinate
- Export coordinate data as `.json` or `.txt`
- Built entirely in the browser with no file uploads or server required

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/engiecodes/coordinate-mapper.git
cd coordinate-mapper
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Then open `http://localhost:5173` (or whatever Vite tells you).

---

## 📁 Project Structure

```
coordinate-mapper/
├── src/
│   ├── components/             
│   │   ├── FileUploader.jsx
│   │   ├── CanvasPreview.jsx
│   │   ├── CoordinateNotes.jsx
│   │   ├── ExportButtons.jsx
│   │   ├── About.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── App.jsx                      

```
---

## 🛠 Tech Stack

- React (via Vite)
- Tailwind CSS
- pdfjs-dist (for PDF preview)
- Vanilla canvas + Blob export APIs

---

## 🧑‍💻 Use Cases

- Position mapping for PDF form generation
- UI testing with fixed-position elements
- Annotating coordinates for data overlays
- Document layout reverse engineering

---

## 🔐 Privacy

Your privacy is important. This tool is built to run entirely in your browser.

- No files are uploaded or stored on a server
- Nothing ever leaves your device
- You can use the tool even offline after the first load

Whether you're working with sensitive documents or internal layouts, rest assured that everything stays local to you. It's safe, secure, and private by design.

---

## 📃 License

This project is licensed under the MIT License. 

You are free to use, modify, and distribute this tool in personal or commercial projects. You just need to keep a copy of this license file with it.

Use it well and build great things!

---

## 🙌 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss your idea.

---

## 💬 Author

Made by [Engie](https://github.com/engiecodes)
