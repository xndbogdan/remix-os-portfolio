// file: app/routes/songs.$id.tsx
import fs from "fs";
import parseRange from "range-parser";

export const loader = ({ params, request }) => {
  const { id } = params;
  const filePath = `./public/playlist/${id}.128.mp3`
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;

  const rangeHeader = request.headers.get("Range");

  console.log(`Got range: ${rangeHeader}`);

  if (!rangeHeader) {
    return new Response(
      // @ts-expect-error
      fs.createReadStream(filePath),
      {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          "Content-Length": fileSize,
          "Accept-Ranges": "bytes",
        },
      }
    );
  } else {
    const ranges = parseRange(fileSize, rangeHeader);

    if (ranges === -1 || ranges === -2) {
      throw new Response("Invalid Range", { status: 416 });
    }

    if (ranges.length > 1) {
      throw new Response("Multiple Ranges not supported", { status: 416 });
    }

    const type = ranges.type;
    const range = ranges[0];

    return new Response(
      // @ts-expect-error
      fs.createReadStream(filePath, range),
      {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          "Content-Length": range.end - range.start + 1,
          "Content-Range": `${type} ${range.start}-${range.end}/${fileSize}`,
          "Accept-Ranges": "bytes",
        },
      }
    );
  }
};