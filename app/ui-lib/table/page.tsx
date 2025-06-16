/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import DraggableTable from "@/components/ui-components/draggable-table/table";
import StatusBadge from "@/components/ui-components/status-badge";
import moment from "moment";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { HiMiniUser } from "react-icons/hi2";
import { LuClock4, LuSettings2 } from "react-icons/lu";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { Column } from "react-table";
import { BreadCrumbs } from "../bread-crumbs";

interface Lead {
  _id: string;
  full_name: string;
  phone: string;
  email: string;
  status: string;
  tags: string[];
  created_at_timestamp: number;
  updated_at_timestamp: number;
}

const leadData: Lead[] = [
  {
    _id: "77defb5088fa61dc2e82ccb7",
    full_name: "John Doe",
    phone: "+1234567890", 
    email: "john.doe@example.com", // Added email property
    status: "COMPLETED",
    tags: [],
    created_at_timestamp: 1725889361,
    updated_at_timestamp: 1725889361, 
  },
  {
    _id: "88defb5088fa61dc2e82ccb8",
    full_name: "Jane Smith",
    phone: "+0987654321", 
    email: "jane.smith@example.com", // Added email property
    status: "PENDING",
    tags: [],
    created_at_timestamp: 1725889362,
    updated_at_timestamp: 1725889362, 
  },
  {
    _id: "99defb5088fa61dc2e82ccb9",
    full_name: "Alice Johnson",
    phone: "+1122334455", 
    email: "alice.johnson@example.com", // Added email property
    status: "IN_PROGRESS",
    tags: [],
    created_at_timestamp: 1725889363,
    updated_at_timestamp: 1725889363, 
  },
  {
    _id: "00defb5088fa61dc2e82ccba",
    full_name: "Bob Brown",
    phone: "+6677889900", 
    email: "bob.brown@example.com", // Added email property
    status: "COMPLETED",
    tags: [],
    created_at_timestamp: 1725889364,
    updated_at_timestamp: 1725889364, 
  },
];

const Table = ( ) => {
 
  const headerIcons = useMemo(
    () => [
      {
        accessor: 'full_name',
        icon: HiMiniUser 
      },
      {
        accessor: 'email',
        icon: MdOutlineEmail  
      },
      {
        accessor: 'phone',
        icon: MdPhone  
      },
      {
        accessor: 'status',
        icon: GrStatusGood  
      },
      {
        accessor: 'created_at_timestamp',
        icon: LuClock4  
      },
      {
        accessor: 'updated_at_timestamp',
        icon: LuClock4 
      }
    ],
    []
  );
  const columns: Column<Lead>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "full_name",
        
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => {
          return (
            <Link href={`mailto:${value}`} className="flex items-center gap-2 text-[13px]  underline text-gray-700">
              {value}
            </Link>
          );
        }
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      
      {
        Header: "Status",
        accessor: "status",
        Cell:({value})=>{
          return <StatusBadge status={value as 'COMPLETED' | 'PENDING' | 'IN_PROGRESS'}/>
        }
      },
       
       
      {
        Header: "Created At",
        accessor: "created_at_timestamp",
        Cell: ({ value }) => {
          return (
            <div className="flex items-center gap-2 text-sm">
              {moment.unix(value).format("DD-MM-YYYY")} 
            </div>
          );
        },
      },

      {
        Header: "Updated At",
        accessor: "updated_at_timestamp",
        Cell: ({ value }) => {
          return (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {moment.unix(value).format("DD-MM-YYYY")}
            </div>
          );
        },
      },
    ],
    []
  );

  const [sort, setSort] = useState<{
    key:string;
    order: "asc" | "desc";
  }>({
    key: "updated_at_timestamp",
    order: "desc",
  });


  const [leadsData, setLeadsData] = useState({
    data: leadData.slice(0, 10),
    page: 1,
    total: leadData.length,
    limit: 10,
  });

  useEffect(() => {
    const start = (leadsData.page - 1) * leadsData.limit;
    const end = leadsData.page * leadsData.limit;
    setLeadsData((prev) => ({
      ...prev,
      data: leadData.slice(start, end),
    }));
  }, [leadsData.page, leadsData.limit]);

  const handlePageChange = useCallback((page: number) => {
    setLeadsData((prev) => ({ ...prev, page }));
  }, []);

  const handlePageLimitChange = useCallback((limit: number) => {
    setLeadsData((prev) => ({ ...prev, limit }));
  }, []);

  return (
    <div className="w-[calc(100vw-260px)] overflow-y-auto h-[calc(100vh-56px)] space-y-4 flex flex-col p-4 max-w-7xl bg-white">
      <BreadCrumbs 
        items={
          [
            {
              label:'Main',
              href:'/ui-lib'
            },
                        {
              label:'table',
              href:'/ui-lib/table'
            },
          ]
        }
      />
            <h2 className="  text-2xl font-medium">
              Table UI
            </h2>
            <div className="w-full h-full  contianer-border-style-sm p-4">
              <div className="w-full max-w-5xl mx-auto h-full">
                <DraggableTable
                sort={sort}
                setSort={setSort}
                selectionOptions={[
                    {
                    name: "Select All",
                    action: () => console.log("Select All"),
                    },
                    {
                    name: "Deselect All",
                    action: () => console.log("Deselect All"),
                    },
                ]}
                currentPage={leadsData.page}
                isLoading={false}
                pagination={{
                    totalItems: leadsData.total,
                    itemsPerPage: leadsData.limit,
                    onPageChange: handlePageChange,
                    onPageLimitChange: handlePageLimitChange,
                }}
                columns={columns}
                headerIcons={headerIcons}
                data={leadsData.data}
                rowActions={[
                    {
                    name: "Edit",
                    action: (val) => console.log(val,"Edit"),
                    icon: LuSettings2,
                    },
                ]}
                rowContextActions={[
                    {
                    name: "Edit",
                    icon: LuSettings2,
                    action: (val) => console.log(val, "Edit"),
                    },
                ]}
                />
              </div>
            </div>
             
    </div>
  );
};

export default Table;
