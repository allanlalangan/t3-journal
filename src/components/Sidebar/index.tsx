import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="col-span-2 flex flex-col items-center bg-slate-700 px-4 py-2">
      <p>Sidebar</p>
      <ul>
        <li>
          <Link href="/journal">Journal</Link>
        </li>
      </ul>
    </aside>
  );
};
