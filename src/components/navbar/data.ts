import { DicesIcon, Home, Newspaper, UserCircle2 } from 'lucide-vue-next'

export const data = [
  {
    title: 'Beranda',
    link: '/',
    name: 'home',
    icon: Home,
  },
  {
    title: 'Berita',
    link: '/news',
    name: 'news',
    icon: Newspaper,
  },
  {
    title: 'Transaksi',
    link: '/transaction',
    name: 'transaction',
    icon: DicesIcon,
  },
  {
    title: 'Profile',
    link: '/profile',
    name: 'profile',
    icon: UserCircle2,
  },
]
