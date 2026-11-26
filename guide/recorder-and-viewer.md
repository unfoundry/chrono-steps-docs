# Recorder & Viewer Apps

In addition to the main Chrono Steps Studio (`/`), `chrono-steps-ui/` includes two focused companion apps.

## Standalone Recorder (`/recorder/`)

Open `/recorder/` (`chrono-steps-ui/recorder/index.html`) when you only need to **record a screen, trim, redact sensitive areas, and export a WebM video**—without creating procedure steps.

### Features
- **Record or Load Video**: Capture via `getDisplayMedia` (respecting `MAX_VIDEO_DURATION` and playing an audible chime if reached) or open a local video file.
- **Timed Redactions**: Draw `white`, `black`, `blur`, or `pixelate` boxes, click to move/resize with 8 handles, and edit start/end timestamps.
- **Trim Range**: Set `Start`, `End`, or `Reset` to crop the exported video.
- **Export**: Download the original video or render a redacted `.webm` (with optional audio exclusion).

---

## Read-Only Embed Viewer (`/view/`)

Open `/view/` (`chrono-steps-ui/view/index.html`) to share or embed a read-only interactive guide inside documentation portals, wikis, or intranets.

### URL Query Parameters

| Parameter | Example | Description |
| :--- | :--- | :--- |
| `steps` | `?steps=/guides/demo.steps` | Path to a full `.steps` package (or `steps=false` to hide the steps panel). |
| `stepslite` | `?stepslite=/guides/demo.stepslite` | Path to a lightweight `.stepslite` file. |
| `video` | `&video=/media/demo.webm` or `&video=false` | Supply an external video path (for `.stepslite`) or `false` to hide the video player. |
| `muted` | `&muted=true` | Start playback muted. |
| `annotate` | `&annotate=false` | Hide visual cues by default (can still be toggled via the **Cues** switch in the header). |

::: tip Legacy Parameter Support
The viewer also accepts `&redacted=` and `&redacted_video_override=` as aliases for `&video=/path/to/video.webm`. When an external video override is supplied, cue timestamps automatically offset by `project.trimStart`.
:::

### Viewer Capabilities
- **Resizable Split Pane**: Drag the center grip (or use arrow keys when focused) to resize video vs. steps.
- **Interactive Cues**: Smooth fade-in/fade-out cues; clicking a cue on the video scrolls to its step card.
- **Zoom & Pan Screenshots**: Click any step thumbnail to open the Bootstrap zoom/pan modal.
- **Export Actions**: Print/PDF (with cover page), Download HTML, Download StepsLite, or Open Full Page.

### Example `iframe` Embed

```html
<iframe
  src="/chrono-steps-ui/view/index.html?stepslite=/guides/onboarding.stepslite&video=/media/onboarding-redacted.webm&muted=true"
  width="100%"
  height="640"
  style="border: 1px solid #cbd5e1; border-radius: 12px;"
  allowfullscreen
></iframe>
```

