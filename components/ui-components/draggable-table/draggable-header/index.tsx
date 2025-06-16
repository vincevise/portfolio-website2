/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IconType } from "react-icons";
import { PiArrowDown, PiArrowsDownUpThin, PiArrowUp } from "react-icons/pi";
import { ColumnInstance } from "react-table";
import { useDraggableTableContext } from "../table";

interface DraggableHeaderProps {
    column: ColumnInstance<any> & { icon?: IconType }; // Update this line
    index: number;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    disableColumnDrag?: boolean;
    icon?: IconType;
}

const DraggableHeader = ({
    column,
    index,
    moveColumn,
    disableColumnDrag,
    icon: Icon
  }: DraggableHeaderProps) => {
    const ref = useRef<HTMLTableCellElement>(null);
    const [, drop] = useDrop({
      accept: "column",
      hover(item: { index: number }) {
        if (!ref.current || disableColumnDrag) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        moveColumn(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
      drop(item: { index: number }) {
        if (disableColumnDrag) {
          return;
        }
        console.log(`Column dropped at index ${item.index}`);
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: "column",
      item: { type: "column", index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !disableColumnDrag,
    });
  
    if (!disableColumnDrag) {
      drag(drop(ref));
    } else {
      drop(ref);
    }

    const {sort, setSort} = useDraggableTableContext();
    return (
      <th
        ref={ref}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
        }}
        className={` px-4  min-w-32 whitespace-nowrap text-left font-medium text-sm relative   font-sans bg-white ${sort?.key === column.id ? 'text-black' : 'text-gray-600'}  `}
      >
        <span className="flex w-full items-center text-sm gap-2 justify-between">
          <span className="flex items-center gap-2">
            {Icon && (
            <span className="w-[14px] h-[14px] inline-block  rounded ">
              <Icon className="w-full h-full"/>
            </span>
            )}
            {column.render("Header")}
          </span>

          {sort && 
          <span
            className="inline-block cursor-pointer"
            onClick={() => {
              if(setSort){
                  setSort({
                      key: column.id,
                      order: sort?.key === column.id ? (sort?.order === "asc" ? "desc" : "asc") : "asc"
                  })
              }
            }}
          >
              {sort?.key === column.id ?
                  (sort?.order === "asc" ? 
                      <PiArrowDown className="w-4 h-4 text-black" /> 
                      : 
                      <PiArrowUp className="w-4 h-4 text-black" />
                  ) : 
                  <PiArrowsDownUpThin  className="w-4 h-4 text-gray-500" />
              }
          </span>
          }
        </span>
      </th>
    );
};

export default DraggableHeader;