"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        {/* Logo and Title */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Nu-Bank</h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}

        {/* Display User Information */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Logged in as:</p>
          <p className="text-lg font-bold">{user.firstName} {user.lastName}</p>
        </div>
      </nav>

      {/* Footer */}
      <footer className="mt-auto">
        <p className="text-center text-xs text-gray-400">Nu-Bank &copy; 2024</p>
      </footer>
    </section>
  )
}

export default Sidebar;
