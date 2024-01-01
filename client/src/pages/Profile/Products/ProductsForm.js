import React from "react";
import { Modal, Tabs, Form, Input, Row, Col } from "antd";
const { TextArea } = Input;

function ProductsForm({ showProductForm, setShowProductForm }) {
  return (
    <Modal
      title=""
      open={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
    >
      <Form>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="General" key="1">
            <Form.Item label="Name" name="name">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <TextArea type="text" />
            </Form.Item>
            <Row>
              <Col span={8}>
                <Form.Item label="Category" name="category">
                  <select name="">
                    <option value="electronics">Electronics</option>
                  </select>
                </Form.Item>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Images" key="2">
            <h1>Images</h1>
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </Modal>
  );
}

export default ProductsForm;
