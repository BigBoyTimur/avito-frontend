import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useGetOrdersQuery } from "../../app/services/ordersApi";
import AdvertismentCard from "../../components/advertisment-card";
import GridContainer from "../../components/grid-container";
import OrdersFilters from "../../components/orders-filters";
import { useEffect, useState } from "react";
import HorizontalCenteredSpinned from "../../components/horizontal-centered-spinner";
import { Order } from "../../app/types";
function Orders() {
  const { data, isSuccess, isError } = useGetOrdersQuery();
  const [orders, setOrders] = useState(data);

  useEffect(() => {
    setOrders(data);
  }, [data]);

  if (isError) {
    return null;
  }

  return isSuccess ? (
    <>
      <OrdersFilters
        setOrders={setOrders}
        data={data}
        orders={
          orders as (Omit<Order, "status"> & {
            orderPrice: number;
            status: string;
          })[]
        }
      />
      <GridContainer>
        {orders?.map((order) => (
          <Card key={order.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Заказ №{order.id}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p>Кол-во товартов: {order.items.length}</p>
              <p>{order.finishedAt && `Заказ завершен: ${order.finishedAt}`}</p>
              <p>Цена заказа: {order.orderPrice}</p>
              <p>Дата создания заказа: {order.createdAt}</p>
              <p>Статус заказа: {order.status}</p>
              <Accordion variant="splitted">
                <AccordionItem key={order.id} title="Показать все товары">
                  {order.items.map((item) => (
                    <AdvertismentCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      createdAt={item.createdAt}
                      views={item.views}
                      likes={item.likes}
                      imageUrl={item.imageUrl}
                    />
                  ))}
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        ))}
      </GridContainer>
    </>
  ) : (
    <HorizontalCenteredSpinned />
  );
}

export default Orders;
