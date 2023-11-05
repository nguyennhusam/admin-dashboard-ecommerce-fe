import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng tiền</th>
          <th scope="col">Tình trạng thanh toán</th>
          <th scope="col">Ngày</th>
          <th>Trạng thái giao hàng</th>
          <th scope="col" className="text-end">
            Chi tiết
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Áo polo man tay lửng</b>
          </td>
          <td>sam1@gamil.com</td>
          <td>450,789đ</td>
          <td>
            <span className="badge rounded-pill alert-success">
              Thanh toán 23:56 AM
            </span>
          </td>
          <td>05-11-2023</td>
          <td>
            <span className="badge btn-success">Đã giao hàng</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
        {/* Not paid Not delivered */}
        <tr>
          <td>
            <b>Áo thun họa tiết chấm đen</b>
          </td>
          <td>tri1@gmail.com</td>
          <td>450,789đ</td>
          <td>
            <span className="badge rounded-pill alert-danger">Chưa thanh toán</span>
          </td>
          <td>05-11-2023</td>
          <td>
            <span className="badge btn-dark">Chưa được giao</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;
