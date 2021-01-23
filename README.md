Yêu cầu máy đã có node,yarn.

* Gõ các lệnh sau:

  - yarn // cài đặt các thư viện
  - yarn start // chạy thử trên trình duyệt
  - yarn build // build file deploy

* Hướng dẫn dùng module alias
  - Vào file config-overrides.js thêm thư viện module-alias (Chỗ này để khi run nó sẽ hiểu cách viết rút gọn)
  - Cập nhật file jsconfig.json (Cái này để thằng Visual code nó hiểu) thiếu cái này vẫn chạy đc nhưng k có gợi ý.
  - chạy lại yarn start
  - Sau khi thêm các thông tin trên thay vì dùng require("../controllers/userController") có thể dùng require("@controllers/userController"), việc copy đoạn code này qua file khác cũng sẽ chạy luôn mà không cần sửa lại đường dẫn. Rất ổn khi làm project có nhiều file trong folder.

* Sử dụng thư viện antd
  - Trong file App.js import file css của thư viện

* Quy tắc đặt tên Files
  - Nhóm các screens phù hợp theo route đã định nghĩa. Như route user/list là dành cho đường dẫn /src/screens/User/List.jsx.
  - Components là được đặt tên phù hợp tương ứng với đường dẫn tương đối của nó với components hay src. Như một component tại src/components/User/List.jsx nên đặt tên là UserList. Component tại src/screens/User/List nên đặt tên là ScreensUserList.
  - Components nằm trong một thự mục có cùng tên, không lặp lại tên trong một component. Như một component tại src/components/User/List/List.jsx nên đặt là UserList chứ KHÔNG được đặt là UserListList.
