import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useSearch } from "@/hooks/useSearch";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { results: filteredProducts, isLoading, totalResults } = useSearch(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">
          Search Results {query && `for "${query}"`}
        </h1>
        <p className="text-muted-foreground">
          {isLoading ? (
            "Searching..."
          ) : (
            `${totalResults} product${totalResults !== 1 ? 's' : ''} found`
          )}
        </p>
      </div>

      {isLoading ? (
        <div className="text-center py-16">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Searching products...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              {query 
                ? `We couldn't find any products matching "${query}". Try searching with different keywords.`
                : "Enter a search term to find products."
              }
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Try searching for:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Product names (e.g. "MacBook", "Sony", "Nike")</li>
                <li>Categories (e.g. "electronics", "cameras")</li>
                <li>Features (e.g. "wireless", "gaming", "professional")</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;