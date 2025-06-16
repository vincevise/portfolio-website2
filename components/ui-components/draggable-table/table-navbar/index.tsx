import { IoClose, IoFilter } from 'react-icons/io5'
import { LuChevronFirst, LuChevronLast } from 'react-icons/lu'
import { MdDelete, MdImportExport, MdRefresh } from 'react-icons/md'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import Button, { ui_styles } from '../../Button'
import ButtonWithDropDown from '../../button-with-drop-down'
import { useDraggableTableContext } from '../table'


const TableNavbar = () => {
    const {   pagination, data, currentPage, selectionOptions, selectedItems, setSelectedItems } = useDraggableTableContext()
  return (
    <>
        {/* Navbar */}
        <div className={`w-full flex justify-between items-center border-y border-gray-300 p-2  ${selectedItems.length > 0 && 'bg-gray-200'}   transition-all duration-100`}>
          
          <div className={`flex w-fit shrink-0 items-center space-x-2 `}>
            {selectedItems.length > 0 ? (
            <>
               <Button icon={IoClose} size='iconxs' variant='ghost' className='  hover:text-black' onClick={()=>{
                setSelectedItems([])
               }}/>
               <span className='text-xs  '>

                 {selectedItems.length}{" "}items selected
               </span>
              <Button iconLeft={MdDelete} variant="grayscale" size="xs">
                Delete
              </Button>
             
            </>
            ) : 
            <>
              <Button icon={MdRefresh} size='iconxs' variant='grayscale'/>
              <Button iconLeft={IoFilter} size='xs' variant='grayscale'>Filter</Button>
            </> 
            }
          </div>
          {selectedItems.length === 0 && 
            <div className="w-full   flex justify-end gap-4 items-center">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
              {pagination.itemsPerPage * (currentPage - 1) + 1} - {pagination.itemsPerPage * currentPage} of {pagination.totalItems}
            </div>
              <div className="flex items-center gap-2">
              <select className={` px-2  py-0  ${ui_styles.size.xs} ${ui_styles.variant.grayscale} `} style={{width:'100px'}} value={pagination.itemsPerPage} onChange={(e)=>{
                if (pagination.onPageLimitChange) {
                  pagination.onPageLimitChange(Number(e.target.value));
                }
              }}>
                  <option value="10">10 Record</option>
                  <option value="20">20 Record</option>
                  <option value="30">30 Record</option>
                  <option value="50">50 Record</option>
                  <option value="100">100 Record</option>
                </select>
                <div className='flex items-center '>
                  <Button
                    variant={"grayscale"}
                    size={"iconxs"}
                    className="shrink-0 hidden md:flex items-center justify-center disabled:opacity-50 rounded-r-none focus:ring-0 focus:outline-none"
                    disabled={currentPage === 1}
                    onClick={() => {
                      if (currentPage > 1) {
                        pagination.onPageChange(1);
                      }
                    }}
                    icon={LuChevronFirst}
                  />

                  <Button
                    variant={"grayscale"}
                    size={"iconxs"}
                    className="shrink-0 flex items-center justify-center disabled:opacity-50 md:rounded-none"
                    disabled={currentPage === 1}
                    onClick={() => {
                      if (currentPage > 1) {
                        pagination.onPageChange(currentPage - 1);
                      }
                    }}
                    icon={TbChevronLeft}
                    
                  />
                  <Button
                    className="shrink-0 flex items-center justify-center disabled:opacity-50 md:rounded-none"
                    variant={"grayscale"}
                    size={"iconxs"}
                    disabled={
                      currentPage ===
                      Math.ceil(pagination.totalItems / pagination.itemsPerPage)
                    }
                    onClick={() => {
                      if (currentPage < Math.ceil(pagination.totalItems / pagination.itemsPerPage)) {
                        pagination.onPageChange(currentPage + 1);
                      }
                    }}
                    icon={TbChevronRight}
                  />
                  <Button
                    className="shrink-0 hidden md:flex items-center justify-center disabled:opacity-50 rounded-l-none focus:ring-0 focus:outline-none"
                    variant={"grayscale"}
                    size={"iconxs"}
                    disabled={
                      currentPage ===
                      Math.ceil(pagination.totalItems / pagination.itemsPerPage)
                    }
                    onClick={() => {
                      const lastpage = Math.ceil(
                        pagination.totalItems / pagination.itemsPerPage
                      );
                      pagination.onPageChange(lastpage);
                    }}
                    icon={LuChevronLast}
                  />
                </div>
              </div>
            </div>
          }
        </div>
    </>
  )
}

export default TableNavbar