import React, { memo } from 'react'
import TableDemo from '../components/TableDemo'

const page = () => {
  const MemoizedTableDemo = memo(TableDemo)
  return (
    <div>
      <MemoizedTableDemo/>
    </div>
  )
}

export default page
