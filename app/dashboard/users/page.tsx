import { fetchUsers } from '@/app/lib/data'; 
import Table from '@/app/ui/users/table'; 
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Users | YTech Dashboard',
};

export default async function Page({
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  const users = await fetchUsers(); 

  return (
    <div className="w-full">
        <Table users={users} /> 
    </div>
  );
}
