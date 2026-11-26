# Configuration & Templates

Chrono Steps exposes runtime settings in `assets/js/config.js` and an editable PDF cover page template in `assets/templates/coverpage.html`.

## Runtime Configuration (`assets/js/config.js`)

```javascript
window.ChronoConfig = {
  // Branding shown in print/PDF footers and exported guides
  branding: "Chrono Steps | Unfoundry",

  // Seconds before a step's timestamp when its visual cue begins fading in
  cueLeadSeconds: 2.5,

  // Seconds after a step's timestamp when its visual cue finishes fading out
  cueTrailSeconds: 2.5,

  // Enable smooth fade-in / fade-out opacity animation (1.0 at exact timestamp)
  cueFadeAnimation: true,

  // Minimum opacity floor while a cue is within its active window (0 = full fade to invisible)
  cueMinOpacity: 0,

  // Maximum video duration (seconds) allowed in local browser recovery cache (5 minutes)
  MAX_CACHED_VIDEO_DURATION: 300,

  // Maximum recording/video duration (seconds) before auto-stopping safely (15 minutes)
  MAX_VIDEO_DURATION: 900,
};
```

### Option Reference

| Key | Default | Description |
| :--- | :--- | :--- |
| `branding` | `"Chrono Steps \| Unfoundry"` | Text displayed in the PDF `@bottom-left` footer, cover page, and HTML guide header/footer. |
| `cueLeadSeconds` | `2.5` | How early before `step.time` a visual cue begins fading in. |
| `cueTrailSeconds` | `2.5` | How long after `step.time` a visual cue finishes fading out. |
| `cueFadeAnimation` | `true` | Enables 60fps opacity interpolation (`0 → 1 → 0`) instead of a hard cut. |
| `cueMinOpacity` | `0` | Minimum opacity while inside the `[time - lead, time + trail]` window. |
| `MAX_CACHED_VIDEO_DURATION` | `300` | Videos longer than this (in seconds) skip IndexedDB video caching and prompt the user to save manually. |
| `MAX_VIDEO_DURATION` | `900` | Maximum recording/video duration (in seconds). Live recordings auto-stop safely at this limit and play an audible chime. |

---

## Cover Page Template (`assets/templates/coverpage.html`)

When exporting HTML or printing to PDF (`ChronoExport.print()`), Chrono Steps loads `assets/templates/coverpage.html` and replaces the following placeholders:

| Placeholder | Value |
| :--- | :--- |
| `{{PROJECT_NAME}}` | Escaped project title (`project.name`). |
| `{{AUTHOR}}` | Escaped author name (`project.author` or `"Not specified"`). |
| `{{GENERATED_AT}}` | Formatted local generation date and time. |
| `{{STEP_COUNT}}` | Total number of outline steps/substeps/notes. |
| `{{SCREENSHOT_COUNT}}` | Total number of steps containing a screenshot. |
| `{{BRANDING}}` | Value from `window.ChronoConfig.branding`. |

You can customize `assets/templates/coverpage.html` directly without modifying any JavaScript.

