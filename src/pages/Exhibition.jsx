import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motorcycles } from '@/data/motorcycles';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Exhibition = () => {
  const [filters, setFilters] = useState({
    year: "all",
    brand: "all",
    priceRange: [0, 1000000],
    engineType: '',
    mileage: '',
    enginePower: ''
  });

  // Convert motorcycles object to array for easier filtering
  const motorcycleList = useMemo(() => {
    return Object.entries(motorcycles).flatMap(([brand, models]) =>
      Object.values(models).map(model => ({
        ...model,
        brand,
        price: Math.floor(Math.random() * (1000000 - 50000) + 50000), // Dummy price for demo
        mileage: Math.floor(Math.random() * 50000), // Dummy mileage for demo
      }))
    );
  }, []);

  // Filter motorcycles based on current filters
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

  const uniqueYears = [...new Set(motorcycleList.map(m => m.modelYear).filter(Boolean))].sort((a, b) => b - a);
  const uniqueBrands = [...new Set(motorcycleList.map(m => m.brand))].sort();

  // Reset all filters
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold text-primary">Motosiklet Sergisi</h1>
          <p className="text-muted-foreground">
            {filteredMotorcycles.length} adet motosiklet listeleniyor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="space-y-6 bg-card p-6 rounded-lg shadow-md border">
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
              <Label className="text-card-foreground">Fiyat Aralığı</Label>
              <div className="pt-2">
                <Slider
                  defaultValue={[0, 1000000]}
                  max={1000000}
                  step={10000}
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{filters.priceRange[0].toLocaleString()} TL</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMotorcycles.length > 0 ? (
                filteredMotorcycles.map((motorcycle, index) => (
                  <Link
                    key={index}
                    to={`/markalar/${motorcycle.brand.toLowerCase()}/${motorcycle.slug || motorcycle.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <Card className={cn(
                      "overflow-hidden transition-all duration-300",
                      "hover:shadow-lg hover:border-primary",
                      "bg-card border cursor-pointer"
                    )}>
                      <CardHeader className="p-0">
                        <div className="relative">
                          <img
                            src={motorcycle.heroImage}
                            alt={motorcycle.name}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <Badge className="absolute top-2 right-2" variant="secondary">
                            {motorcycle.modelYear || 'Yeni'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 space-y-2">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {motorcycle.name}
                        </h3>
                        <p className="text-sm text-muted-foreground uppercase">{motorcycle.brand}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <p className="text-lg font-bold text-primary">
                          {motorcycle.price.toLocaleString()} TL
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {motorcycle.mileage.toLocaleString()} KM
                        </p>
                      </CardFooter>
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
