import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import './collections-overview.scss';

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
      {collections.map(({
        id,
        ...otherCollectionProps
      }) => (<PreviewCollection key={id} {...otherCollectionProps}/>))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
