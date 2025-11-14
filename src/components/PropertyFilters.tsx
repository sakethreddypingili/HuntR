
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Utensils, ShoppingCart, TreePine, Train, School, Shield, IndianRupee } from 'lucide-react';

interface PropertyFiltersProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  bhkTypes: string[];
  setBhkTypes: (value: string[]) => void;
  furnishing: string;
  setFurnishing: (value: string) => void;
  cityName: string;
}

const bhkOptions = ["PG/Hostel", "1 BHK", "2 BHK", "Flat/Roommate"];
const furnishingOptions = ["Any", "Fully Furnished", "Semi Furnished", "Unfurnished"];
const lifestyleOptions = [
    { name: "Restaurants", icon: <Utensils className="h-5 w-5" /> },
    { name: "Malls", icon: <ShoppingCart className="h-5 w-5" /> },
    { name: "Parks", icon: <TreePine className="h-5 w-5" /> },
    { name: "Transport", icon: <Train className="h-5 w-5" /> },
    { name: "Schools", icon: <School className="h-5 w-5" /> },
    { name: "Safety", icon: <Shield className="h-5 w-5" /> },
];

export default function PropertyFilters({
  priceRange,
  setPriceRange,
  bhkTypes,
  setBhkTypes,
  furnishing,
  setFurnishing,
  cityName,
}: PropertyFiltersProps) {

  const handleBhkChange = (bhk: string) => {
    setBhkTypes(prev => 
      prev.includes(bhk) ? prev.filter(item => item !== bhk) : [...prev, bhk]
    );
  };
  
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.77810356519!2d77.6200238477051!3d12.943354395610217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc67%3A0x1100f20963595b30!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin&q=${encodeURIComponent(cityName)}`;

  return (
    <div className="space-y-6 sticky top-24">
       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Map View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 rounded-lg overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Filter Properties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div>
            <Label className="font-semibold text-gray-800">BHK Type</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {bhkOptions.map(bhk => (
                <div key={bhk} className="flex items-center space-x-2">
                  <Checkbox 
                    id={bhk} 
                    checked={bhkTypes.includes(bhk.toLowerCase())}
                    onCheckedChange={() => handleBhkChange(bhk.toLowerCase())}
                  />
                  <Label htmlFor={bhk} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {bhk}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="font-semibold text-gray-800">Price Range</Label>
            <Slider
              min={0}
              max={50000}
              step={1000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
          
          <div>
            <Label className="font-semibold text-gray-800">Furnishing</Label>
            <RadioGroup value={furnishing} onValueChange={setFurnishing} className="mt-2 space-y-1">
              {furnishingOptions.map(option => (
                 <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.toLowerCase()} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                 </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-primary">Lifestyle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
              <Label className="font-semibold text-gray-800">Quick Filters</Label>
              <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">Family Friendly</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Near Metro</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Gated Society</Button>
              </div>
          </div>
          {lifestyleOptions.map(item => (
            <div key={item.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 font-semibold text-gray-700">
                    {item.icon} {item.name}
                </Label>
                <Input type="number" defaultValue={4} min={1} max={5} className="w-16 h-8 text-center" />
              </div>
              <Slider defaultValue={[4]} min={1} max={5} step={1} />
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}
