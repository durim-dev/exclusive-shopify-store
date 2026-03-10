import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingCart, X } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: "$29.99",
    addedAt: "2024-06-01T10:00:00Z",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
  },
  {
    id: 2,
    name: "Premium Leather Crossbody Bag",
    category: "Clothing",
    price: "$49.99",
    addedAt: "2024-06-02T14:30:00Z",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
  },
];

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex min-h-screen w-full flex-col items-center gap-20 px-4 md:px-0 lg:px-8 py-8 md:py-12 lg:py-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm md:text-base lg:text-lg">
            Wishlist ({wishlistItems.length})
          </p>
          <Button className="cursor-pointer py-5 px-4" variant="default">
            Move All To Bag
          </Button>
        </div>

        <div className="border w-full rounded-lg flex flex-col">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between space-x-4 p-2.5 md:p-4 border-b last:border-b-0"
            >
              <div className="flex gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-30 h-30 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between gap-2 flex-1">
                  <div>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500">
                      {item.category}
                    </p>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg font-bold">
                    {item.price}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400">
                    Added at: {new Date(item.addedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-2 h-full">
                <div className="flex justify-end">
                  <Button className="cursor-pointer">
                    <X />
                  </Button>
                </div>
                <div className="flex">
                  <Button className="flex items-center gap-2 cursor-pointer">
                    <ShoppingCart />
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
