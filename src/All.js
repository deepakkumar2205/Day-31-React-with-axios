import { SearchIcon } from '@chakra-ui/icons';
import { Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import Context from './context';
import { TableTemplate } from './TableTemplate';

export const All = () => {
  const shop=useContext(Context);
  const [serchResult ,setSearchResult] = useState(shop.allData);
  const handleChange = (txt)=>{
    const text=txt.target.value;
    console.log(serchResult);
    setSearchResult(shop.allData.filter((person)=>((person.name).toUpperCase().includes(text.toUpperCase())) || (person.gender).toUpperCase()===(text.toUpperCase())  || ((person.email).toUpperCase().includes(text.toUpperCase()))
    
    ));
    // setSearchResult(serchResult.filter((person)=>person.name.includes(text.target.value)))
  }
  console.log(serchResult);
    
    return (<>
    <br/>
      <Heading size='lg'><u>All Students and Teacher are listed here.</u></Heading>
      <br></br><InputGroup >
      <InputLeftElement
        pointerEvents='none'
        bgColor={'#4299E1'}
        // border={'10px solid black'}
        borderRadius={'5px'}

        children={<SearchIcon  color='white' />}
      />
      <Input type='tel' placeholder=' Enter Name to Search' w={'500px'} onChange={handleChange}/>
    </InputGroup>
      <div>
      <TableTemplate data={serchResult}/>
    </div>
    </>
  )
}
