# Redactions & Masking

Chrono Steps provides two complementary privacy layers: **timed video redactions** (applied during playback, video export, and screenshot capture) and **static screenshot masks** (drawn inside the Annotation Studio).

## Timed Video Redactions

Timed redactions hide sensitive information—such as passwords, customer names, account numbers, or URLs—during a specific time range (`start` to `end`).

### Adding a Redaction

1. Pause the video at the point where sensitive data appears.
2. Click **Redaction** (`Alt+Shift+R`) in the command bar or **Edit → Add redaction**.
3. The cursor switches to `crosshair`. Drag a rectangle over the region to hide.
4. In the **Timed Redaction** modal, set:
   - **Start** and **End** timestamps (`hh:mm:ss.mmm`), or click the crosshair buttons / **Project start** / **Project end** shortcuts.
   - **Redaction Style**:
     - `White box`: Solid white fill.
     - `Black box`: Solid black fill.
     - `Blur`: Live 14px Gaussian blur over the underlying video pixels.
     - `Pixelate`: Downsampled mosaic pixelation over the underlying video pixels.

### Moving & Resizing Redactions

You can adjust any redaction after creating it:

1. Click the redaction item in the **Redactions** list (the video seeks into its time range if needed), or click directly on a visible redaction box on the video stage.
2. A dashed red selection outline with **8 resize handles** appears.
3. Drag inside the box to **move** it, or drag any corner/edge handle to **resize** it.

All geometry is stored as normalized `0..1` coordinates, so redactions stay accurately aligned regardless of window or player size.

### Redacted Screenshot Extraction

When you capture a **Step with screenshot** (or **Select from video** inside the step dialog), Chrono Steps renders the current video frame onto an offscreen canvas, applies all active redactions at that timestamp, and crops your screenshot from the **redacted** frame. You do not need to re-redact the same region in every step.

## Static Screenshot Masking

If a screenshot came from the clipboard, a dropped image, or needs additional masking after capture, open the **Annotate** modal and use **Black mask**, **White mask**, **Blur**, or **Pixelate** directly on the image.

