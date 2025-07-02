import { resolve } from "path";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
};

const recipes: Recipe[] = [
  {
    id: '1',
    title: '絶品カレーライス',
    description: 'スパイスから作る本格的なカレーライスです。',
    ingredients: ['玉ねぎ', '人参', 'じゃがいも', '牛肉', 'カレールー'],
    instructions: [
      '野菜と肉を炒める。',
      '水を加えて煮込む。',
      'カレールーを溶かしてさらに煮込む。',
    ],
  },
  {
    id: '2',
    title: '家庭の味の肉じゃが',
    description: 'どこか懐かしい、心温まる肉じゃがです。',
    ingredients: ['じゃがいも', '人参', '玉ねぎ', '豚肉', '醤油', 'みりん', '砂糖'],
    instructions: [
      '材料を切る。',
      '鍋で豚肉と野菜を炒める。',
      '調味料と水を加えて煮込む。',
    ],
  },
];

export const getRecipes = async (): Promise<Recipe[]> => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return recipes;
}

export const getRecipeById = async (id: string): Promise<Recipe | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return recipes.find((recipe) => recipe.id === id);
}