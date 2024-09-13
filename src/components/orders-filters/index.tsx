import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Order } from "../../app/types";

type Props = {
  data: (Omit<Order, "status"> & { orderPrice: number; status: string })[];
  orders: (Omit<Order, "status"> & { orderPrice: number; status: string })[];
  setOrders: (
    newOrders: (Omit<Order, "status"> & {
      orderPrice: number;
      status: string;
    })[]
  ) => void;
};

function OrdersFilters({ data, setOrders, orders }: Props) {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrders(data.filter((order) => order.status === event.target.value));
    if (event.target.value === "Все") {
      setOrders(data);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "По возрастанию") {
      setOrders([...orders].sort((a, b) => a.orderPrice - b.orderPrice));
    } else if (event.target.value === "По убыванию") {
      setOrders([...orders].sort((a, b) => b.orderPrice - a.orderPrice));
    }
  };

  return (
    <>
      <div className="my-10">
        <Select
          label="Статус заказа"
          onChange={handleStatusChange}
          defaultSelectedKeys={["Все"]}
        >
          <SelectItem key={"Все"} value={"Все"}>
            Все
          </SelectItem>
          <SelectItem key={"Создан"} value={"Создан"}>
            Создан
          </SelectItem>
          <SelectItem key={"Оплачен"} value={"Оплачен"}>
            Оплачен
          </SelectItem>
          <SelectItem key={"В доставке"} value={"В доставке"}>
            В доставке
          </SelectItem>
          <SelectItem key={"Доставлен в пункт"} value={"Доставлен в пункт"}>
            Доставлен в пункт
          </SelectItem>
          <SelectItem key={"Принят"} value={"Принят"}>
            Принят
          </SelectItem>
          <SelectItem key={"Архивирован"} value={"Архивирован"}>
            Архивирован
          </SelectItem>
        </Select>

        <Select label="Сортировка по сумме заказа" onChange={handleSortChange}>
          <SelectItem key={"По возрастанию"} value={"По возрастанию"}>
            По возрастанию
          </SelectItem>
          <SelectItem key={"По убыванию"} value={"По убыванию"}>
            По убыванию
          </SelectItem>
        </Select>
      </div>
    </>
  );
}

export default OrdersFilters;
