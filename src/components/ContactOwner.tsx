
import { User, Phone, MessageCircle, Shield } from 'lucide-react';

const ContactOwner = () => {
  const handleChatClick = () => {
    console.log('Starting chat with property owner...');
    // Add functionality to open chat interface
  };

  const handleCallClick = () => {
    console.log('Calling property owner...');
    // Add functionality to initiate call
  };

  return (
    <div className="theme-glass-card rounded-3xl p-6">
      <h3 className="text-xl font-bold mb-6 theme-text-primary drop-shadow-lg font-montserrat">Contact Property Owner</h3>
      
      {/* Owner card */}
      <div className="flex items-center space-x-4 mb-6 p-4 theme-glass-card rounded-2xl">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff1c67] to-[#ff4585] flex items-center justify-center shadow-lg relative border border-white/20">
          <User className="w-7 h-7 text-white drop-shadow-sm" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>
        <div className="flex-1">
          <div className="font-semibold theme-text-primary text-lg drop-shadow-sm font-montserrat">Rajesh Kumar</div>
          <div className="text-sm theme-text-secondary flex items-center space-x-2">
            <span>Property Owner</span>
            <Shield className="w-3 h-3 text-green-400 drop-shadow-sm" />
            <span className="text-green-400 text-xs drop-shadow-sm">Verified</span>
          </div>
          <div className="text-xs theme-text-secondary mt-1">Usually responds within 10 minutes</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={handleChatClick}
          className="py-4 px-4 rounded-2xl theme-neo-button flex items-center justify-center space-x-2 theme-text-primary"
        >
          <MessageCircle className="w-5 h-5 drop-shadow-sm" />
          <span className="drop-shadow-sm font-montserrat font-semibold">Chat Now</span>
        </button>
        
        <button 
          onClick={handleCallClick}
          className="py-4 px-4 rounded-2xl theme-neo-button theme-text-primary font-semibold flex items-center justify-center space-x-2"
        >
          <Phone className="w-5 h-5" />
          <span className="font-montserrat">Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
