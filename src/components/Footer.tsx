import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">ShopZone</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted online marketplace for electronics, cameras, computers, and sports goods.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/electronics" className="hover:text-accent-orange">Electronics</Link></li>
              <li><Link to="/cameras" className="hover:text-accent-orange">Cameras</Link></li>
              <li><Link to="/computers" className="hover:text-accent-orange">Computers & Laptops</Link></li>
              <li><Link to="/sports" className="hover:text-accent-orange">Sports Goods</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-orange">Help Center</a></li>
              <li><a href="#" className="hover:text-accent-orange">Returns</a></li>
              <li><a href="#" className="hover:text-accent-orange">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent-orange">Contact Us</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-orange">About Us</a></li>
              <li><a href="#" className="hover:text-accent-orange">Careers</a></li>
              <li><a href="#" className="hover:text-accent-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-orange">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 ShopZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};