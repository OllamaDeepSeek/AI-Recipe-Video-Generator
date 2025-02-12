import React, { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Upload, Camera, FileUp } from "lucide-react";
import { cn } from "../lib/utils";

interface UploadSectionProps {
  onImagesUploaded?: (files: File[]) => void;
  maxImages?: number;
}

const UploadSection = ({
  onImagesUploaded = () => {},
  maxImages = 5,
}: UploadSectionProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));
      const newImages = imageFiles.slice(0, maxImages - uploadedImages.length);

      setUploadedImages((prev) => [...prev, ...newImages]);
      onImagesUploaded(newImages);
    },
    [maxImages, uploadedImages.length, onImagesUploaded],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        const imageFiles = files.filter((file) =>
          file.type.startsWith("image/"),
        );
        const newImages = imageFiles.slice(
          0,
          maxImages - uploadedImages.length,
        );

        setUploadedImages((prev) => [...prev, ...newImages]);
        onImagesUploaded(newImages);
      }
    },
    [maxImages, uploadedImages.length, onImagesUploaded],
  );

  const handleCameraClick = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";
    input.onchange = (e) =>
      handleFileInput(e as React.ChangeEvent<HTMLInputElement>);
    input.click();
  }, [handleFileInput]);

  return (
    <Card className="w-full max-w-[800px] min-h-[300px] bg-white p-6">
      <div
        className={cn(
          "w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-4 transition-colors",
          dragActive ? "border-primary bg-primary/5" : "border-gray-300",
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 text-gray-400" />
        <p className="text-center text-gray-600">
          Drag and drop your ingredient photos here
          <br />
          or use one of the options below
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="outline" onClick={handleCameraClick}>
          <Camera className="w-4 h-4 mr-2" />
          Take Photo
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.multiple = true;
            input.accept = "image/*";
            input.onchange = handleFileInput;
            input.click();
          }}
        >
          <FileUp className="w-4 h-4 mr-2" />
          Browse Files
        </Button>
      </div>

      {uploadedImages.length > 0 && (
        <div className="mt-6 grid grid-cols-4 gap-4">
          {uploadedImages.map((file, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default UploadSection;
