// app/page.tsx
import OrdersList from '../components/OrderList';
import { getOrders } from '../lib/api-client';


export default async function Home() {
  const orders = await getOrders();
  
  return (
    <div>
      <h1>Orders</h1>
      <OrdersList orders={orders} />
    </div>
  );
}