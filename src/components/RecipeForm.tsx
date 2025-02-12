import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Clock, ChefHat } from "lucide-react";

interface RecipeFormData {
  title: string;
  cookingTime: string;
  instructions: string;
}

interface RecipeFormProps {
  onSubmit?: (data: RecipeFormData) => void;
  isLoading?: boolean;
}

const RecipeForm = ({
  onSubmit = () => {},
  isLoading = false,
}: RecipeFormProps) => {
  const { register, handleSubmit } = useForm<RecipeFormData>({
    defaultValues: {
      title: "",
      cookingTime: "",
      instructions: "",
    },
  });

  return (
    <Card className="w-full max-w-[800px] p-6 bg-white shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="flex items-center gap-2">
            <ChefHat className="w-4 h-4" />
            Recipe Title
          </Label>
          <Input
            id="title"
            placeholder="Enter your recipe title"
            {...register("title")}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cookingTime" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Cooking Time
          </Label>
          <Input
            id="cookingTime"
            placeholder="e.g. 30 minutes"
            {...register("cookingTime")}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea
            id="instructions"
            placeholder="Enter step-by-step cooking instructions"
            {...register("instructions")}
            className="w-full min-h-[150px]"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Recipe Details"}
        </Button>
      </form>
    </Card>
  );
};

export default RecipeForm;
