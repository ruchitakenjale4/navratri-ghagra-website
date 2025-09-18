
import React, { useState } from 'react';
import { Star, Phone, ShoppingBag, Sparkles, Users, Crown } from 'lucide-react';

const GhagraLandingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate catalog items with local images only
  const catalogImages = Array.from({ length: 19 }, (_, index) => {
    const id = index + 1;
    
    return {
      id,
      image: `/photos/img${id}.jpg`
    };
  });

  const handleBookNow = () => {
    const phoneNumber = "919226216553";
    const message = encodeURIComponent("Hi! I'm interested in renting/buying a Ghagra for Navratri. Please share more details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-x-hidden">
      {/* Decorative elements for Navratri vibes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-red-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div>

      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Crown className="h-7 w-7 text-white drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Navratri Collections
                </h1>
                <p className="text-sm text-orange-100">Premium Ghagra Rentals</p>
              </div>
            </div>
            <button
              onClick={handleBookNow}
              className="bg-white hover:bg-orange-50 text-orange-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Celebrate{' '}
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    Navratri
                  </span>{' '}
                  in Style!
                </h2>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl transform rotate-1"></div>
                    <div className="relative flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Brand New Ghagra Straight from Surat</h3>
                        <p className="text-gray-700">Authentic designs directly from the textile capital with intricate embroidery and premium fabrics</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl transform -rotate-1"></div>
                    <div className="relative flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Rent starting from ₹699 for College Students</h3>
                        <p className="text-gray-700">Special student-friendly pricing with flexible rental options for the complete festive season</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl transform rotate-1"></div>
                    <div className="relative flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <ShoppingBag className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Additional Jewelry Available</h3>
                        <p className="text-gray-700">Complete your festive look with matching traditional jewelry, accessories, and styling options</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-orange-200">
                <img
                  src="/photos/img1.jpg"
                  alt="Beautiful Ghagra Collection"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1594736797933-d0101ba2fe65?w=600&h=800&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <p className="text-sm font-bold">Premium Quality</p>
                  </div>
                  <p className="text-xs opacity-90">Perfect for Navratri celebrations</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Star className="h-10 w-10 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 relative">
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-orange-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-red-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-yellow-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Stunning
              </span>{' '}
              Collection
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our handpicked selection of premium Ghagras perfect for your Navratri celebrations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {catalogImages.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-orange-100"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden h-64 md:h-80 cursor-pointer">
                  <img
                    src={item.image}
                    alt={`Ghagra Design ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.src = `https://images.unsplash.com/photo-159473679${3 + (item.id % 3)}-d0101ba2fe65?w=400&h=600&fit=crop`;
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Details
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-white/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Shine This Navratri? ✨
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your perfect Ghagra now and make this festive season unforgettable. 
            Our team is ready to help you find the perfect outfit for your celebrations!
          </p>
          <div className="text-center space-y-4">
            <div className="text-white/90 text-lg font-medium">
              📞 Call us: 
              <span className="font-bold text-white mx-2">8261822084</span>
              |
              <span className="font-bold text-white mx-2">9322897315</span>
            </div>
          <button
            onClick={handleBookNow}
            className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center space-x-3 mx-auto group"
          >
            <Phone className="h-5 w-5 group-hover:animate-pulse" />
            <span>Book Now on WhatsApp</span>
          </button>
          </div>
          <p className="text-white/90 mt-6 text-sm flex items-center justify-center space-x-4">
            <span>✅ Quick response</span>
            <span>✅ Easy booking</span>
            <span>✅ Best prices guaranteed</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Navratri Collections</h3>
          </div>
          <p className="text-gray-300 mb-4">Making your Navratri celebrations more beautiful & memorable</p>
          <p className="text-sm text-gray-400">
            © 2025 Navratri Collections. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={`Ghagra Design ${selectedImage.id}`}
                  className="w-full max-h-[75vh] object-contain bg-gray-100"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-159473679${3 + (selectedImage.id % 3)}-d0101ba2fe65?w=800&h=1200&fit=crop`;
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">Premium Ghagra Design</h3>
                <div className="flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow();
                    }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book This Design
                  </button>
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GhagraLandingPage;