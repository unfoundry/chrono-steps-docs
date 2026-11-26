# Recording & Playback

Chrono Steps supports both live browser screen recording and importing existing video files from disk.

## Recording Your Screen

1. Click **Record screen** in the video panel header (or **File → Record screen**).
2. Choose a browser tab, application window, or entire screen in the browser picker (and optionally include tab/system audio).
3. A live recording badge (`00:00` + **Stop** button) appears in the top-right corner of the stage.
4. Click **Stop** (or use the browser's "Stop sharing" bar) when finished. The recorded WebM video is embedded into your active project automatically.

### Recording Duration Limits & Audible Chime

To protect browser memory during client-side encoding, [config.js](/reference/configuration) defines two safety limits:

- **`MAX_CACHED_VIDEO_DURATION`** *(default: `300` seconds / 5 minutes)*: Videos longer than this are **not** auto-cached in IndexedDB recovery. You will see an alert reminding you to save your `.steps` file or export your video manually.
- **`MAX_VIDEO_DURATION`** *(default: `900` seconds / 15 minutes)*: When a live recording reaches this limit, Chrono Steps **safely stops** the recorder, plays an **audible two-tone chime** via the Web Audio API, and notifies you.

## Loading an Existing Video

Click **Load video** (or **File → Load video file**) to select any browser-playable video (`.webm`, `.mp4`, etc.). If the video exceeds `MAX_CACHED_VIDEO_DURATION` or `MAX_VIDEO_DURATION`, Chrono Steps notifies you accordingly.

## Playback & Timeline Controls

- **Play / Pause**: Click the Play button or press `Space` (when focus is outside text fields).
- **Seek ±10s**: Use the `-10` and `10+` buttons on either side of Play/Pause.
- **Seek ±1s**: Focus the video panel and press `Page Up` / `Page Down`.
- **Timeline Scrubbing**: Click or drag anywhere along the timeline bar.
- **Timeline Pins**: Orange pins mark each step's timestamp—click a pin to jump directly to that step.
- **Mute Playback**: Toggle audio playback with the speaker icon (independent of **Edit → Exclude audio on export**).

## Project Trim Range

Use the **Range** controls in the bottom command bar to define the retained export window:

- **Start**: Sets `trimStart` to the current playhead time.
- **End**: Sets `trimEnd` to the current playhead time.
- **Reset**: Clears custom trim boundaries back to the full video.

Red shading on the timeline (`#shadeBefore` and `#shadeAfter`) highlights regions excluded from **Rendered redacted video** exports.

