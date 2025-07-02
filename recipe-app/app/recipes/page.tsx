import { getRecipes } from "@/lib/data";
import Link from "next/link";

const RecipesPage = async () => {
    const recipes = await getRecipes();

    return (
        <div>
            <h1>レシピ一覧</h1>
            <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                {/* 詳細ページへのリンクを追加 */}
                <Link href={`/recipes/${recipe.id}`}>
                    {recipe.title}
                </Link>
                </li>
            ))}
            </ul>
            <br />
            <Link href="/">トップへ戻る</Link>
        </div>
    );
    }

export default RecipesPage;