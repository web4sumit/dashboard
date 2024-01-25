import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { useTable,Column, TableOptions,useSortBy,usePagination } from 'react-table'


function TableHOC<T extends object> (columns:Column<T>[],data: T[],containerClassname:string,heading:string,ShowPagination:boolean = false,){
    return function HOC() {
        const options: TableOptions<T> = {
          columns,
          data,
          initialState:{
            pageSize:6,
          }
        };
        const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,pageCount,state:{pageIndex},nextPage,previousPage,canNextPage,canPreviousPage} = useTable(options,useSortBy,usePagination);
        return <div className={containerClassname}>
            <h2 className='heading'>{heading}</h2>
            <table className='table' {...getTableProps()}>
             <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}{column.isSorted && <span>{column.isSortedDesc? <AiOutlineSortDescending/> : <AiOutlineSortAscending/>}</span>}</th>
                        ))}
                    </tr>
                ))}
             </thead>
             <tbody {...getTableBodyProps()}>
            { page.map(page => {
                prepareRow(page);
                return <tr {...page.getRowProps()}>{page.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}</tr>
            })}
             </tbody>
            </table>
            {
                ShowPagination && <div className='table-pagination'>
                    <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
                    <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                </div>
            }
        </div>
    };
}

export default TableHOC;