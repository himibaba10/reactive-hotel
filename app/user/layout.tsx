import UserSidebar from '../components/user/UserSidebar';
import UserTopBar from '../components/user/UserTopBar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen bg-sand-light/30 dark:bg-[#1A1A1A]'>
      <UserSidebar />
      <div className='flex-1 flex flex-col h-screen overflow-hidden'>
        <UserTopBar />
        <main className='flex-1 overflow-y-auto p-8 relative'>
          {children}
        </main>
      </div>
    </div>
  );
}
