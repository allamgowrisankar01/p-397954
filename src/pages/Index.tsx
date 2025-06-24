
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import ApartmentInfo from "../components/ApartmentInfo";
import MoveInDetails from "../components/MoveInDetails";
import AboutProperty from "../components/AboutProperty";
import PremiumAmenities from "../components/PremiumAmenities";
import ContactOwner from "../components/ContactOwner";
import SimilarProperties from "../components/SimilarProperties";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden transition-all duration-500">
      <div className="relative z-10">
        <Header />
        <main className="pb-24 px-4 max-w-md mx-auto lg:max-w-2xl space-y-6">
          <ImageGallery />
          <div className="space-y-6">
            <ApartmentInfo />
            <div className="grid gap-6">
              <MoveInDetails />
              <AboutProperty />
            </div>
            <PremiumAmenities />
            <ContactOwner />
            <SimilarProperties />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
