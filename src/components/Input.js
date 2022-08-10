import InputBox from "./elements/InputBox";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Input = () => {
  return (
    <div className=" relative flex flex-col gap-4 p-4 items-start w-full justify-evenly">
      <div className="absolute inset-y-0 left-0 pl-8 flex items-center ">
        <Search className="text-gray-500 cursor-pointer" />
      </div>

      <InputBox className="block pl-10 pr-12 " placeValue="搜尋商品" />

      <div className="absolute inset-y-0 right-0 pr-8 flex items-center ">
        <button className="text-gray-500 cursor-pointer material-icons ">
          <Link to="/elements/QrcodeScreen">qr_code_scanner</Link>
        </button>
      </div>

      {/* <div>
            <CustomBtn children="Send Message" />
        </div> */}
    </div>
  );
};
export default Input;
