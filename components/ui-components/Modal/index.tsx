'use client'
/* eslint-disable react/display-name */
import { Dialog } from '@headlessui/react';
import React, { Dispatch, Fragment, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  height?: number | string | '100vh';
  maxwidth?: number | string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  className?: string;
  zIndex?: number;
};

type HeaderFooterProps = {
  children: ReactNode;
  className?: string;
};

const Modal = ({ open, setOpenModal, children, height = '600px', maxwidth = '600px', onKeyDown, className = '', zIndex = 20 }: ModalProps) => {
  const [hasModalFooter, setHasModalFooter] = useState(false);
  const [hasModalHeader, setHasModalHeader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Modal.Footer) {
            setHasModalFooter(true);
          }
          if (child.type === Modal.Header) {
            setHasModalHeader(true);
          }
        }
      });
    } else {
      setHasModalFooter(false);
      setHasModalHeader(false);
    }
  }, [children, open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <Dialog open={open} as="div" className="relative z-[9999]" onClose={setOpenModal}>
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75"
            onClick={() => setOpenModal(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-50%' }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 h-fit bg-white w-full mx-auto top-1/2 rounded-md flex flex-col overflow-hidden ${className}`}
            style={{
              zIndex,
              paddingBottom: hasModalFooter ? '64px' : '0',
              paddingTop: hasModalHeader ? '64px' : '0',
              height,
              maxHeight: height,
              maxWidth: maxwidth,
            }}
            onKeyDown={(e) => {
              if (onKeyDown) {
                onKeyDown(e);
              }
            }}
          >
            <div className="relative flex flex-col overflow-y-auto w-full h-full">{children}</div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>,
    document.body
  );
};

Modal.Header = ({ children, className = '' }: HeaderFooterProps) => (
  <div className={`text-xl shrink-0 font-semibold flex w-full items-center justify-between h-16 px-4 border-b fixed top-0 bg-white z-10 rounded-t-lg ${className}`}>
    {children}
  </div>
);

Modal.Footer = ({ children, className = '' }: HeaderFooterProps) => (
  <div className={`shrink-0 left-0 font-semibold flex bg-white items-center w-full justify-end h-16 px-4 border-t fixed bottom-0 rounded-b-lg ${className}`}>
    {children}
  </div>
);

Modal.Panel = ({ children, className = '', height = 'auto' }: { children: ReactNode; className?: string; height?: number | string }) => (
  <div className={`flex-1 p-4 overflow-y-auto ${className}`} style={{ height }}>
    {children}
  </div>
);

export default Modal;
