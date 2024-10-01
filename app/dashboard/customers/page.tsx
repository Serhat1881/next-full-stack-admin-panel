import { fetchCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';

export default async function Page() {
  const customers = await fetchCustomers();
  console.log(customers); // Add this line to check the returned data in the browser's console

  return (
    <div className="w-full">
      <Table customers={customers} />
    </div>
  );
}
