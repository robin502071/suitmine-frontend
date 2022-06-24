import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { Menu } from 'antd';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem('西裝類', 'sub1', [
    getItem('西裝總覽', '1'),
    getItem('新品上市', '2'),
    getItem('高級西裝', '3'),
    getItem('奢華西裝', '4'),
  ]),
  getItem('襯衫類', 'sub2', [
    getItem('襯衫總覽', '5'),
    getItem('新品上市', '6'),
    getItem('休閒襯衫', '7'),
    getItem('針織襯衫', '8'),
  ]),
  getItem('西裝褲類', 'sub3', [
    getItem('西裝褲總覽', '9'),
    getItem('新品上市', '10'),
    getItem('高級西裝褲類', '11'),
    getItem('奢華西裝褲類', '12'),
  ]),
  getItem('配件類', 'sub4', [
    getItem('配件總覽', '13'),
    getItem('新品上市', '14'),
    getItem('領帶', '15'),
    getItem('領帶夾', '16'),
    getItem('方巾', '17'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const ProductTypeBar = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          商品篩選
        </Button>
      </Space>
      <Drawer
        title="請選擇想要搜尋的商品種類"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        className="RWDProductTypeBarDrawer"
      >
        <Menu
          className="RWDProductTypeBar"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default ProductTypeBar;
