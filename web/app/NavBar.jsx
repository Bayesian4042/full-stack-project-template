'use client';

import React from 'react'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { LucideAirplay } from 'lucide-react';

export const NavBar = () => {

    const currentPath = usePathname();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav>
        <div className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"> <LucideAirplay /> </Link>
            {links.map(({ href, label }) => (
                <Link key={`${href}${label}`} href={href} className={classnames({
                    'text-zinc-900': href === currentPath,
                    'text-zinc-500': href !== currentPath,
                    'hober:text-zinc-900 transition-colors': true
                    }
                    )}>
                    {label}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default NavBar;