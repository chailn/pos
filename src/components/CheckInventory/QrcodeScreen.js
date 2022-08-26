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
import { createHashHistory } from "history";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function QrcodeScreen() {
  const [data, setData] = React.useState("Not Found");
  const [stopStream, setStopStream] = React.useState(false);
  const history = createHashHistory();
  const goBackPage = () => {
    history.back(-1);
  };
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        stopStream={stopStream}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
            setStopStream(true);
            goBackPage();
          } else {
            setData("Not Found");
          }
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default QrcodeScreen;
