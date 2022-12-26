import React , {useContext} from 'react'
import Context from './context'
import { TableTemplate } from './TableTemplate'

const Teachers = () => {
  const shop = useContext(Context);
  const teachersOnly=shop.allData.filter((e)=>e.who>=80)
  return (
    <TableTemplate data={teachersOnly} />
  )
}

export default Teachers