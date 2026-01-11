import axios from "axios";
import { ChangeEvent, useState } from "react";

type UploadStatus = " idle" | "uploading" | "success" | "error";
const FileUpload = () => {
  const [file, setfile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>(" idle");
  const [upload, setUpload] = useState(0);
  const HandleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
      setfile(e.target.files[0]);
    }
  };
  const HandleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (ProgressEvent) => {
          const progress = ProgressEvent.total
            ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            : 0;
          setUpload(progress);
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <div className="space-y-8">
      <input type="file" onChange={HandleFileChange} />
      {file && (
        <div className="mb-8 text-sm ">
          <p>{file.name}</p>
          <p>{file.size} Bytes</p>
          <p>{file.type}</p>
        </div>
      )}
      {file && status != "uploading" && (
        <div>
          <button className="bg-red-300 rounded-xl px-2 py-1 hover:scale-125">
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
