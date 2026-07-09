import RoomsHeroSection from '../components/rooms/RoomsHeroSection';
import RoomListSection from '../components/rooms/RoomListSection';
import AmenitiesSection from '../components/rooms/AmenitiesSection';
import CTASection from '../components/home/CTASection';

export default function RoomsPage() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <RoomsHeroSection />
      <RoomListSection />
      <AmenitiesSection />
      <CTASection />
    </div>
  );
}
