import Link from "next/link";

export const Header = () => {
  return (
    <header className="col-span-12 flex items-center justify-between bg-slate-800 px-4 py-2">
      <Link href="/">Home</Link>
    </header>
  );
};
