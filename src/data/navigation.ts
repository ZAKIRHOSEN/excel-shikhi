export interface NavItem {
  label: string
  path: string
}

export const mainNavItems: NavItem[] = [
  { label: 'হোম', path: '/' },
  { label: 'প্রাথমিক', path: '/beginner' },
  { label: 'মধ্যম', path: '/intermediate' },
  { label: 'উন্নত', path: '/advanced' },
  { label: 'ড্যাশবোর্ড', path: '/dashboard' },  
  { label: 'সেটিংস', path: '/settings' },

]

export const sidebarNavItems: NavItem[] = [
  { label: 'হোম', path: '/' },
  { label: 'প্রাথমিক', path: '/beginner' },
  { label: 'মধ্যম', path: '/intermediate' },
  { label: 'উন্নত', path: '/advanced' },
  { label: 'ড্যাশবোর্ড', path: '/dashboard' },
  { label: 'সেটিংস', path: '/settings' },
]
