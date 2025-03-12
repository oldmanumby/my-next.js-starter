'use client';

import { AnimatedBackground } from '../motion-primitives/animated-background';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Footer() {
  const MENU_ITEMS = [
    { name: 'About', href: '/about' },
    { name: 'Legal', href: '/legal' },
    { name: 'Media', href: '/media' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ];
  const APP_VERSION = 'v0.1.0';
  
  // Copyright text configuration - customize the prefix and suffix as needed
  const COPYRIGHT_PREFIX = '\u00A9 '; // Unicode for © symbol, more compatible across environments
  const COPYRIGHT_SUFFIX = ' Tabletop.Ninja';
  
  // Use client-side rendering for the year to avoid hydration mismatch
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full bg-background text-foreground py-3 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-0">
          {/* Copyright + Version */}
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            {COPYRIGHT_PREFIX}{year}{COPYRIGHT_SUFFIX} • {APP_VERSION}
          </div>

          {/* Footer Menu */}
          <div className="flex justify-center order-1 md:order-2">
            <AnimatedBackground
              className="rounded-lg bg-secondary/50"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {MENU_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  data-id={item.name}
                  className="px-3 py-1.5 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </AnimatedBackground>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-end gap-3 order-3 md:order-3">
            {/* GitHub */}
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Mastodon */}
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Mastodon"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792.008 12.044 0h-.084c-3.747 0-5.466.242-5.92.309-2.687.394-4.954 2.426-5.304 5.004-.193 1.45-.193 3.068-.193 4.096v.96c0 2.852.11 5.682.642 8.093.351 1.58 1.252 2.88 2.533 3.825 1.48 1.094 3.262 1.638 5.363 1.716a14.98 14.98 0 002.333-.118c1.225-.218 2.431-.668 3.569-1.332l-.077-1.644s-1.552.502-3.3.44c-1.733-.062-3.557-.234-3.834-2.936a4.35 4.35 0 01-.04-.637s1.696.413 3.834.51c1.31.06 2.54-.08 3.78-.236 2.39-.302 4.467-1.86 4.728-3.285.367-2 .34-4.878.34-4.878V9.41c0-1.028-.001-2.647-.193-4.096zM19.141 14.7h-2.284v-5.61c0-1.179-.5-1.775-1.499-1.775-1.105 0-1.657.712-1.657 2.12v3.07h-2.27v-3.07c0-1.408-.553-2.12-1.657-2.12-1 0-1.499.596-1.499 1.775v5.61H5.99V8.886c0-1.179.302-2.12.905-2.824.623-.704 1.438-1.063 2.451-1.063 1.172 0 2.059.56 2.633 1.68L12 6.97l.021-.192c.574-1.12 1.461-1.68 2.633-1.68 1.013 0 1.828.36 2.451 1.063.604.704.905 1.645.905 2.824V14.7h-.869z" />
              </svg>
            </a>
            {/* X.com (Twitter) */}
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
