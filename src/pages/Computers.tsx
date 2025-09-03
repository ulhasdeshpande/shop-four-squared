import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const Computers = () => {
  const products = getProductsByCategory("computers");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Computers & Laptops</h1>
        <p className="text-muted-foreground">
          High-performance computers and laptops for work, gaming, and creative projects.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Computers;