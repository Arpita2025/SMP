import { Upload, Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../../redux/loadersSlice";
import { UploadProductImage } from "../../../apicalls/products";

function Imagess({ selectedProduct, setShowProductForm, getData }) {
  const [images=[], setImages]=React.useState(selectedProduct.images);
  const [file=null, setFile] = React.useState(null);
  const dispatch = useDispatch();

  const upload = async () => {
    try {
      dispatch(SetLoader(false));
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", selectedProduct._id);
      const response = await UploadProductImage(formData);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
        //setShowProductForm(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

//   return (
//     <div>
//       <Upload
//         listType="picture"
//         beforeUpload={() => false}
//         onChange={(info) => {
//           setFile(info.file);
//         }}
//       >
//       {/* {selected} */}
//       image.map((image) => {
//         return (<div className="flex gap-2">
//           <img className="h-20 w-20 object-cover"
//           src={imgage} alt=""/>
//         </div>
//       })
//         <Button type="dashed">Upload Image</Button>
//       </Upload>
//       <div className="flex justify-end gap-5 mt-5">
//         <Button
//           type="default"
//           onClick={() => {
//             setShowProductForm(false);
//           }}
//         >
//           Cancel
//         </Button>
//         <Button type="primary" disabled={!file} onClick={upload}>
//           Upload
//         </Button>
//       </div>
//     </div>
//   );

 }

export default Imagess;
