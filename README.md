# JavaScript-less Image Viewer Prototype

A prototype for an accessible, JavaScript-free image viewer built with the GOV.UK Prototype Kit and The National Archives frontend components.

## Overview

This prototype demonstrates an image viewer that works without JavaScript, providing an accessible alternative to Universal Viewer. It includes:

- **Record page integration** - Entry point component for starting the viewer
- **Image list view** - Grid display of all images with pagination
- **Individual image view** - Full-screen image display with navigation

## Technologies

- [The National Archives Frontend](https://design-system.nationalarchives.gov.uk/get-started/prototyping/)

## Getting Started

### Prerequisites

- Node.js (version specified by GOV.UK Prototype Kit requirements)
- npm

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Running the Prototype

Start the development server:

```bash
npm run dev
```

The prototype will be available at `http://localhost:3000`

### Other Commands

- `npm run serve` - Run the prototype server
- `npm start` - Start the prototype kit

## Features

### Image Viewer Start Component

Entry point displayed on record pages, providing:
- Image preview
- Call-to-action buttons to open the accessible viewer or Universal Viewer

### Image List View

- Responsive grid layout (4 columns on desktop, 3 on medium, 2 on small, 1 on mobile)
- Pagination controls
- Dark theme styling - Tweaks had to be made to the base template JS for this to work correctly, as when no theme cookie is set it would fall back to "system"

### Individual Image View

- Full-height image display
- Centered image with proper aspect ratio handling
- Navigation buttons (Previous/Next)
- Responsive layout that adapts to different screen sizes

## Styling

Custom styles are located in `app/assets/sass/prototype.scss` and are organized into:

1. **Image Viewer Components** - New components for the viewer
2. **Image Viewer Layout Structure** - Layout and structural styles
3. **Component Tweaks** - Modifications to existing components (index grid, pagination)
