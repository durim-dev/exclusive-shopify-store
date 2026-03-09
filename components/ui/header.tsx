import Link from "next/link";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 container mx-auto pt-11 pb-5 px-4 md:px-0 flex items-center justify-between border-b">
      <div
        className="text-3xl font-bold text-primary 
            "
      >
        <Link href="/" className="cursor-pointer">
          EXC
        </Link>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex gap-10 uppercase">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-8">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="hidden md:flex p-1.5 border rounded"
        />

        <div className="flex items-center gap-4">
          <Heart />
          <ShoppingCart />
          <div>
            <User />
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
