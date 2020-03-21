import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key="collection.id" {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
