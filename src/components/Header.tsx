import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cartStore";

const categories = [
  { name: "Electronics", path: "/electronics" },
  { name: "Cameras", path: "/cameras" },
  { name: "Computers & Laptops", path: "/computers" },
  { name: "Sports Goods", path: "/sports" },
];

export const Header = () => {
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="text-2xl font-bold">
            ShopZone
          </Link>
          
          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-2 bg-white text-foreground"
              />
              <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 bg-accent-orange hover:bg-accent-orange/90">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light">
              <User className="h-5 w-5 mr-2" />
              Sign In
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-orange text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary-light border-t border-primary-foreground/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary">
              <Menu className="h-4 w-4 mr-2" />
              All Categories
            </Button>
            
            {categories.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-primary-foreground hover:bg-primary/50"
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};