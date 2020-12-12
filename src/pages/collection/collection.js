import React from 'react'
import {connect} from "react-redux";


import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from "../../redux/shop/shop.selectors";


import './collection.scss'

const Collection = ({match}) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(Collection)