import React, { useState } from "react";
import UploadSection from "./UploadSection";
import RecipeForm from "./RecipeForm";
import PreviewSection from "./PreviewSection";

interface RecipeData {
  title: string;
  cookingTime: string;
  instructions: string;
}

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [recipeData, setRecipeData] = useState<RecipeData>({
    title: "",
    cookingTime: "",
    instructions: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImagesUploaded = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleRecipeSubmit = (data: RecipeData) => {
    setRecipeData(data);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulated video generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          AI Recipe Video Generator
        </h1>

        <div className="space-y-8">
          <UploadSection
            onImagesUploaded={handleImagesUploaded}
            maxImages={5}
          />

          <RecipeForm onSubmit={handleRecipeSubmit} isLoading={false} />

          <PreviewSection
            images={uploadedFiles.map((file) => URL.createObjectURL(file))}
            recipeTitle={recipeData.title}
            cookingTime={recipeData.cookingTime}
            instructions={recipeData.instructions}
            isLoading={isGenerating}
            onGenerate={handleGenerate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
