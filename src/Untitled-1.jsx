import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const  AdvancedExample=()=>  {
    const [page, setPage] = useState(1)
  return (
    // <Pagination>
    //   {/* <Pagination.First /> */}
    //   {/* <Pagination.Prev /> */}
    //   <Pagination.Item active>{1}</Pagination.Item>
    //   <Pagination.Item>{2}</Pagination.Item>
    //   <Pagination.Item>{3}</Pagination.Item>
    //   <Pagination.Item>{4}</Pagination.Item>
    //   <Pagination.Ellipsis />
    //   <Pagination.Item>{8}</Pagination.Item>
    //   {/* <Pagination.Next /> */}
    //   <Pagination.Last />
    // </Pagination>
 <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={35}
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1}
  />
  );
}

export default AdvancedExample;