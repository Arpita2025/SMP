// import React from "react";
// import { Form, Input, Modal } from "antd";

// function BidModal(showBidModal, setShowBidModal, product, reloadData) {
//   const formRef = React.useRef(null);
//   const rules = [{ required: true, message: "Required" }];
//   const onFinish = async(values)=>{
//     try {
      
//     } catch (error) {
      
//     };
//   }
//   return (
//     <Modal
//       onCancel={() => setShowBidModal(false)}
//       visible={showBidModal}
//       // open={showBidModal}
//       centered
//       width={700}
//       onOk={()=> formRef.current.submit()}
//     >
//       <div>
//         <div className="flex flex-col gap-5 mb-7">
//           <h1 className="text-2xl font-semibold text-orange-900 text-center">
//             New Bid
//           </h1>

//           <Form layout="vertical" ref={formRef} onFinish={onFinish}>
//             <Form.Item label="Bid Amount" name="bidAmount" rules={rules}>
//               <Input />
//             </Form.Item>
//             <Form.Item label="Message" name="message" rules={rules}>
//               <Input.TextArea />
//             </Form.Item>
//             <Form.Item label="Mobile" name="mobile" rules={rules}>
//               <Input type="number" />
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default BidModal;

import React from "react";
import { Form, Input, Modal } from "antd";

function BidModal({ showBidModal, setShowBidModal, product, reloadData }) {
  const formRef = React.useRef(null);
  const rules = [{ required: true, message: "Required" }];

  const onFinish = async (values) => {
    try {
      // Your logic for handling form submission
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Modal
      onCancel={() => setShowBidModal(false)}  
      visible={showBidModal}  
      centered
      width={700}
      onOk={() => formRef.current.submit()}
    >
      <div>
        <div className="flex flex-col gap-5 mb-7">
          <h1 className="text-2xl font-semibold text-orange-900 text-center">
            New Bid
          </h1>

          <Form layout="vertical" ref={formRef} onFinish={onFinish}>
            <Form.Item label="Bid Amount" name="bidAmount" rules={rules}>
              <Input />
            </Form.Item>
            <Form.Item label="Message" name="message" rules={rules}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Mobile" name="mobile" rules={rules}>
              <Input type="number" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default BidModal;
