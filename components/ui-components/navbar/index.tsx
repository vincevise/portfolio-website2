'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ onClose, anchorRef }: { onClose: () => void; anchorRef: React.RefObject<HTMLElement> }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Set dropdown position relative to button
  useEffect(() => {
    if (anchorRef.current && window) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX - 120,
      });
    }
  }, [anchorRef]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return createPortal(
  <AnimatePresence>
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-white    p-1 z-[200] w-[160px] contianer-border-style-sm space-y-1"
      style={{ top: position.top, left: position.left }}
    >
      <Link href={'/work'} className="w-full text-left block px-4 py-1 hover:bg-gray-100 text-sm rounded ">Work</Link>
      <Link href={''} className="w-full text-left block px-4 py-1 hover:bg-gray-100 text-sm rounded  text-red-500">Github</Link>
      <Link href={''} className="w-full text-left block px-4 py-1 hover:bg-gray-100 text-sm rounded  text-blue-600">Linkedin</Link>
    </motion.div>
  </AnimatePresence>,
  document.body
);

};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex h-[56px] p-4 fixed top-0 left-0 z-[100] bg-white items-center justify-between w-full border-y border-gray-300 ">
      <div className="flex items-center gap-2">
        <Image
          src="/dp2.png"
          alt="dp"
          className="w-10 h-10 rounded-full object-contain"
          width={100}
          height={100}
        />
 
        <Link href="/">
          <div>
            <div className="text-gray-800 font-inter">Vincent Vuram</div>
            <div className="text-xs text-gray-500">Frontend Dev</div>
          </div>
        </Link>
      </div>

      <button
        ref={buttonRef}
        onClick={() => setShowDropdown(prev => !prev)}
        className="h-8 w-8 p-2 flex items-center justify-center rounded"
      >
        <BsThreeDotsVertical className="w-full h-full" />
      </button>

      {showDropdown && (
        <Dropdown onClose={() => setShowDropdown(false)} anchorRef={buttonRef} />
      )}
    </div>
  );
};

export default Navbar;
