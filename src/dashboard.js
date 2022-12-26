import React from 'react'
import { Breadcrumb , BreadcrumbItem ,  Divider } from '@chakra-ui/react'
import Header from './Header';
import {Link, useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Header/><br/>
    <Divider />
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <Link to='/'>Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
      <Link to='/all'>All</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to='/students'>Students</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to='/teachers'>Teachers</Link>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <Link to='/form'>Create</Link>
      </BreadcrumbItem>
    </Breadcrumb>
    </div>
  )
}

export default Dashboard ;