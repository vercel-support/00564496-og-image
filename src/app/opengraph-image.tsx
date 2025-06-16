import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const notoSansSemiBold = await readFile(
    join(process.cwd(), "src/assets/NotoSans-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        AAA
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoSans",
          data: notoSansSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
