import { useEffect, useMemo, useRef, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import Chip from "../../chip";
import { commonInputStyle } from "../utils";

interface IList {

  id: string,
  value: string,
  label: string
}
type Props = {
  list: IList[],
  state: string,
  setState: (state: string) => void
}; 

export default function ChipsWithInputSearch({ list, state, setState }: Props) {
  const [selected, setSelected] = useState<string[]>(state.trim().length === 0 ? [] : state.split(','));
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(selected.length > 0) {
      setState(selected.join(','))
    }
  }, [selected])

  const timeoutRef = useRef<number | null>(null);

  const filtered = useMemo(() => {
    if (list) {
      const query = inputValue.trim().toLowerCase();
      return query === '' ? list : list.filter((city) => city.label.toLowerCase().includes(query));
    }
  }, [inputValue]);

  const handleSelect = (choice: string) => {
    const doesExist = selected.find((x) => x === choice);
    if (doesExist) {
      setSelected(selected.filter((x) => x !== choice))
    } else {
      setSelected([...selected, choice])
    }
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  



  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    const timeoutId = timeoutRef.current;
    return () => {
      clearTimeout(timeoutId as number);
    };
  }, []);


  return (
    <>
      <div className="relative w-full" ref={containerRef}>
        <div
          tabIndex={0}
          className={commonInputStyle}
          onClick={() => setShow(!show)}
          style={{ minHeight: '40px' }}
        >
          <div className="  truncate flex flex-wrap gap-1 ">
            {selected.map((x, ind) => {
              return (
                <Chip
                  onClose={() => setSelected([...selected.filter((select) => (select !== x))])}
                  value={x}
                  key={`${x}-option-${ind}`}
                />
 
              );
            })}
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </div>

        {show && (
          <div className="absolute z-10 mt-1   w-full  rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm   flex flex-col">
            <input
              type="text"
              className="w-full p-2 border-b border-gray-300 focus:outline-none"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="overflow-auto max-h-60 customscroll pr-1 ">
              {filtered && filtered.map((choice: IList, newInd: number) => {
                return (
                  <button
                    key={`option-key-${choice.id}-${newInd}`}
                    className={
                      "relative text-gray-900 select-none py-2 w-full rounded-md px-3   hover:bg-gray-100 cursor-pointer"
                    }
                    onClick={() => {
                      handleSelect(choice.value)
                    }}
                  >
                    <div className="flex items-center gap-2 w-full justify-between cursor-pointer">
                      <span className={"block truncate"}>{choice.label}
                      </span>
                      {selected.find((x) => x === choice.value) && <span className="p-0.5 rounded-full bg-indigo-500"><IoCheckmark className="w-3 h-3 text-white" /></span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
