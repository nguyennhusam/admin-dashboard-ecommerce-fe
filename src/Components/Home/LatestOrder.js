import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Đơn hàng mới nhất</h5>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>Khách hàng</b>
              </td>
              <td>sam1@gmail.com</td>
              <td>345.000đ</td>
              <td>
                <span className="badge rounded-pill alert-success">
                  Đã thanh toán 10:13 AM
                </span>
              </td>
              <td>Hôm nay lúc 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
            {/* Not Paid */}
            <tr>
              <td>
                <b>Khách hàng</b>
              </td>
              <td>tri1@gmail.com</td>
              <td>345.789đ</td>
              <td>
                <span className="badge rounded-pill alert-danger">
                  Đặt hàng 10:13 AM
                </span>
              </td>
              <td>Hôm nay lúc 10:13 AM</td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/order`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
