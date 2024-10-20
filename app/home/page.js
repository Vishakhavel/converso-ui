import Image from "next/image";
import { Flex } from "antd";
import dynamic from "next/dynamic";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AudioFileIcon from "@mui/icons-material/AudioFile";

// to prevent Flash of Unstyled Content (FOUC), loading it dynamically
const Input = dynamic(() => import("antd").then((mod) => mod.Input), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 w-1/2 flex justify-center">
        <UploadFileIcon fontSize="large" />
        <Input placeholder="ask me stuff" />
        <AudioFileIcon fontSize="large" />
      </div>
    </div>
  );
}
