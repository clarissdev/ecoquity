'use client'
import cx from "clsx";
import Link from "next/link";

import Logo from "../Footer/components/Logo";

import styles from "./index.module.scss";

import Flex from "@/modules/app-ui/Flex";
import { useState } from "react";
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Navbar({ className, style }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cx(styles.container, className)} style={style}>
        <Link href="/" className={styles.link}>
          <Logo.Compress height={52} className={styles.logo} />
          <Logo.Compress height={30} className={styles.logoCompress} />
        </Link>
    <div className={styles.navbar_lg}>
      <Flex.Row gap="16px">
          <Link href="/articles" className={styles.link}>
            Article
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
        </Flex.Row>
    </div>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/articles"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-700 hover:bg-green-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Article
                    </Link>
                    <Link
                      href="/about"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-700 hover:bg-green-50"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
          </SheetContent>
    </Sheet>
    {/* <div className={styles.navbat_sm}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true"/>
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true"/>
          )}
        </button>
        {isOpen && (
          <div className={styles.nav_link}>
            <Link href="/articles" className={styles.link}>
              <div className={styles.text_sm}>Article</div>
            </Link>
            <Link href="/about" className={styles.link}>
              <div className={styles.text_sm}>About us</div>
            </Link>
          </div>
      )}
    </div> */}

    </nav>
  );
}
