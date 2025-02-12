# AI-Recipe Video Generator 
## Recipe to Video
## An application where users upload images of ingredients and the AI generates a cooking video. It can include step-by-step instructions, timing cues, and tips, making it easy for users to follow along.

## Concept Overview
The Recipe to Video app allows users to upload images of ingredients and generate a cooking video. The AI provides step-by-step instructions, timing cues, and helpful tips to guide users through the cooking process, making it accessible for both novice and experienced cooks.

## Key Features

Image Upload: Users can upload images of ingredients from their devices or take pictures directly using their mobile cameras.
Recipe Input: Users can input or select a recipe related to the uploaded ingredients, including cooking time and method.
AI Video Generation: The app generates a cooking video that includes:
Step-by-step instructions
Timing cues for each step
Tips and tricks for cooking
Background music and voiceover narration
Customization Options: Users can customize video styles, text overlays, and music choices.
Save and Share: Users can save the generated video and share it on social media or through direct links.
User Profiles: Users can create accounts to save their favorite recipes and videos for future reference.

## React + TypeScript + Vite


![image](https://github.com/user-attachments/assets/07224d2f-89f8-4bf2-ad8c-02c75e2cb8a1)

![image](https://github.com/user-attachments/assets/8fe10153-da31-47b2-ab29-3b1347458305)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
