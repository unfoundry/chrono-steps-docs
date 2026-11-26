# Saving & Exporting

Chrono Steps keeps your work portable with two JSON project formats, local browser auto-recovery, and four export outputs.

## Project File Formats

| Extension | Contents | Best For |
| :--- | :--- | :--- |
| **`.steps`** | Full project JSON including steps, screenshots, redactions, trim range, and **base64-encoded `videoData`**. | Durable archival, offline sharing, and reopening the complete project with video intact. |
| **`.stepslite`** | Lightweight project JSON **without** `videoData` (`videoData: null`). | Hosting in documentation portals alongside a separately hosted `.webm` / `.mp4` video, or sharing small files. |

::: info Backward Compatibility
Chrono Steps opens both v2 (`"format": "ChronoSteps"`) and legacy v1 (`"format": "StepsRecorder"`) `.steps` and `.stepslite` files seamlessly.
:::

## Local Auto-Recovery (IndexedDB)

As you edit, Chrono Steps automatically saves a recovery draft to **IndexedDB** (`chrono-steps-db`) in your browser—including the embedded video if its duration is within `MAX_CACHED_VIDEO_DURATION` (5 minutes by default). If IndexedDB is unavailable, it falls back to video-free `localStorage`.

## Export Options

Open the **Export** menu in the top ribbon:

### 1. Original Video
Downloads the source video (`project.videoData`) unchanged.

### 2. Rendered Redacted Video (WebM)
Plays through your retained trim range (`trimStart` → `trimEnd`) in browser memory, burns in all active timed redactions (`white`, `black`, `blur`, `pixelate`), optionally strips audio (**Edit → Exclude audio on export**), and downloads a clean `.webm` video.

### 3. Steps HTML Guide
Generates a self-contained, single-file HTML document containing:
- Hero header with project title, author, step count, and screenshot count
- Clickable **Contents** index grouped by parent step
- Numbered step cards with timestamps and click-to-zoom screenshots
- A built-in **Download StepsLite** button and **Print or save PDF** toolbar

### 4. PDF Print (with Cover Page)
Renders the guide into a hidden print frame using [assets/templates/coverpage.html](/reference/configuration#cover-page-template) and opens your browser's Print / Save as PDF dialog:
- **Page 1 (Cover Page)**: Displays the `CS` logo, `Standard Operating Procedure` kicker, populated **Project Name**, **Author**, **Total Steps**, **Screenshots**, **Generated** timestamp, and **Chrono Steps | Unfoundry** footer.
- **Content Pages**: Include running headers and footers with `Chrono Steps | Unfoundry` on the bottom-left and `Page X of Y` on the bottom-right.

