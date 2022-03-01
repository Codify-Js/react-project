import React, { useEffect, useState } from 'react';
import axios from "axios";

import { Pagination } from "antd";

const initFilter = {
  'Subject': [
    { id: 1, title: "Природа" },
    { id: 2, title: "Человек" },
    { id: 3, title: "Техника" },
  ],
  'Color': [
    { id: 1, title: "Масло" },
    { id: 2, title: "Красный" }
  ],
  'Region': [
    { id: 1, title: "Бишкек", country: { "title": "Кыргызстан" } }
  ]
}

const initStateFilter = {
  subjectIds: [],
  colorIds: [],
  regionIds: []
}

const PER_PAGE = 10

export default function PaginationContainer() {
  const [filterData, setFilterData] = useState(initFilter);
  // const [filter, setFilter] = useState(initStateFilter)
  const [subjectIds, setSubjectIds]= useState([])
  const [colorIds, setColorIds]= useState([])
  const [regionIds, setRegionIds]= useState([])
  const [search, setSearch] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const [data, setData] = useState(null)

  useEffect(() => {
    const params = {
      search,
      page: currentPage,
      color: colorIds.length > 0 ? colorIds.join(', ') : undefined,
      subject: subjectIds.length > 0 ? subjectIds.join(', ') : undefined,
    }

    axios.get('http://137.184.19.52/paintings', {params}).then(res => {
      setData(res.data)
    })
  }, [search, subjectIds, colorIds, regionIds])

  // useEffect(() => {
  //   const params = {
  //     page: currentPage,
  //     pageSize: 10,
  //   }
  //
  //   // const params = {
  //   //   limit: 10,
  //   //   offset: offset,
  //   // }
  //
  //   axios.get('http://137.184.19.52/paintings', {params}).then(res => {
  //     setData(res.data)
  //   })
  // }, [currentPage])

  const handleFilter = (e, key, item) => {
    const { checked }  = e.target
    if (key === 'Subject') {
      setSubjectIds(prevIds => {
        let newIds = []
        if (checked) {
          newIds.push(item.id)
        } else {
          //TODO remove ids
        }
        return newIds
      })
    }

    if (key === 'Color') {
      setColorIds(prevIds => {
        let newIds = []
        if (checked) {
          newIds.push(item.id)
        } else {
          //TODO remove ids
        }
        return newIds
      })
    }


    if (key === 'Region') {
      setRegionIds(prevIds => {
        let newIds = []
        if (checked) {
          newIds.push(item.id)
        } else {
          //TODO remove ids
        }
        return newIds
      })
    }
  }


  const handlePagination = (page) => {
    setCurrentPage(currentPage + 1)
    const num = page * 10 - PER_PAGE
    setOffset(num)
  }

  return (
    <div>

      <input type="text" onChange={(e) => setSearch(e.target.value)}/>
      {Object.keys(filterData).map((key) => {
        return (
          <div>
            <div>{key}</div>
            <p>
              {filterData[key].map(item => (
                <div>
                  <label htmlFor={item.id}>{item.title}</label>
                  <input id={item.id} type="checkbox" onChange={(e) => handleFilter(e, key, item)} />
                </div>
              ))}
            </p>
          </div>
        )
      })
      }
      <div>
        <Pagination defaultCurrent={1} defaultPageSize={PER_PAGE} total={100} onChange={handlePagination} />
      </div>
    </div>
  )
}
