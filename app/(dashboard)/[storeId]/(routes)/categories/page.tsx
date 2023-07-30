import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import parse from 'date-fns/parse';
import prismadb from "@/lib/prismadb";
import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";


const CategoriesPage = async ({
  params
}: {
  params: {
    storeId: string;
  }
}) => {

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const frenchLocale = require('date-fns/locale/fr')

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, `dd/MM/yyyy`, { locale: ptBR })
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4  p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
}

export default CategoriesPage;