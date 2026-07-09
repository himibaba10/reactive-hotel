import { MoreVertical, Search, Shield, Ban } from 'lucide-react';

export default function AdminUsersPage() {
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Customer', joined: 'Jan 15, 2026', status: 'Active' },
    { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', role: 'Customer', joined: 'Mar 22, 2026', status: 'Active' },
    { id: '3', name: 'Admin User', email: 'admin@verdant.com', role: 'Admin', joined: 'Jan 01, 2026', status: 'Active' },
    { id: '4', name: 'Bad Actor', email: 'spam@bot.com', role: 'Customer', joined: 'Jul 01, 2026', status: 'Blocked' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Users</h1>
          <p className='text-slate dark:text-linen/70 mt-1'>Manage customers and administrators.</p>
        </div>
        <div className='relative w-full md:w-64'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search size={18} className='text-slate dark:text-linen/50' />
          </div>
          <input 
            type="text" 
            placeholder="Search users..."
            className='w-full pl-10 pr-4 py-2 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-sm text-charcoal dark:text-linen'
          />
        </div>
      </div>

      <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-sand-light/50 dark:bg-charcoal-light border-b border-charcoal/10 dark:border-linen/10'>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Name</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Email</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Role</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Joined</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Status</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className='border-b border-charcoal/5 dark:border-linen/5 last:border-0 hover:bg-sand-light/20 dark:hover:bg-charcoal-light/50 transition-colors'>
                  <td className='p-4 text-sm font-bold text-charcoal dark:text-linen'>{user.name}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/80'>{user.email}</td>
                  <td className='p-4'>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                      ${user.role === 'Admin' ? 'bg-sage/20 text-sage' : 'bg-sand dark:bg-charcoal-light text-charcoal dark:text-linen'}
                    `}>
                      {user.role === 'Admin' && <Shield size={12} />}
                      {user.role}
                    </span>
                  </td>
                  <td className='p-4 text-sm text-slate dark:text-linen/80'>{user.joined}</td>
                  <td className='p-4'>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                      ${user.status === 'Active' ? 'text-green-600' : 'text-red-500'}
                    `}>
                      {user.status === 'Blocked' && <Ban size={12} />}
                      {user.status}
                    </span>
                  </td>
                  <td className='p-4 flex justify-center'>
                    <button className='text-slate hover:text-charcoal dark:text-linen/50 dark:hover:text-linen p-2 rounded-lg hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors'>
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
