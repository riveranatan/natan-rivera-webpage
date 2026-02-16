import localFont from "next/font/local";

export const dotGothic = localFont({
  src: "../../public/fonts/DotGothic16-Regular.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-dot-gothic",
});

export const spaceMono = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceMono-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/SpaceMono-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-space-mono",
});
