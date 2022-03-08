// file: app/routes/songs.$id.tsx
import fs from "fs";
import { ray } from "node-ray";

export const loader = ({ params, request }) => {
  const { id } = params;
  const filePath = `./public/playlist/${id}.128.mp3`
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = request.headers.get('range');
  if (!range) {
    return new Response(
      fs.createReadStream(filePath), {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          'Content-Length': fileSize,
        },
      }
    );
  } else {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize - 1;
    const chunksize = (end - start) + 1;
    const readStream = fs.createReadStream(filePath, { start, end });
    return new Response(
      fs.createReadStream(filePath), {
        status: 206,
        headers: {
          "Content-Type": "audio/mpeg",
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
        },
      }
    );
  }
  
};