
import { Image as ImageIcon, Play } from 'lucide-react';

const ImageGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  ];

  const handleViewAllPhotos = () => {
    console.log('View all photos clicked - opening gallery modal');
    // Add functionality to open full gallery modal
  };

  const handlePlayVideo = () => {
    console.log('Play video clicked - starting property video tour');
    // Add functionality to play property video
  };

  const handleViewMorePhotos = () => {
    console.log('View more photos clicked - expanding image grid');
    // Add functionality to show more images
  };

  const handleImageClick = (index: number) => {
    console.log(`Image ${index + 1} clicked - opening lightbox`);
    // Add functionality to open image in lightbox
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-3 rounded-3xl overflow-hidden theme-glass-card p-4">
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-2xl group transition-all duration-300 border border-white/10 cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image} 
              alt={`Apartment view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {index === 0 && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayVideo();
                }}
                className="absolute bottom-4 right-4 p-3 rounded-full theme-neo-button opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-white drop-shadow-sm" />
              </button>
            )}
            {index === 5 && (
              <div 
                className="absolute inset-0 backdrop-blur-xl bg-black/50 flex items-center justify-center border border-white/10 rounded-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewMorePhotos();
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2 text-white drop-shadow-lg font-montserrat">+9</div>
                  <div className="text-sm opacity-80 text-white drop-shadow-sm">More Photos</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button 
        onClick={handleViewAllPhotos}
        className="mt-6 w-full py-4 rounded-2xl theme-neo-button theme-text-primary font-semibold"
      >
        <div className="flex items-center justify-center space-x-3">
          <ImageIcon className="w-5 h-5 drop-shadow-sm" />
          <span className="drop-shadow-sm font-montserrat">View All Photos</span>
        </div>
      </button>
    </div>
  );
};

export default ImageGallery;
