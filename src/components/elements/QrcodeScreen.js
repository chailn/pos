// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";

// const QrcodeScreen = (props) => {
//   const [data, setData] = useState("No result");

//   return (
//     <>
//       <Title />
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: "100%" }}
//       />

//       <p>{data}</p>
//     </>
//   );
// };

// export default QrcodeScreen;
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function QrcodeScreen() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <div className="border-8 border-red-500">
        <BarcodeScannerComponent
          className={"w-full h-500px "}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <h1 className="text-xl">結果：{data}</h1>
    </>
  );
}

export default QrcodeScreen;
