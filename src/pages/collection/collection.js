import React from 'react'
import {connect} from "react-redux";

import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from "../../redux/shop/shop.selectors";

import './collection.scss'

const Collection = ({collections}) => {
  const {title, items} = collections
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
          {items.map(item => <CollectionItem item={item} key={item.id}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)