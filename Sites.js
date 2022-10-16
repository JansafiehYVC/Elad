import React, { useState } from 'react'
import data from './data.js'



  export default function Sites({data}) {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
    setIsVisible(!isVisible);
    return (
      <div style={{ paddingLeft: 10 }}>
      <span onClick={expand}>{data.name}</span>
      <div>{data.id} </div>
      <div>{data.url} </div>

      {isVisible ? (
        data?.subData?.map((subData) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <Sites data={subData} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
    );
  }}
