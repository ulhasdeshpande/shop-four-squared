import { useState, useEffect, useMemo } from 'react';
import { products } from '@/data/products';
import { Product } from '@/components/ProductCard';

export const useSearch = (query: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    
    return products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      
      return nameMatch || descriptionMatch || categoryMatch;
    }).sort((a, b) => {
      // Prioritize name matches over description matches
      const aNameMatch = a.name.toLowerCase().includes(searchTerm);
      const bNameMatch = b.name.toLowerCase().includes(searchTerm);
      
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;
      
      return 0;
    });
  }, [query]);

  const suggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    
    const searchTerm = query.toLowerCase();
    const uniqueSuggestions = new Set<string>();
    
    products.forEach(product => {
      // Add product name if it contains the search term
      if (product.name.toLowerCase().includes(searchTerm)) {
        uniqueSuggestions.add(product.name);
      }
      
      // Add category if it matches
      if (product.category.toLowerCase().includes(searchTerm)) {
        const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        uniqueSuggestions.add(categoryName);
      }
    });
    
    return Array.from(uniqueSuggestions).slice(0, 5);
  }, [query]);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return {
    results,
    suggestions,
    isLoading,
    hasResults: results.length > 0,
    totalResults: results.length
  };
};