"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export function SizeGuide({ isOpen, onClose, category }: SizeGuideProps) {
  const sizeTable = [
    { size: "XS", chest: "32-34", waist: "26-28", hips: "34-36" },
    { size: "S", chest: "34-36", waist: "28-30", hips: "36-38" },
    { size: "M", chest: "36-38", waist: "30-32", hips: "38-40" },
    { size: "L", chest: "38-40", waist: "32-34", hips: "40-42" },
    { size: "XL", chest: "40-42", waist: "34-36", hips: "42-44" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-120 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-130 mx-auto w-full max-w-lg bg-background border border-border p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-heading text-xl font-medium">Size Guide</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted"
                aria-label="Close size guide"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Measurements in inches. For {category}.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4">Size</th>
                    <th className="text-left py-2 pr-4">Chest</th>
                    <th className="text-left py-2 pr-4">Waist</th>
                    <th className="text-left py-2">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeTable.map((row) => (
                    <tr key={row.size} className="border-b border-border">
                      <td className="py-2 pr-4">{row.size}</td>
                      <td className="py-2 pr-4">{row.chest}</td>
                      <td className="py-2 pr-4">{row.waist}</td>
                      <td className="py-2">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
