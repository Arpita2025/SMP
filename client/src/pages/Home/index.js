import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../apicalls/products";
import { SetLoader } from "../../redux/loadersSlice";
import { message } from "antd";
import  Divider from "../../components/Divider"
import {useNavigate} from "react-router-dom";
function Home() {
  const [products, setProducts] = React.userStatus([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
  });
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {products?.map((product) => {
          return (
            <div className="border border-gray-300 rounded  border-solid flex flex-col gap-5  pb-2 cursor-pointer">
              <img
                src={product.images[0]}
                className="w-full h-40 object-cover"
                alt=""
              />
              <div className=" px-2 flex flex-col gap-1">
                <h1 className="text-lg front-semibold"> {product.name}</h1>
                <p className="text-sm ">{product.description}</p>
                <Divider />
                <span className="text-xl front-semibold text-green-700">
                  {" "}
                  $ {product.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
