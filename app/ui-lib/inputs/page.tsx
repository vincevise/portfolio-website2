'use client'
import InputContainerStyle from '@/components/ui-components/input-container-style'
import ChipsInput_Menu_Options from '@/components/ui-components/inputs/chips-input-menu-options'
import ChipsInputSearch from '@/components/ui-components/inputs/chips-input-search'
import ChipsInputWithoutDropDown, { ListI } from '@/components/ui-components/inputs/chips-input-without-dropdown'
import Chips_with_input from '@/components/ui-components/inputs/chips-with-input'
import ChipsWithInputSearch from '@/components/ui-components/inputs/chips-with-input-search'
import ChipsWithInputSearchColor, { TagsI } from '@/components/ui-components/inputs/chips-with-input-search-color'
import InputSearch from '@/components/ui-components/inputs/input-search'
import PhoneNumberInput from '@/components/ui-components/inputs/phone-number-input/number-input'
import SimpleChipsInputDropdown from '@/components/ui-components/inputs/simple-chips-input-drowdown'
import ItemContainer from '@/components/ui-components/item-container'
import { useState } from 'react'
import { BreadCrumbs } from '../bread-crumbs'
import ContentEditableWithPresetChips from '@/components/ui-components/inputs/content-editable-chips-input'

const inputContainerStyle = 'contianer-border-style flex items-center h-40 p-4 '

const Page = () => {
  const [chipsInputValue, setChipsInputValue] = useState<ListI[]>([]);
  const [chipsWithInputSearch, setChipsWithInputSearch] = useState('');
  const [chipsWithInputSearchColor, setChipsWithInputSearchColor] = useState<TagsI[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const [contentEditableValue, setContentEditableValue] = useState()
  

  return (
    <div className='w-full h-full overflow-y-auto space-y-4 p-4 max-w-7xl'>
      <BreadCrumbs 
              items={
                [
                  {
                    label:'Main',
                    href:'/ui-lib'
                  },
                              {
                    label:'input',
                    href:'/ui-lib/input'
                  },
                ]
              }
            />
                  <h2 className="  text-2xl font-medium">
                    Inputs
                  </h2>
        <div className=' w-full  gap-6   mx-auto flex flex-col '>
          <InputContainerStyle title='Chips Input with Dowpdown Options'>

                  <SimpleChipsInputDropdown/>

              </InputContainerStyle>
          <InputContainerStyle title='Chips Input with Dowpdown Options'>
            <ChipsWithInputSearchColor
                val={chipsWithInputSearchColor}
                setVal={setChipsWithInputSearchColor}
                />
            </InputContainerStyle>
            <InputContainerStyle title='Chips Input with Dowdown with Menu Options'>

                <ChipsInput_Menu_Options/>
              </InputContainerStyle>
            <InputContainerStyle title='Chips Input Dopdown with searchable options'>
            <ChipsWithInputSearch 
                  state={chipsWithInputSearch}
                  setState={(val:string)=>{
                    setChipsWithInputSearch(val)
                  }}
                  list={[
                    {
                      id:'1',
                      label:'Apple',
                      value:'apple'
                    },
                    {
                      id:'2',
                      label:'Banana',
                      value:'banana'
                    },
                    {
                      id:'3',
                      label:'Cherry',
                      value:'cherry'
                    }
                  ]}
                  
                />
            </InputContainerStyle>
          <InputContainerStyle title='Chips Input Dopdown with searchable options'>
              <ChipsInputSearch />

          </InputContainerStyle>
            <InputContainerStyle title='Type And Create Chips Input'>
            <ChipsInputWithoutDropDown 
                    val={chipsInputValue} 
                    setVal={(val:ListI[])=>{
                      setChipsInputValue(val)
                    }} 
                    
                  />
            </InputContainerStyle>
            
             
           
            
                <InputContainerStyle title='Input with Search Dropdown'>

                <InputSearch
                  value={inputValue}
                  setValue={setInputValue}
                  placeholder='Search'
                  searchOptions={[
                    'Apple',
                    'Banana',
                    'Cherry',
                    'Date',
                    'Eggplant',
                    'Zucchini',]} 
                />
                </InputContainerStyle>


                <InputContainerStyle title='Phone Number Input '>

                <PhoneNumberInput
                  state={phonenumber}
                  setState={setPhoneNumber}
                  setPhoneCode={(val:string)=>{
                    console.log(val)
                  }} 
                />
                </InputContainerStyle>

                <InputContainerStyle title='Phone Number Input '>

                <ContentEditableWithPresetChips
                
                  parsedContentValue={[]}
                  onChange={()=>{

                  }}

                />
                </InputContainerStyle>

                 
                

              
            
        </div>
    </div>
  )
}

export default Page