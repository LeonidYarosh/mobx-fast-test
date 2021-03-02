import React from "react";
import { observer } from "mobx-react";
import { blocksStore } from "./store";
import Select from "react-select";

@observer class Blocks extends React.Component {
  componentDidMount() {
    blocksStore.fetchProduct();
  }

  onChangeProduct = (name) => (selectedItem) => {
      blocksStore.selectedProduct(selectedItem, name);
  };

  onChangeTariff = () => {};

  render() {
    const { list, blocks: {availableProducts} } = blocksStore;

    return list
      ? Object.keys(list).map((key) => (
          <div key={key}>
            Продукты
              <Select
                  options={availableProducts}
                  value={list[key].selectedProduct}
                  onChange={this.onChangeProduct(key)}
              />
            Тарифы
            <input type="select" onChange={this.onChangeTariff(key)} />
          </div>
        ))
      : null;
  }
}
export { Blocks };
