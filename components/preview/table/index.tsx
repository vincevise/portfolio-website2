/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import DraggableTable from "@/components/ui-components/draggable-table/table";
import { lead_data } from "@/data/table";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { Column } from "react-table";




const Table = ( ) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
 

  const columns2: Column<any>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "full_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Total Messages",
        accessor: "total_messages",
      },
      {
        Header: "Status",
        accessor: "status",
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
            <div className="flex items-center gap-2 text-sm">
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
    key: "full_name",
    order: "desc",
  });


  const [leadsData, setLeadsData] = useState<{
    data: any[];
    page: number;
    total: number;
    limit: number;
  }>({
    data: lead_data.slice(0, 10),
    page: 1,
    total: lead_data.length,
    limit: 10,
  });

  useEffect(() => {
    const start = (leadsData.page - 1) * leadsData.limit;
    const end = leadsData.page * leadsData.limit;
    const data = lead_data.slice(start, end);
    setLeadsData((prev) => ({ ...prev, data }));
  }, [leadsData.page, leadsData.limit]);

  const handlePageChange = useCallback((page: number) => {
    setLeadsData((prev) => ({ ...prev, page }));
  }, []);

  const handlePageLimitChange = useCallback((limit: number) => {
    setLeadsData((prev) => ({ ...prev, limit }));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4 text-left">
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
        columns={columns2}
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
  );
};

export default Table;
