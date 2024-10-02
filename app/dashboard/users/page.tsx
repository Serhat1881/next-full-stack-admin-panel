import { fetchUsers } from '@/app/lib/data'; 
import Table from '@/app/ui/users/table'; 
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';


export const metadata: Metadata = {
  title: 'Users | YTech Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const users = await fetchUsers(); 

  return (
    <div className="w-full">
        <Table users={users} /> 
    </div>
  );
}
