# Architecture & Schema

Chrono Steps is built as a **zero-build, zero-CDN, 100% static** browser application under `chrono-steps-ui/`.

## Directory Structure

```text
chrono-steps-ui/
├── index.html                  # Main Chrono Steps Studio editor
├── manifest.webmanifest        # PWA manifest
├── sw.js                       # Offline service worker cache
├── assets/
│   ├── css/styles.css          # Unfoundry Lumen + glassmorphism theme
│   ├── icons/icon.svg          # App icon
│   ├── js/
│   │   ├── config.js           # Runtime cue timing, branding, and duration limits
│   │   ├── storage.js          # IndexedDB + localStorage recovery persistence
│   │   ├── export.js           # .steps/.stepslite, WebM renderer, HTML & PDF export
│   │   └── app.js              # Editor controller, canvas overlay, modals, shortcuts
│   ├── templates/
│   │   └── coverpage.html      # Printable PDF cover page template
│   └── vendor/                 # Local-only Bootstrap, Bootswatch Lumen, Icons, SweetAlert2
├── recorder/
│   ├── index.html              # Standalone screen recorder & redactor
│   └── assets/recorder.js      # Recorder controller
└── view/
    ├── index.html              # Read-only embed viewer
    └── assets/
        ├── view.css            # Viewer & print styles
        └── view.js             # Viewer controller
```

## Browser APIs Used

- **`navigator.mediaDevices.getDisplayMedia()` & `MediaRecorder`**: Live screen/tab/window capture to WebM.
- **HTML5 `<video>` + Canvas 2D**: Real-time overlay rendering (blur, pixelate, solid redactions, fade-animated cues) and client-side redacted WebM export via `canvas.captureStream(30)`.
- **Web Audio API (`AudioContext`)**: Generates the two-tone chime when `MAX_VIDEO_DURATION` is reached, with zero external audio files.
- **IndexedDB**: Stores active recovery drafts (including video blobs up to `MAX_CACHED_VIDEO_DURATION`).
- **Service Worker & Web App Manifest**: Enables offline and air-gapped PWA usage.

## Project JSON Schema (`.steps` / `.stepslite`)

Both v2 (`"format": "ChronoSteps"`) and v1 (`"format": "StepsRecorder"`) packages share the same core schema:

```json
{
  "format": "ChronoSteps",
  "version": "2.0.0",
  "project": {
    "name": "Example Procedure",
    "author": "Unfoundry",
    "videoData": "data:video/webm;base64,...",
    "videoName": "recording.webm",
    "trimStart": 0,
    "trimEnd": 45.2,
    "excludeAudio": false,
    "theme": "lumen",
    "steps": [
      {
        "id": "uuid",
        "title": "Click Sign In",
        "description": "Use your SSO credentials.",
        "time": 12.45,
        "type": "step",
        "parentId": "",
        "image": "data:image/png;base64,...",
        "cue": { "x": 0.42, "y": 0.18, "w": 0.12, "h": 0.06 },
        "order": 0
      }
    ],
    "masks": [
      {
        "id": "uuid",
        "x": 0.1,
        "y": 0.1,
        "w": 0.2,
        "h": 0.05,
        "start": 5.0,
        "end": 18.5,
        "style": "blur"
      }
    ]
  }
}
```

### Coordinate Normalization

All `cue` and `masks` coordinates (`x`, `y`, `w`, `h`) are normalized to `0..1` relative to the displayed video picture (`getDisplayedVideoRectangle()`), ensuring accurate alignment across any viewport size or aspect ratio.

