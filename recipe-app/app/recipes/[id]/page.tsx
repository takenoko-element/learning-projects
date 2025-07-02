import { getRecipeById } from "@/lib/data";
import Link from "next/link";

const RecipeDetailPage = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const recipe = await getRecipeById(id);

    if(!recipe){
        return <div>レシピが見つかりませんでした。</div>
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <h2>材料</h2>
            <ul>
                {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>

            <h2>作り方</h2>
            <ol>
                {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
                ))}
            </ol>

            <br />
            <Link href="/recipes">一覧へ戻る</Link>
        </div>
    );
}

export default RecipeDetailPage;