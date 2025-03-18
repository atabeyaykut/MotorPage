import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motorcycles } from '@/data/motorcycles';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/**
 * Exhibition page component that displays a filterable grid of motorcycles.
 * Implements responsive design and follows shadcn UI component standards.
 * 
 * Features:
 * - Filtering by year, brand, price range, engine type, mileage, and power
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Interactive cards with hover effects
 * - Direct navigation to motorcycle detail pages
 * - Reset filters functionality
 * 
 * @component
 * @example
 * ```jsx
 * <Exhibition />
 * ```
 */
const Exhibition = () => {
  const [filters, setFilters] = useState({
    year: "all",
    brand: "all",
    priceRange: [0, 1000000],
    engineType: '',
    mileage: '',
    enginePower: ''
  });

  /**
   * Converts the motorcycles object into a flat array with additional computed properties
   * @returns {Array} Array of motorcycle objects with brand, price, and mileage
   */
  const motorcycleList = useMemo(() => {
    return Object.entries(motorcycles).flatMap(([brand, models]) =>
      Object.entries(models).map(([slug, model]) => ({
        ...model,
        brand,
        slug,
        price: Math.floor(Math.random() * (1000000 - 50000) + 50000), // Dummy price for demo
        mileage: Math.floor(Math.random() * 50000), // Dummy mileage for demo
      }))
    );
  }, []);

  /**
   * Filters motorcycles based on current filter state
   * @returns {Array} Filtered array of motorcycles
   */
  const filteredMotorcycles = useMemo(() => {
    return motorcycleList.filter(moto => {
      const yearMatch = filters.year === "all" || moto.modelYear === filters.year;
      const brandMatch = filters.brand === "all" || moto.brand === filters.brand;
      const priceMatch = moto.price >= filters.priceRange[0] && moto.price <= filters.priceRange[1];
      const engineTypeMatch = !filters.engineType ||
        (moto.engineSpecs && moto.engineSpecs['Motor Tipi']?.toLowerCase().includes(filters.engineType.toLowerCase()));
      const mileageMatch = !filters.mileage || moto.mileage <= parseInt(filters.mileage);
      const powerMatch = !filters.enginePower ||
        (moto.engineSpecs && moto.engineSpecs['Motor Gücü']?.toLowerCase().includes(filters.enginePower.toLowerCase()));

      return yearMatch && brandMatch && priceMatch && engineTypeMatch && mileageMatch && powerMatch;
    });
  }, [motorcycleList, filters]);

  // Get unique years and brands for filter options
  const uniqueYears = [...new Set(motorcycleList.map(m => m.modelYear).filter(Boolean))].sort((a, b) => b - a);
  const uniqueBrands = [...new Set(motorcycleList.map(m => m.brand))].sort();

  /**
   * Resets all filters to their default values
   */
  const handleResetFilters = () => {
    setFilters({
      year: "all",
      brand: "all",
      priceRange: [0, 1000000],
      engineType: '',
      mileage: '',
      enginePower: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Motosiklet Sergisi</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {filteredMotorcycles.length} adet motosiklet listeleniyor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Filters Section */}
          <div className="lg:sticky lg:top-4 space-y-4 sm:space-y-6 bg-card p-4 sm:p-6 rounded-lg shadow-md border lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-card-foreground">Filtreler</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetFilters}
                className="text-muted-foreground hover:text-primary"
              >
                Sıfırla
              </Button>
            </div>
            
            {/* Year Filter */}
            <div className="space-y-2">
              <Label className="text-card-foreground">Yıl</Label>
              <Select value={filters.year} onValueChange={(value) => setFilters(prev => ({ ...prev, year: value }))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Yıl seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tümü</SelectItem>
                  {uniqueYears.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
              <Label className="text-card-foreground">Marka</Label>
              <Select value={filters.brand} onValueChange={(value) => setFilters(prev => ({ ...prev, brand: value }))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Marka seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tümü</SelectItem>
                  {uniqueBrands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand.toUpperCase()}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-4">
              <Label className="text-card-foreground">Maksimum Fiyat</Label>
              <div className="pt-2">
                <Slider
                  defaultValue={[1000000]}
                  max={1000000}
                  step={10000}
                  value={[filters.priceRange[1]]}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: [0, value[0]] }))}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>0 TL</span>
                <span>{filters.priceRange[1].toLocaleString()} TL</span>
              </div>
            </div>

            {/* Engine Type Filter */}
            <div className="space-y-2">
              <Label className="text-card-foreground">Motor Tipi</Label>
              <Input
                type="text"
                placeholder="Motor tipi ara..."
                value={filters.engineType}
                onChange={(e) => setFilters(prev => ({ ...prev, engineType: e.target.value }))}
                className="w-full"
              />
            </div>

            {/* Mileage Filter */}
            <div className="space-y-2">
              <Label className="text-card-foreground">Maksimum KM</Label>
              <Input
                type="number"
                placeholder="Maksimum KM"
                value={filters.mileage}
                onChange={(e) => setFilters(prev => ({ ...prev, mileage: e.target.value }))}
                className="w-full"
              />
            </div>

            {/* Engine Power Filter */}
            <div className="space-y-2">
              <Label className="text-card-foreground">Motor Gücü</Label>
              <Input
                type="text"
                placeholder="Motor gücü ara..."
                value={filters.enginePower}
                onChange={(e) => setFilters(prev => ({ ...prev, enginePower: e.target.value }))}
                className="w-full"
              />
            </div>
          </div>

          {/* Motorcycles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredMotorcycles.length > 0 ? (
                filteredMotorcycles.map((motorcycle, index) => (
                  <Link
                    key={`${motorcycle.brand}-${motorcycle.name}-${index}`}
                    to={`/markalar/${motorcycle.brand.toLowerCase()}/${motorcycle.slug}`}
                    className="group transition-transform duration-300 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
                  >
                    <Card className="h-full overflow-hidden border transition-colors hover:border-primary/50 focus:border-primary/50">
                      <CardHeader className="space-y-2 p-4 sm:p-6">
                        <div className="aspect-[4/3] overflow-hidden rounded-md">
                          <img
                            src={motorcycle.heroImage}
                            alt={motorcycle.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs sm:text-sm">
                            {motorcycle.modelYear}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold tracking-tight text-base sm:text-lg">
                            {motorcycle.name}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {motorcycle.brand.toUpperCase()}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <div className="flex flex-col space-y-2">
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-muted-foreground">Fiyat:</span>
                            <span className="font-medium">{motorcycle.price.toLocaleString()} TL</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-muted-foreground">Kilometre:</span>
                            <span className="font-medium">{motorcycle.mileage.toLocaleString()} KM</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="lg:col-span-3 text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    Bu kriterlere uygun motosiklet bulunamadı.
                  </p>
                  <Button
                    variant="link"
                    onClick={handleResetFilters}
                    className="mt-2"
                  >
                    Filtreleri sıfırla
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
