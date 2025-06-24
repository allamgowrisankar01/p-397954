
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

  return (
    <div className="relative">
      {/* Glassmorphism + Neomorphism gallery container */}
      <div className="grid grid-cols-3 gap-3 rounded-3xl overflow-hidden bg-slate-800/60 backdrop-blur-3xl p-4 border border-slate-600/30 shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.02)]">
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-2xl group shadow-[8px_8px_16px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.05)] transition-all duration-300 border border-slate-600/20 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <img 
              src={image} 
              alt={`Apartment view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {index === 0 && (
              <button className="absolute bottom-4 right-4 p-3 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[4px_4px_8px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.6),-1px_-1px_2px_rgba(255,255,255,0.1)]">
                <Play className="w-5 h-5 text-white drop-shadow-sm" />
              </button>
            )}
            {index === 5 && (
              <div className="absolute inset-0 backdrop-blur-xl bg-slate-900/80 flex items-center justify-center border border-slate-600/30 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2 text-white drop-shadow-lg">+9</div>
                  <div className="text-sm opacity-80 text-slate-300 drop-shadow-sm">More Photos</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Glassmorphism view all button */}
      <button className="mt-6 w-full py-4 rounded-2xl bg-slate-800/70 backdrop-blur-xl border border-pink-500/20 text-pink-400 font-semibold shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_2px_rgba(255,255,255,0.1)] transition-all duration-300">
        <div className="flex items-center justify-center space-x-3">
          <ImageIcon className="w-5 h-5 drop-shadow-sm" />
          <span className="drop-shadow-sm">View All Photos</span>
        </div>
      </button>
    </div>
  );
};

export default ImageGallery;
