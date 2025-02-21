# Component Structure

## Overview
This document outlines the structure of components in the repository, following an **Atomic Design-inspired** approach.

### **Atomic Design Reference**
- **Atoms** → **Bootstrap elements** (buttons, grids, typography, etc.)  
- **Molecules** → **Common components** (structured Bootstrap elements with models)  
- **Organisms** → **Library components** (fully structured sections using molecules + Bootstrap)

📌 **Bootstrap is already included on the page, so we do not need an explicit `atoms/` directory. Instead, we use Bootstrap directly within molecules and organisms.**

---

## **1. Component Types**
Each component belongs to one of two categories:

### **🔹 Common Components**
- **Reusable UI elements** built using **Bootstrap classes**.
- Used across multiple library components.
- Each common component has a **structured model (`model.ts`)**.

📌 **Examples:**
- `Card`
- `ButtonGroup`
- `ImageOverlay`

### **🔹 Library Components**
- **Fully structured, deployable components** that assemble molecules and Bootstrap classes.
- Each library component has:
  - **`model.ts`** → Defines fields and data.
  - **`config.json`** → High-level metadata.
  - **`cms.json`** → Used for generating Omni CMS XML/XSL.

📌 **Examples:**
- `CardCollection`
- `HeroSlider`
- `EventPromoCards`

✅ **Library components (organisms) reuse common components (molecules) while leveraging Bootstrap as atoms.**

---

## **2. Component Structure**
Each component follows a **consistent file structure**:


### **Folder Structure**
> ```
> /src/components/
> │── common/              # Reusable UI molecules (Bootstrap-based components)
> │   ├── Card/
> │   ├── ButtonGroup/
> │   ├── ImageOverlay/
> │── library/             # Fully structured, deployable components (assembled organisms)
> │   ├── CardCollection/
> │   ├── HeroSlider/
> │   ├── EventPromoCards/
> ```


📌 **File Breakdown**
- **`metadata.json`** → Stores metadata (name, version, description).  
- **`cms.json`** → Used by the build script to generate Omni CMS files.  
- **`model.ts`** → Defines fields for testing, templating, and CMS integration.  
- **`ComponentName.sass`** → Styles for this component (compiled into `web-components.css`).  
- **`ComponentName.ts`** → Component-specific JavaScript (bundled into `web-components.js`).  
- **`template.html`** → Local testing template for Browser-Sync.  

✅ **This structure ensures consistency between local development, testing, and Omni CMS deployment.**

---

## **3. Development & Deployment Workflow**
1️⃣ **Develop components locally** using Browser-Sync for previews.  
2️⃣ **Define fields inside `model.ts`**, ensuring consistency.  
3️⃣ **Run the build process to generate Omni CMS files.**  
4️⃣ **Deploy `web-components.xsl`, `web-components.css`, and `web-components.js`.**  
5️⃣ **If fields change, update the CMS component XML manually in Omni CMS.**  

---

## **4. Future Enhancements**
- **Introduce component categorization** inside `metadata.json`.  
- **Automate documentation generation** using repository metadata.  
- **Streamline Omni CMS integration with an improved build process.**  

---

This structured approach ensures that components are **modular, maintainable, and scalable**, leveraging **Bootstrap as the base layer**.
