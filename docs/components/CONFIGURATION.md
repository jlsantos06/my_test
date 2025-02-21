# Configuring a Component

## Overview
This document outlines how to configure a component for local development, testing, and deployment to Omni CMS. The configuration ensures that all component definitions remain structured, reusable, and maintainable.

---

## **Component Configuration Structure**
Each component consists of three key configuration files:

### **1. `model.ts` (Defines Fields)**
The `model.ts` file acts as the **source of truth** for all component fields. It is used for:
- Omni CMS form field definitions.
- Automated test data generation.
- Storybook UI testing.
- Query-based data for Browser-Sync.

**Key Responsibilities:**
- Defines the component’s **editable fields** (text, images, repeatables, etc.).
- Ensures consistency across **local previews, CMS integration, and testing**.
- Eliminates redundant manual setup for form fields.

---

### **2. `cms.json` (Omni CMS Integration)**
The `cms.json` file is used by the **build script** to generate necessary Omni CMS files.

**Key Responsibilities:**
- Processes **`model.ts`** and generates:
  - **Omni CMS XML structure** for form fields.
  - **Omni CMS XSL transformations** for rendering.
- Ensures that changes to fields are **automatically reflected in the CMS**.
- Used **only at build time**—does not store runtime settings.

---

### **3. `metadata.json` (High-Level Component Details)**
The `metadata.json` file contains high-level component metadata.

**Key Responsibilities:**
- Stores **component name, version, and description**.
- Does **not** store field definitions (those are in `model.ts`).
- May later support **component categorization**.

---

## **Configuration Workflow**
1. **Define Fields in `model.ts`**
   - Add new fields and repeatable structures as needed.
   - Ensure correct **data types** for Omni CMS, testing, and local previews.

2. **Run the Build Process**
   - The build script reads `model.ts` and **compiles `cms.json`**.
   - `cms.json` is then used to generate Omni CMS XML/XSL files.
   - `web-components.xsl`, `web-components.css`, and `web-components.js` are generated.

3. **Deploy the Component**
   - If **only styling or HTML changes**, update:
     - `web-components.xsl`
     - `web-components.css`
     - `web-components.js`
   - If **field structures change**, manually update the **CMS component XML** in Omni CMS.

---

## **Future Enhancements**
- Introduce **component categorization** for better organization.
- Expand **metadata.json** for additional settings and dependencies.
- Automate Omni CMS deployment for faster updates.

---

This structured approach ensures that components are **easily configurable, consistent across environments, and maintainable at scale**.
