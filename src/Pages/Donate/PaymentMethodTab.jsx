import { Tabs } from "antd";

const PaymentMethodTab = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "E-Money",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Credit or debit ",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Google Play",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div>
      <section>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </section>
    </div>
  );
};

export default PaymentMethodTab;
