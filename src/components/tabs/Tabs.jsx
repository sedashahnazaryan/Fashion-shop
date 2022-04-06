import React from 'react'
import { Tab } from 'semantic-ui-react'
import DataTable from '../dataTable/DataTable';
import PendingTable from '../dataTable/PendingTable';



const Tabs = ({pendingProducts, allProducts,changStatus}) => {
    const panes = [
      {
        menuItem: "All Products",
        render: () => <Tab.Pane>
          {/* <DataTable list = {allProducts}/> */}
          </Tab.Pane>
      },
      { menuItem: "Pending", render: () => <Tab.Pane>
        <PendingTable  list={pendingProducts} changeStatus={changStatus}/>
      </Tab.Pane> },
    ];
    return (
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    );
  };

export default Tabs;
