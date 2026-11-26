import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/chrono-steps-docs/",
  title: "Chrono Steps",
  description: "Client-side screen recording, redaction, and illustrated procedure guide studio by Unfoundry.",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/icon.svg" }],
  ],

  themeConfig: {
    logo: "/icon.svg",
    siteTitle: "Chrono Steps",

    nav: [
      { text: "Getting Started", link: "/guide/getting-started" },
      { text: "User Guide", link: "/guide/recording-and-playback" },
      { text: "Apps & Viewer", link: "/guide/recorder-and-viewer" },
      { text: "Developer & Deploy", link: "/reference/architecture" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "User Guide",
        items: [
          { text: "Recording & Playback", link: "/guide/recording-and-playback" },
          { text: "Steps, Cues & Annotations", link: "/guide/steps-and-annotations" },
          { text: "Redactions & Masking", link: "/guide/redactions-and-masking" },
          { text: "Saving & Exporting", link: "/guide/saving-and-exporting" },
          { text: "Recorder & Viewer Apps", link: "/guide/recorder-and-viewer" },
        ],
      },
      {
        text: "Developer & Deployment",
        items: [
          { text: "Configuration & Templates", link: "/reference/configuration" },
          { text: "Architecture & Schema", link: "/reference/architecture" },
          { text: "Deployment Guide", link: "/reference/deployment" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "100% Client-Side & Static · Zero External CDNs",
      copyright: "Chrono Steps | Unfoundry",
    },
  },
});

