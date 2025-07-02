import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>レシピサイトへようこそ！</h1>
      <p>様々なレシピを探してみましょう。</p>
      <Link href="/recipes">
        レシピ一覧を見る
      </Link>
    </div>
  );
}