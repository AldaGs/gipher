# GIPHER

GIPHER is an After Effects script that exports the active composition as a high-quality GIF. It renders the comp and then converts the result with [gifski](https://gif.ski) and [FFmpeg](https://ffmpeg.org).

**Version:** 1.0.0 · **Platform:** Windows

## Installation

1. Download `GIPHER-1.0.0.zip` from the [Releases](../../releases) page and unzip it.
2. Copy **both** `GIPHER.jsx` **and** the `(AG-Extras)` folder into the same folder:
   - As a dockable panel: `C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\Scripts\ScriptUI Panels\`
   - Or as a script: the `Scripts` folder next to it
3. In After Effects, go to **Edit › Preferences › Scripting & Expressions** and check **Allow Scripts to Write Files and Access Network**.
4. Restart After Effects. Open GIPHER from the **Window** menu (panel) or **File › Scripts**.

The installed folder should look like this:

```
ScriptUI Panels/
├── GIPHER.jsx
└── (AG-Extras)/
    ├── ffmpeg.exe
    ├── gifski.exe
    └── gipher_templates.aepx
```

> If `(AG-Extras)` is missing or isn't next to `GIPHER.jsx`, GIPHER can't create its render templates. It shows an alert with the path it expected.

## Usage

1. Select or open the composition you want to export.
2. Set the options in the panel:
   - **Template:** PNG or ProRes, with or without alpha
   - **Quality:** 1–100
   - **Resize:** output width (height is scaled to match)
   - **Frame rate:** the comp's frame rate or a custom one
   - **Output folder**
3. Click **Export GIF**.

The first time you export, GIPHER installs four output module templates (`Gipher_RGBA_PNG`, `Gipher_RGB_PNG`, `Gipher_ProRes_444_Alpha` and `Gipher_ProRes_422`). It then renders the comp and builds the GIF in the background. Your own Render Queue items are left alone: they're skipped during GIPHER's render and re-enabled afterwards.

## Troubleshooting

- Every error shows an alert. Errors are also logged to `%APPDATA%\AGS-Scripts\GIPHER\Log\log.log`. Include this file when you report a problem.
- If the GIF conversion fails, a Windows message box appears. Turn on **Progress in Console** in the panel's test options to see the full output from ffmpeg and gifski.

## License

GIPHER is licensed under the LGPL-3.0; see [LICENSE.md](LICENSE.md). The bundled `gifski.exe` and `ffmpeg.exe` are distributed under their own licenses (AGPL-3.0 and GPL-3.0). See `(AG-Extras)/licenses/` in the release zip.
