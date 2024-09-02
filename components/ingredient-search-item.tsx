export default function IngredientSearchItem({ name }: { name: string }) {
  return (
    <li>
      <button className="border border-black px-8 py-4 hover:bg-amber-400 font-semibold transition-all">
        {name}
      </button>
    </li>
  );
}
