import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollectionView from "./components/CollectionView";
import ItemView from "./components/ItemView";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import MyDataItem from "./custom/MyDataItem";
import "./index.css";

import { GridCollection, JSONItem } from "./renderers";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:id">
          {/* For more information see the 'Customization' section of the README.md file. */}
          <ItemView wrapClass="item-dynamic" itemRenderer={MyDataItem} />
        </Route>
        <Route path="/">
          {/* For more information see the 'Customization' section of the README.md file. */}
          <CollectionView
            collectionRenderer={GridCollection}
            itemRenderer={MyDataItem}
            pagination={true}
            resultsPerPage={9}
          />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
