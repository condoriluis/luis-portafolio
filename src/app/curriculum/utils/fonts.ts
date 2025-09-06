import { Font } from "@react-pdf/renderer";

let fontsRegistered = false;

export function registerPdfFonts() {
  if (fontsRegistered) return;

  Font.register({
    family: "Ubuntu",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgo6eA.ttf",
        fontWeight: 400,
        fontStyle: "normal",
      },
      {
        src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7z.ttf",
        fontWeight: 400,
        fontStyle: "italic",
      },
      {
        src: "https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf",
        fontWeight: 700,
        fontStyle: "normal",
      },
    ],
  });

  fontsRegistered = true;
}
