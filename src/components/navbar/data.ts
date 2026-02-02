import { DicesIcon, Home, LogIn, LogOut, Newspaper, UserCircle2 } from 'lucide-vue-next'

export const data = [
  {
    requireAuth: false,
    title: 'Beranda',
    link: '/',
    name: 'home',
    icon: Home,
  },
  {
    requireAuth: false,
    title: 'Berita',
    link: '/news',
    name: 'news',
    icon: Newspaper,
  },
  {
    requireAuth: false,
    title: 'Login',
    link: '/login',
    name: 'login',
    icon: LogIn,
  },
  {
    requireAuth: true,
    title: 'Transaksi',
    link: '/transaction',
    name: 'transaction',
    icon: DicesIcon,
  },
  {
    requireAuth: true,
    title: 'Profile',
    link: '/profile',
    name: 'profile',
    icon: UserCircle2,
  },
]
