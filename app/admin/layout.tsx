import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopBar from '../components/admin/AdminTopBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen bg-sand-light/30 dark:bg-[#1A1A1A]'>
      <AdminSidebar />
      <div className='flex-1 flex flex-col min-w-0 h-screen overflow-hidden'>
        <AdminTopBar />
        <main className='flex-1 overflow-y-auto p-4 md:p-8 relative'>
          {children}
        </main>
      </div>
    </div>
  );
}
