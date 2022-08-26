import React from 'react'
import {createHashHistory} from 'history'
import { ExpandMore } from "@mui/icons-material";

const Title = () => {
  const history = createHashHistory();

  const goBackPage = () => {
    history.back(-1)
  }
  return (
    <div className="w-full bg-white flex justify-center text-center drop-shadow">
        <button onClick={() => goBackPage()}>
        <ExpandMore className="rotate-90"/>
        </button>

        <div className="w-[90%] flex items-center justify-center">
        <h1 className="text-2xl text-sky-700 font-bold py-2">查詢庫存</h1>
        </div>
    </div>
  )
}
export default Title;