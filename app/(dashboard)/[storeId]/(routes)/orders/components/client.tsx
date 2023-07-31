"use client";


import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";



interface OrderClientProps {
  data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) => {

  return (
    <>
      <Heading title={`Pedidos(${data.length})`} description="Gerencie os pedidos da sua loja." />
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
    </>
  )
}