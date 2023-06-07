import { Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
   typography: {
      fontSize: 12,
   },
   palette: {
      text: {
         grey: grey[700],
         secondary: '#757575',
      },
   },
});

function info() {
   return (
      <ThemeProvider theme={theme}>
         <ul>
            <li>
               <Typography color="text.grey">
                  1. Giá trị trao đổi sẽ thay đổi tùy theo điều kiện, năm và cấu hình của thiết bị trao đổi đủ điều kiện
                  của bạn. Không phải tất cả các thiết bị đều đủ điều kiện nhận tín dụng. Bạn phải ít nhất 18 tuổi để đủ
                  điều kiện đổi lấy tín dụng hoặc Thẻ quà tặng Apple. Giá trị trao đổi có thể được áp dụng cho giao dịch
                  mua thiết bị mới đủ điều kiện hoặc được thêm vào Thẻ quà tặng Apple. Giá trị thực tế được trao dựa
                  trên việc nhận được một thiết bị đủ điều kiện phù hợp với mô tả được cung cấp khi ước tính được thực
                  hiện. Thuế bán hàng có thể được tính trên toàn bộ giá trị của giao dịch mua thiết bị mới. Giao dịch
                  tại cửa hàng yêu cầu xuất trình giấy tờ tùy thân có ảnh hợp lệ (luật địa phương có thể yêu cầu lưu
                  thông tin này). Ưu đãi có thể không có sẵn ở tất cả các cửa hàng và có thể khác nhau giữa giao dịch
                  tại cửa hàng và trực tuyến. Một số cửa hàng có thể có các yêu cầu bổ sung. Apple hoặc các đối tác trao
                  đổi của Apple có quyền từ chối hoặc giới hạn số lượng của bất kỳ giao dịch trao đổi nào vì bất kỳ lý
                  do gì. Thông tin chi tiết có sẵn từ đối tác trao đổi của Apple để trao đổi và tái chế các thiết bị đủ
                  điều kiện. Hạn chế và hạn chế có thể áp dụng.
               </Typography>
            </li>
            <li>
               <Typography color="text.grey">2. So với AirPods Pro (thế hệ 1).</Typography>
            </li>
            <li>
               <Typography color="text.grey">
                  Để truy cập và sử dụng tất cả các tính năng của Thẻ Apple, bạn phải thêm Thẻ Apple vào Wallet trên
                  iPhone hoặc iPad với phiên bản iOS hoặc iPadOS mới nhất. Cập nhật lên phiên bản mới nhất bằng cách đi
                  tới Cài đặt {'>'} Cài đặt chung {'>'} Cập nhật phần mềm. Nhấn Tải xuống và Cài đặt.
               </Typography>
            </li>
            <li>
               <Typography color="text.grey">Có sẵn cho các ứng viên đủ điều kiện tại Hoa Kỳ.</Typography>
            </li>
            <li>
               <Typography color="text.grey">
                  Thẻ Apple được phát hành bởi Ngân hàng Goldman Sachs Hoa Kỳ, Chi nhánh Thành phố Salt Lake.
               </Typography>
            </li>
            <li>
               <Typography color="text.grey">
                  Tìm hiểu thêm về cách các ứng dụng Thẻ Apple được đánh giá tại support.apple.com/kb/HT209218 .
               </Typography>
            </li>
            <li>
               <Typography color="text.grey">Cần có đăng ký cho Apple TV+.</Typography>
            </li>
            <li>
               <Typography color="text.grey">
                  Các thương hiệu và bản quyền của Giải bóng chày Major League được sử dụng với sự cho phép của MLB
                  Advanced Media, LP Bảo lưu mọi quyền.
               </Typography>
            </li>
         </ul>
      </ThemeProvider>
   );
}

export default info;
