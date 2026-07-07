interface AdSlotProps {
  minWidth: number;
  minHeight: number;
}

/** Neutral placeholder that reserves the original ad-slot dimensions. */
export function AdSlot({ minWidth, minHeight }: AdSlotProps) {
  return (
    <div
      className="flex items-center justify-center bg-[#f5f5f5] text-[12px] text-[#bbbbbb]"
      style={{ minWidth, minHeight }}
    >
      AD
    </div>
  );
}
