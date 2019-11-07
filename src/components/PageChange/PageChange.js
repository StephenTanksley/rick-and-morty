import React, {useState, useEffect} from 'react';


const PageBack = () => (currentPage > 1 && currentPage <= totalPages + 1) ? 
  setCurrentPage(currentPage - 1) : alert('Not a valid universe!')


const PageForward = () => (currentPage >= 1 && currentPage < totalPages) ? 
    setCurrentPage(currentPage + 1) : alert('Not a valid universe!')



