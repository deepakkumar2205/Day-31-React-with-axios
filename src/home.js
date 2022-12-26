import { Card, CardBody, Heading, Highlight, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import { MdCheckCircle } from 'react-icons/md'

export default function Home() {
  return (
    <div><br/>
    <div style={{height:'85vh',alignItems:'center',width:'100%',display:'flex',backgroundSize:'cover',zIndex:'-1',filter:'blur(0px)',backgroundRepeat:'no-repeat',backgroundImage:'url(https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574)'}}>
      <Heading as={'h1'} size='3xl'>Welcome to Home page</Heading>
        <div style={{display:'flex' ,
                     width:'75%',
                     justifyContent:'center',
                     
                     }}>
        <Card className='.bg-image' w='500px' style={{zIndex:'1',position:'relative',backgroundColor:'white' }}>
          <div style={{zIndex:'-1',position:'absolute',top:'0',bottom:'0',left:'0',right:'0',filter:'blur(4px)',opacity:'0.5'}}></div>
  <CardBody  className='.bg-text' >
      <Heading as='h4' size='md'>About This Project</Heading><hr/>
      <br/>
      <List spacing={8} style={{textAlign:'left'}}>
  <ListItem >
    <ListIcon as={MdCheckCircle} color='green.500' />
    <Highlight
    query='Chakra ui'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' ,fontWeight:'bold'}}
  >
    Chakra ui library is used to create this project.</Highlight>
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Implemented <b>CRUD</b> Operations with <b>AXIOS</b>.
  </ListItem>
  <ListItem >
    <ListIcon as={MdCheckCircle}  color='green.500'/>
    In the All page Contains Searchbar and Table .
    <UnorderedList style={{marginLeft:'50px'}}>
  <ListItem>In the search bar we can use name, gender, email to search and get the data in the table.</ListItem>
  <ListItem>In the Table contains id, photo, name, gender, email, address, who(student/teacher) with badge, phone number, icons to do actions.</ListItem>
 
</UnorderedList>
    
    
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    In the Students and Teachers page contains students and teachers list of data in table format with actions.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    In the Create page contains a form to create and add the data into the database.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    This project contains some other add on functions like toast notification.
  </ListItem>
</List>
  </CardBody>
</Card>
        </div>
    </div>
   
    </div>
  )
}
