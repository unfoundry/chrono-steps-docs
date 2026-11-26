# Steps, Cues & Annotations

Chrono Steps structures procedures as a two-level numbered outline (`1`, `1.1`, `1.2`, `2`) alongside optional callout **Notes**.

## Creating Steps

- **Add step** (`Alt+Shift+A`): Opens the step dialog at the current playhead timestamp.
- **Step with screenshot** (`Alt+Shift+I`): Switches the video overlay cursor to `crosshair` so you can drag a rectangle on the paused video frame. Chrono Steps captures the cropped image (with active redactions applied) and stores normalized `cue` coordinates.

### Step Modal Features

- **Timestamp**: Defaults to the current playhead (`hh:mm:ss.mmm`). Click the crosshair button to re-snap to the current video time.
- **Type & Parent**: Choose `Step`, `Substep` (select a parent step), or `Note`.
- **Screenshot Drop Zone**:
  - **Select from video**: Capture a region directly from the video stage.
  - **Browse**: Upload an image file from disk.
  - **Paste (`Ctrl+V`) or Drag & Drop**: Click the drop zone and paste from your clipboard (e.g. after `Win+Shift+S` or macOS screenshot) or drop an image file.

## Reordering & Nesting (Drag & Drop)

Drag any step card by its grip handle (`⋮⋮`):

- **Drop near the top edge** of a card to insert **before** it.
- **Drop onto the middle** of a card to **nest** it as a substep (`1.1`, `1.2`).
- **Drop near the bottom edge** of a card to insert **after** it.

## Visual Cues & Fade Animation

When a step includes a captured video region (`cue`), Chrono Steps draws a yellow highlight rectangle over the video around that step's timestamp.

- Toggle cue visibility anytime using the **Cues** switch in the top-right bar or **Edit → Show visual cues**.
- Cues smoothly **fade in** before the step timestamp (`cueLeadSeconds`), reach `opacity: 1.0` at the exact timestamp, and **fade out** afterward (`cueTrailSeconds`). Both timings are configurable in [config.js](/reference/configuration).
- **Adjusting a Cue**: Click any step card in the sidebar to jump to its timestamp and select its cue box on the video—then drag the box to move it or drag any of its 8 handles to resize it.

## Screenshot Annotations & Masking

Click **Annotate** in the step dialog (or `⋮ → Annotate screenshot` on an existing step card) to open the full-resolution Annotation Studio:

| Tool | Purpose |
| :--- | :--- |
| **Red box** | Highlight buttons, fields, or regions of interest. |
| **Red circle** | Call out icons, toggles, or small UI targets. |
| **Black mask / White mask** | Permanently cover sensitive text or IDs inside the screenshot. |
| **Blur / Pixelate** | Obfuscate names, emails, or tokens directly on the screenshot. |
| **Undo** | Step backward through drawn shapes. |

## Zoom & Pan Image Preview

Clicking any step thumbnail opens the Bootstrap **Screenshot Zoom & Pan** modal:

- Use **Zoom In**, **Zoom Out**, and **100%** buttons to inspect fine details.
- Click and drag anywhere inside the image viewport to **pan** around zoomed screenshots.
- Toggle **Video** off in the top-right bar to switch the editor into a centered (`920px` max-width) reading view.

