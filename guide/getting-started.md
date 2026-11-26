# Getting Started

**Chrono Steps** (by **Unfoundry**) is a 100% client-side browser application for recording your screen, redacting sensitive information, and authoring illustrated step-by-step procedure guides.

Everything runs strictly in your browser—no videos, screenshots, or project files are ever uploaded to a server, and all vendor libraries are hosted locally with zero external CDNs.

## Three Apps in One Suite

| App | Path | Purpose |
| :--- | :--- | :--- |
| **Chrono Steps Studio** | `/` (`index.html`) | Full editor for recording, step authoring, annotations, redactions, and exports. |
| **Read-Only Viewer** | `/view/` (`view/index.html`) | Embeddable, responsive guide player driven by URL query parameters. |
| **Standalone Recorder** | `/recorder/` (`recorder/index.html`) | Focused screen recorder, trimmer, timed redactor, and WebM exporter without the steps sidebar. |

## Running Locally

Because Chrono Steps is 100% static HTML, CSS, and JavaScript, you can serve `chrono-steps-ui/` with any static web server:

::: code-group

```bash [Python]
cd chrono-steps-ui
python3 -m http.server 3000
```

```bash [Node.js]
cd chrono-steps-ui
npx serve .
```

:::

Open `http://localhost:3000` in your browser (Chrome, Brave, Edge, or Firefox).

::: tip Screen Recording Permissions
Browser screen capture (`navigator.mediaDevices.getDisplayMedia`) requires a **secure context**—either `http://localhost` / `http://127.0.0.1` or `https://`.
:::

## Core 5-Minute Workflow

1. **Record or Load a Video**: Click **Record screen** to capture a tab, window, or monitor, or click **Load video** to open an existing `.mp4` / `.webm` file.
2. **Add Timed Redactions** *(optional)*: Pause on sensitive data, click **Redaction**, and drag over the area. Choose **Blur**, **Pixelate**, **Black box**, or **White box**.
3. **Capture Steps & Screenshots**: Move the playhead to each action, click **Step with screenshot**, and drag on the video to capture a redacted screenshot and visual cue.
4. **Organize & Annotate**: Drag step cards to reorder or nest substeps (`1.1`, `1.2`), and use the **Annotate** modal to draw red boxes, circles, or extra masks.
5. **Save or Export**:
   - **File → Save (`.steps`)** to save the project with the video embedded.
   - **File → Save Lite (`.stepslite`)** to save steps and screenshots without the video.
   - **Export → PDF Print** or **Steps HTML guide** to share a polished document.

