import React from 'react'

const ProductIdPage = ({params}) => {
  return (
    <div>
        The product is {params.productId} and category is {params.categoryId}
    </div>
  )
}

export default ProductIdPage


