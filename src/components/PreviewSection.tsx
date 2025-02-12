import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Loader2 } from "lucide-react";

interface PreviewSectionProps {
  images?: string[];
  recipeTitle?: string;
  cookingTime?: string;
  instructions?: string;
  isLoading?: boolean;
  onGenerate?: () => void;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({
  images = [
    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  ],
  recipeTitle = "Delicious Pasta Recipe",
  cookingTime = "30 minutes",
  instructions = "1. Boil pasta\n2. Make sauce\n3. Combine and serve",
  isLoading = false,
  onGenerate = () => console.log("Generate clicked"),
}) => {
  return (
    <div className="w-full max-w-[800px] mx-auto p-6 bg-white rounded-lg shadow-md">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Preview Your Recipe</h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Uploaded Images</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Recipe image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-medium">Recipe Title</h3>
            <p className="text-gray-600">{recipeTitle}</p>
          </div>

          <div>
            <h3 className="font-medium">Cooking Time</h3>
            <p className="text-gray-600">{cookingTime}</p>
          </div>

          <div>
            <h3 className="font-medium">Instructions</h3>
            <p className="text-gray-600 whitespace-pre-line">{instructions}</p>
          </div>
        </div>

        <Button onClick={onGenerate} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Video...
            </>
          ) : (
            "Generate Video"
          )}
        </Button>
      </Card>
    </div>
  );
};

export default PreviewSection;
