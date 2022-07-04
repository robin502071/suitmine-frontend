import React from 'react';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import OrderDetailDisplay from '../../components/robin/Member/orderDetail/OrderDetailDisplay';

import SideBar from '../../components/robin/Member/SideBar';

function OrderDetail() {
  
  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row justify-content-center">
          <div className="col-2 d-none d-lg-block">
            <SideBar sidebarActiveNumber={'1'} />
          </div>
          <div className="col-12 col-lg-8 offset-lg-1">
            <OrderDetailDisplay />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default OrderDetail;
