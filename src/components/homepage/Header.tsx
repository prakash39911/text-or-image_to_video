"use client";

import React, { useState, useEffect } from "react";
import { VideoIcon, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { LogoutUser } from "@/app/actions/authActions";
import { toast } from "sonner";
import CreditsWidget from "../CreditWidget";
import { useSession } from "next-auth/react";

const Header = ({
  isLoggedIn,
  credit,
}: {
  isLoggedIn: boolean;
  credit: number;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status, update, data: session } = useSession();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateSessionData = async () => {
      if (status === "authenticated" && !session.user.emailVerified) {
        await update({ trigger: "emailVerification" });
      }
    };

    updateSessionData();
  }, [session?.user.emailVerified, status, update]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            <VideoIcon className="h-8 w-8 text-teal-400" />
            <span className="bg-gradient-to-r from-teal-400 to-sky-500 bg-clip-text text-transparent">
              VideoAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {pathname !== "/buy-now" && (
              <div className="hidden md:flex items-center gap-6">
                <NavLinks scrollToSection={scrollToSection} />
                <Button
                  onClick={() => router.push("/buy-now")}
                  variant="ghost"
                  className=" text-teal-500 font-bold cursor-pointer border-teal-800 border"
                >
                  Purchase Credits
                </Button>
              </div>
            )}

            {isLoggedIn ? (
              <div className="flex gap-2">
                <CreditsWidget credits={credit} />
                <Button
                  variant="ghost"
                  className="border border-teal-400 text-gray-200 cursor-pointer"
                  onClick={() => router.push("/ai/text-to-video")}
                >
                  Create Video
                </Button>
                <Button
                  className="border border-red-600 cursor-pointer text-gray-200 hover:border-red-400"
                  variant="ghost"
                  onClick={async () => {
                    await LogoutUser();
                    router.refresh();
                    toast("LogOut Successfull");
                  }}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                className="border border-teal-500 hover:border-teal-300 cursor-pointer"
                onClick={(e) => {
                  router.push("/auth");
                  scrollToSection(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "#get-started"
                  );
                }}
              >
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md p-6 shadow-lg border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {pathname !== "/buy-now" && (
                <div className="flex flex-col items-center gap-6">
                  <NavLinks scrollToSection={scrollToSection} isMobile={true} />
                  <Button
                    onClick={() => router.push("/buy-now")}
                    variant="ghost"
                    className=" text-teal-500 font-bold cursor-pointer border-teal-800 border"
                  >
                    Purchase Credits
                  </Button>
                </div>
              )}
              {isLoggedIn ? (
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="border border-teal-400 cursor-pointer"
                    onClick={() => router.push("/ai/text-to-video")}
                  >
                    Create Video
                  </Button>
                  <Button
                    className="border border-red-600 cursor-pointer hover:border-red-400"
                    variant="ghost"
                    onClick={async () => {
                      await LogoutUser();
                      router.refresh();
                      toast("LogOut Successfull");
                    }}
                  >
                    Log Out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full bg-black text-white border-2 border-teal-400"
                  onClick={(e) => {
                    router.push("/auth");
                    scrollToSection(
                      e as unknown as React.MouseEvent<HTMLAnchorElement>,
                      "#get-started"
                    );
                  }}
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  isMobile = false,
  scrollToSection,
}) => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => scrollToSection(e, item.href)}
          className={` ${
            isMobile
              ? "block py-3 border-b border-gray-800 hover:text-teal-500"
              : "inline-block"
          } text-gray-300 transition-colors duration-200 hover:text-teal-500`}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Header;
