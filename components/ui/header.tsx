import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";

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
        </ul>
      </nav>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center border rounded bg-accent px-2">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="p-2.5 focus:border-none focus:outline-none bg-transparent placeholder:text-sm"
          />
          <Search size="20" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="wishlist">
            <Heart />
          </Link>

          <Link href="cart">
            <ShoppingCart />
          </Link>

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
