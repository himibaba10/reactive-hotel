import { MoreVertical, Search, Check, X, Clock } from 'lucide-react';

export default function AdminBookingsPage() {
  const bookings = [
    { id: 'BK-1029', guest: 'John Doe', room: 'The Canopy Suite', dates: 'Oct 12 - Oct 15', status: 'Confirmed', amount: '$1,250' },
    { id: 'BK-1030', guest: 'Sarah Smith', room: 'Riverside Cabin', dates: 'Oct 18 - Oct 20', status: 'Pending', amount: '$850' },
    { id: 'BK-1031', guest: 'Michael Brown', room: 'Forest Villa', dates: 'Nov 02 - Nov 07', status: 'Cancelled', amount: '$3,100' },
    { id: 'BK-1032', guest: 'Emily Davis', room: 'The Canopy Suite', dates: 'Dec 22 - Dec 28', status: 'Confirmed', amount: '$4,500' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Bookings</h1>
          <p className='text-slate dark:text-linen/70 mt-1'>Manage all reservations and their statuses.</p>
        </div>
        <div className='relative w-full md:w-64'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search size={18} className='text-slate dark:text-linen/50' />
          </div>
          <input 
            type="text" 
            placeholder="Search by ID or Guest"
            className='w-full pl-10 pr-4 py-2 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-sm text-charcoal dark:text-linen'
          />
        </div>
      </div>

      <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-sand-light/50 dark:bg-charcoal-light border-b border-charcoal/10 dark:border-linen/10'>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Booking ID</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Guest</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Room</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Dates</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Amount</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Status</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr key={i} className='border-b border-charcoal/5 dark:border-linen/5 last:border-0 hover:bg-sand-light/20 dark:hover:bg-charcoal-light/50 transition-colors'>
                  <td className='p-4 text-sm font-medium text-charcoal dark:text-linen'>{booking.id}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/80'>{booking.guest}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/80'>{booking.room}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/80'>{booking.dates}</td>
                  <td className='p-4 text-sm font-bold text-charcoal dark:text-linen'>{booking.amount}</td>
                  <td className='p-4'>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                      ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                      ${booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                      ${booking.status === 'Cancelled' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                    `}>
                      {booking.status === 'Confirmed' && <Check size={12} />}
                      {booking.status === 'Pending' && <Clock size={12} />}
                      {booking.status === 'Cancelled' && <X size={12} />}
                      {booking.status}
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
