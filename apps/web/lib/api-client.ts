import { orderSummary } from '@repo/shared';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getOrders(): Promise<orderSummary[]> {

  // Prevent API calls during build time
  if (!API_URL || process.env.NODE_ENV === 'production' && !process.env.RUNTIME) {
    return [];
  }

  const res = await fetch(`${API_URL}/orders`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Impossibile caricare gli ordini');
  }

  return res.json();
}
