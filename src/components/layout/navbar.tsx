import Link from 'next/link';
import Image from 'next/image';
import Component from '@/components/ui/theme-switcher';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Navbar with 90% opacity and medium blur effect */}
      <div className="backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo linking to home */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Placeholder for future menu items and theme switcher */}
          <div className="flex items-center space-x-4">
            {/* Menu items will be added here */}
            <Component />
          </div>
        </div>
      </div>
    </header>
  );
}
