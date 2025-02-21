# Deployment Architecture for Omni CMS Components

## Overview
This document outlines the deployment process for integrating locally developed components into Omni CMS. The process ensures that all component updates, styling, and scripts are managed efficiently while maintaining consistency between local development and the CMS.

## Deployment Workflow

### 1. Local Development & Testing
- All components are developed and tested locally.
- Each component consists of:
  - **HTML template** for structure.
  - **TypeScript (TS) code** for functionality.
  - **SASS for styling**, compiled into CSS.
- Local testing ensures components function as expected before deployment.

### 2. Build Process
When a new deployment is required, the following files are generated:
- **`web-components.xsl`**: Contains all Omni CMS XSL transformations for rendering components.
- **`web-components.css`**: Bundled CSS file including styles for all components.
- **`web-components.js`**: Bundled JavaScript file containing functionality for all components.
- **CMS XML files (if fields change)**: Defines form fields for the Omni CMS component library.

### 3. Manual Deployment to Omni CMS
Once the build is complete:
- **Replace `web-components.xsl`** in `/_resources/xsl/_shared/`.
- **Replace `web-components.css`** in `/_resources/css/`.
- **Replace `web-components.js`** in `/_resources/js/`.
- **If fields change, update the XML structure manually** inside Omni CMS.
  - Navigate to **Omni CMS → Components**.
  - Update the corresponding component’s XML definition.

### 4. Field Updates in Omni CMS
- If a component’s **fields change**, update the corresponding **CMS component XML manually**.
- The XML file defines the form structure in **Omni CMS → Components**.
- XSL updates will automatically apply once `web-components.xsl` is updated.

### 5. Publishing & Verification
- After replacing the updated files, publish changes in Omni CMS.
- Insert or update components in a test page to verify the updates.
- Ensure styles and functionality behave as expected.

## Key Considerations
- **Versioning**: Ensure `web-components.css` and `web-components.js` use versioned filenames if necessary.
- **Testing before deployment**: Always verify components locally before updating Omni CMS.
- **Field changes require manual XML updates**: If fields remain the same, only `web-components.xsl`, `web-components.css`, and `web-components.js` need to be updated.
- **Keep a backup of the previous XSL file** in case rollback is needed.

## Future Enhancements
- Automating the deployment process for XSL, CSS, and JS files.
- Implementing a more structured version control approach for component updates.

---

This deployment process ensures that component updates are efficient, structured, and easy to manage while maintaining compatibility with Omni CMS.
