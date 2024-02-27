import React from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-[#0000006d] flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded p-[20px] bg-white">
          <Dialog.Title className="font-semibold text-lime-700 border-b-2 mb-2 text-lg">
            Savatchadaki maxsulotlaringiz
          </Dialog.Title>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
