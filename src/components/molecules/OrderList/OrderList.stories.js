import React from "react";

import OrderList from "./OrderList";

export default {
  title: "Molecules/OrderList",
  component: OrderList,
};

const Template = (args) => <OrderList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "#48464864682",
  firstName: "Piotr",
  lastName: "Kowalski",
  phone: "500800965",
  mail: "k.borowski@onet.pl",
  status: "W oczekiwaniu na kuriera",
};
