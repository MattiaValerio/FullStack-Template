// app/OrdersList.tsx
'use client';

import { orderSummary } from '@repo/shared';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export default function OrdersList({ orders }: { orders: orderSummary[] }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: orders.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120,
  });

  return (
    <div ref={parentRef} className="overflow-auto h-svh w-72">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const order = orders[virtualItem.index];
          return (
            <div
              key={order.IDOrdine}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
              className="px-4"
            >
              <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Order #{order.IDOrdine}
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Total: ${order.Totale.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}