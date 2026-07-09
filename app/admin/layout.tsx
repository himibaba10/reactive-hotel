import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopBar from '../components/admin/AdminTopBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-sand-light/30 dark:bg-charcoal/20 flex'>
      <AdminSidebar />
      <div className='flex-1 ml-64 flex flex-col'>
        <AdminTopBar />
        <main className='flex-1 p-8 overflow-auto'>
          {children}
        </main>
      </div>
    </div>
  );
}
