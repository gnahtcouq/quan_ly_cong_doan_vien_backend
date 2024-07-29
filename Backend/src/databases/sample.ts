/* eslint-disable prettier/prettier */
export const INIT_PERMISSIONS = [
  {
    _id: '6694902bda1f6560724cb094',
    name: 'Truy cập trang quản trị',
    apiPath: '/admin',
    method: 'ACCESS_TO_ADMIN_PAGE',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2022-06-15T06:47:49.369Z',
    updatedAt: '2022-06-15T06:54:05.131Z',
    __v: 0,
    updatedBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
  },
  {
    _id: '66a1eaa3af5212c607f12b13',
    name: 'Truy cập trang thống kê',
    apiPath: '/admin/dashboard',
    method: 'ACCESS_TO_DASHBOARD',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2022-06-15T06:47:49.369Z',
    updatedAt: '2022-06-15T06:54:05.131Z',
    __v: 0,
    updatedBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
  },
  {
    _id: '648ab415f4328bd3153ee211',
    name: 'Xem danh sách đơn vị',
    apiPath: '/api/v1/departments',
    method: 'GET',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:47:49.369Z',
    updatedAt: '2023-06-15T06:54:05.131Z',
    __v: 0,
    updatedBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
  },
  {
    _id: '648ab436f4328bd3153ee216',
    name: 'Thêm mới đơn vị',
    apiPath: '/api/v1/departments',
    method: 'POST',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:48:22.224Z',
    updatedAt: '2023-06-15T06:48:22.224Z',
    __v: 0,
  },
  {
    _id: '648ab4d5f4328bd3153ee21b',
    name: 'Cập nhật thông tin đơn vị',
    apiPath: '/api/v1/departments/:id',
    method: 'PATCH',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:51:01.241Z',
    updatedAt: '2023-06-15T06:51:01.241Z',
    __v: 0,
  },
  {
    _id: '648ab4ebf4328bd3153ee220',
    name: 'Xoá đơn vị',
    apiPath: '/api/v1/departments/:id',
    method: 'DELETE',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:51:23.973Z',
    updatedAt: '2023-06-15T06:51:23.973Z',
    __v: 0,
  },
  {
    _id: '648ab5a8072f2a2ef910638d',
    name: 'Xem thông tin chi tiết đơn vị',
    apiPath: '/api/v1/departments/:id',
    method: 'GET',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:54:32.799Z',
    updatedAt: '2023-06-15T06:54:32.799Z',
    __v: 0,
  },
  {
    _id: '6666f05b38171eb82790369c',
    name: 'Xem số lượng đơn vị',
    apiPath: '/api/v1/departments/count',
    method: 'POST',
    module: 'DEPARTMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '648ab6d3fa16b294212e4033',
    name: 'Thêm mới thành viên',
    apiPath: '/api/v1/users',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:31.898Z',
    updatedAt: '2023-06-15T06:59:31.898Z',
    __v: 0,
  },
  {
    _id: '648ab6e7fa16b294212e4038',
    name: 'Xem thông tin chi tiết thành viên',
    apiPath: '/api/v1/users/:id',
    method: 'GET',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:51.041Z',
    updatedAt: '2023-06-15T06:59:51.041Z',
    __v: 0,
  },
  {
    _id: '648ab6fdfa16b294212e403d',
    name: 'Xem danh sách thành viên',
    apiPath: '/api/v1/users',
    method: 'GET',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:13.364Z',
    updatedAt: '2023-06-15T07:00:13.364Z',
    __v: 0,
  },
  {
    _id: '648ab719fa16b294212e4042',
    name: 'Cập nhật thông tin thành viên',
    apiPath: '/api/v1/users/:id',
    method: 'PATCH',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:41.934Z',
    updatedAt: '2023-06-15T07:00:41.934Z',
    __v: 0,
  },
  {
    _id: '66943bdd23978c1c8958970e',
    name: 'Cập nhật quyền hạn thành viên',
    apiPath: '/api/v1/users/:id',
    method: 'PUT',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:11.323Z',
    updatedAt: '2023-06-15T09:12:11.323Z',
    __v: 0,
  },
  {
    _id: '648ab728fa16b294212e4047',
    name: 'Xoá thành viên',
    apiPath: '/api/v1/users/:id',
    method: 'DELETE',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:56.274Z',
    updatedAt: '2023-06-15T07:00:56.274Z',
    __v: 0,
  },
  {
    _id: '6697de58af6aeefbf633abf1',
    name: 'Tải lên danh sách thành viên',
    apiPath: '/api/v1/users/:id',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:56.274Z',
    updatedAt: '2023-06-15T07:00:56.274Z',
    __v: 0,
  },
  {
    _id: '6666f065aad2dbd0e9041226',
    name: 'Xem số lượng thành viên',
    apiPath: '/api/v1/users/count',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '6688dfd0a9b3d97d1b368c44',
    name: 'Gửi yêu cầu thay đổi email',
    apiPath: '/api/v1/users/request-change-email/:id',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '66890545d40c708b15d2f329',
    name: 'Xác nhận thay đổi email',
    apiPath: '/api/v1/users/confirm-change-email/:id',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '668b84dce8720bbbd18c7e77',
    name: 'Thay đổi mật khẩu',
    apiPath: '/api/v1/users/change-password/:id',
    method: 'POST',
    module: 'USERS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '666f366d683cf1b5e2c9b7f9',
    name: 'Thêm mới công đoàn viên',
    apiPath: '/api/v1/unionists',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:31.898Z',
    updatedAt: '2023-06-15T06:59:31.898Z',
    __v: 0,
  },
  {
    _id: '666f3672d8d4bd537d4407ef',
    name: 'Xem thông tin chi tiết công đoàn viên',
    apiPath: '/api/v1/unionists/:id',
    method: 'GET',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:51.041Z',
    updatedAt: '2023-06-15T06:59:51.041Z',
    __v: 0,
  },
  {
    _id: '666f3679fdee1d528c846ebe',
    name: 'Xem danh sách công đoàn viên',
    apiPath: '/api/v1/unionists',
    method: 'GET',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:13.364Z',
    updatedAt: '2023-06-15T07:00:13.364Z',
    __v: 0,
  },
  {
    _id: '666f3680006c1579a34d5ec2',
    name: 'Cập nhật thông tin công đoàn viên',
    apiPath: '/api/v1/unionists/:id',
    method: 'PATCH',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:41.934Z',
    updatedAt: '2023-06-15T07:00:41.934Z',
    __v: 0,
  },
  {
    _id: '6694cbb68cc60924a765f673',
    name: 'Cập nhật quyền hạn công đoàn viên',
    apiPath: '/api/v1/unionists/:id',
    method: 'PUT',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:11.323Z',
    updatedAt: '2023-06-15T09:12:11.323Z',
    __v: 0,
  },
  {
    _id: '666f3686b8bab8c9aef4c495',
    name: 'Xoá công đoàn viên',
    apiPath: '/api/v1/unionists/:id',
    method: 'DELETE',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:56.274Z',
    updatedAt: '2023-06-15T07:00:56.274Z',
    __v: 0,
  },
  {
    _id: '6697ee9673975ad0a88c668e',
    name: 'Tải lên danh sách công đoàn viên',
    apiPath: '/api/v1/unionists/upload',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:56.274Z',
    updatedAt: '2023-06-15T07:00:56.274Z',
    __v: 0,
  },
  {
    _id: '666f368c80d7a70fa93fd90e',
    name: 'Xem số lượng công đoàn viên',
    apiPath: '/api/v1/unionists/count',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '6694cc16fda6b0a670cd3e42',
    name: 'Gửi yêu cầu thay đổi email',
    apiPath: '/api/v1/unionists/request-change-email/:id',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '6694cc7cfda6b0a670cd3e4b',
    name: 'Xác nhận thay đổi email',
    apiPath: '/api/v1/unionists/confirm-change-email/:id',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '6694cc9d047108a8053a8cce',
    name: 'Thay đổi mật khẩu',
    apiPath: '/api/v1/unionists/change-password/:id',
    method: 'POST',
    module: 'UNIONISTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '648ab750fa16b294212e404c',
    name: 'Upload File',
    apiPath: '/api/v1/files/upload',
    method: 'POST',
    module: 'FILES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:01:36.923Z',
    updatedAt: '2023-06-15T07:01:36.923Z',
    __v: 0,
  },
  {
    _id: '648ad488dafdb9754f40b846',
    name: 'Thêm mới bài đăng',
    apiPath: '/api/v1/posts',
    method: 'POST',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:16.508Z',
    updatedAt: '2023-06-15T09:06:16.508Z',
    __v: 0,
  },
  // {
  //   _id: '648ad499dafdb9754f40b84b',
  //   name: 'Xem thông tin chi tiết bài đăng',
  //   apiPath: '/api/v1/posts/:id',
  //   method: 'GET',
  //   module: 'POSTS',
  //   createdBy: {
  //     _id: '647b5108a8a243e8191855b5',
  //     email: 'comehere.thang@gmail.com',
  //   },
  //   isDeleted: false,
  //   deletedAt: null,
  //   createdAt: '2023-06-15T09:06:33.697Z',
  //   updatedAt: '2023-06-15T09:06:33.697Z',
  //   __v: 0,
  // },
  {
    _id: '648ad4a6dafdb9754f40b850',
    name: 'Cập nhật thông tin bài đăng',
    apiPath: '/api/v1/posts/:id',
    method: 'PATCH',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:46.085Z',
    updatedAt: '2023-06-15T09:06:46.085Z',
    __v: 0,
  },
  {
    _id: '66a1e2040e45e02baa2a89dd',
    name: 'Cập nhật trạng thái bài đăng',
    apiPath: '/api/v1/posts/:id',
    method: 'PUT',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:46.085Z',
    updatedAt: '2023-06-15T09:06:46.085Z',
    __v: 0,
  },
  {
    _id: '648ad4ccdafdb9754f40b859',
    name: 'Xem danh sách bài đăng',
    apiPath: '/api/v1/posts',
    method: 'GET',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:07:24.175Z',
    updatedAt: '2023-06-15T09:07:24.175Z',
    __v: 0,
  },
  {
    _id: '648ad4d9dafdb9754f40b85e',
    name: 'Xoá bài đăng',
    apiPath: '/api/v1/posts/:id',
    method: 'DELETE',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:07:37.896Z',
    updatedAt: '2023-06-15T09:07:37.896Z',
    __v: 0,
  },
  {
    _id: '6666f06b3254c2be902bfe5e',
    name: 'Xem số lượng bài đăng',
    apiPath: '/api/v1/posts/count',
    method: 'POST',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '648ad4fedafdb9754f40b863',
    name: 'Tạo mới văn bản',
    apiPath: '/api/v1/documents',
    method: 'POST',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:14.659Z',
    updatedAt: '2023-06-15T09:08:14.659Z',
    __v: 0,
  },
  {
    _id: '648ad511dafdb9754f40b868',
    name: 'Xem danh sách văn bản',
    apiPath: '/api/v1/documents',
    method: 'GET',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:33.395Z',
    updatedAt: '2023-06-15T09:08:33.395Z',
    __v: 0,
  },
  {
    _id: '648ad522dafdb9754f40b86d',
    name: 'Xem thông tin chi tiết văn bản',
    apiPath: '/api/v1/documents/:id',
    method: 'GET',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:50.801Z',
    updatedAt: '2023-06-15T09:08:50.801Z',
    __v: 0,
  },
  {
    _id: '648ad53bdafdb9754f40b872',
    name: 'Xoá văn bản',
    apiPath: '/api/v1/documents/:id',
    method: 'DELETE',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:09:15.785Z',
    updatedAt: '2023-06-15T09:09:15.785Z',
    __v: 0,
  },
  {
    _id: '648ad555dafdb9754f40b877',
    name: 'Cập nhật trạng thái văn bản',
    apiPath: '/api/v1/documents/:id',
    method: 'PATCH',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:09:41.694Z',
    updatedAt: '2023-06-15T09:09:41.694Z',
    __v: 0,
  },
  {
    _id: '6684fc817e6150f6975463aa',
    name: 'Cập nhật tên văn bản',
    apiPath: '/api/v1/documents/:id',
    method: 'PUT',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:09:41.694Z',
    updatedAt: '2023-06-15T09:09:41.694Z',
    __v: 0,
  },
  {
    _id: '648ad56ddafdb9754f40b87c',
    name: 'Xem danh sách văn bản theo thành viên',
    apiPath: '/api/v1/documents/by-user',
    method: 'POST',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:10:05.961Z',
    updatedAt: '2023-06-15T09:10:05.961Z',
    __v: 0,
  },
  {
    _id: '6666f037cea8012c358bae9e',
    name: 'Xem số lượng văn bản',
    apiPath: '/api/v1/documents/count',
    method: 'POST',
    module: 'DOCUMENTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
  {
    _id: '648ad59adafdb9754f40b881',
    name: 'Tạo mới quyền hạn',
    apiPath: '/api/v1/permissions',
    method: 'POST',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:10:50.946Z',
    updatedAt: '2023-06-15T09:10:50.946Z',
    __v: 0,
  },
  {
    _id: '648ad5aedafdb9754f40b886',
    name: 'Xem danh sách quyền hạn',
    apiPath: '/api/v1/permissions',
    method: 'GET',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:10.914Z',
    updatedAt: '2023-06-15T09:11:10.914Z',
    __v: 0,
  },
  {
    _id: '648ad5c5dafdb9754f40b88b',
    name: 'Xem thông tin chi tiết quyền hạn',
    apiPath: '/api/v1/permissions/:id',
    method: 'GET',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:33.234Z',
    updatedAt: '2023-06-15T09:11:33.234Z',
    __v: 0,
  },
  {
    _id: '648ad5d4dafdb9754f40b890',
    name: 'Cập nhật thông tin quyền hạn',
    apiPath: '/api/v1/permissions/:id',
    method: 'PATCH',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '648ad5ebdafdb9754f40b895',
    name: 'Xoá quyền hạn',
    apiPath: '/api/v1/permissions/:id',
    method: 'DELETE',
    module: 'PERMISSIONS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:11.323Z',
    updatedAt: '2023-06-15T09:12:11.323Z',
    __v: 0,
  },
  {
    _id: '669659a0c5d4e84cd7515859',
    name: 'Tạo mới công đoàn phí',
    apiPath: '/api/v1/fees',
    method: 'POST',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66965b6286e8a509567a218e',
    name: 'Xem danh sách công đoàn phí',
    apiPath: '/api/v1/fees',
    method: 'GET',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66a5e5a406d2f0606ea29bae',
    name: 'Lấy thông tin đóng công đoàn phí theo công đoàn viên',
    apiPath: '/api/v1/fees/by-unionist',
    method: 'GET',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66965e152d2ec3b0bfc03595',
    name: 'Xem thông tin chi tiết công đoàn phí',
    apiPath: '/api/v1/fees/:id',
    method: 'GET',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66965e332d2ec3b0bfc0359e',
    name: 'Cập nhật thông tin công đoàn phí',
    apiPath: '/api/v1/fees/:id',
    method: 'PATCH',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66968e1a0979f9a91572e2ff',
    name: 'Xoá công đoàn phí',
    apiPath: '/api/v1/fees/:id',
    method: 'DELETE',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '669718d20418310dcc6f2703',
    name: 'Tải lên danh sách công đoàn phí',
    apiPath: '/api/v1/fees/upload',
    method: 'POST',
    module: 'FEES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d059eb2b81a905bd3132',
    name: 'Tạo mới phiếu thu',
    apiPath: '/api/v1/receipts',
    method: 'POST',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d084eb2b81a905bd313b',
    name: 'Xem danh sách phiếu thu',
    apiPath: '/api/v1/receipts',
    method: 'GET',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66a7651f2beed38d9fd58878',
    name: 'Lấy thông tin phiếu thu theo thời gian',
    apiPath: '/api/v1/receipts/by-time',
    method: 'GET',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d0b1eb2b81a905bd3144',
    name: 'Xem thông tin chi tiết phiếu thu',
    apiPath: '/api/v1/receipts/:id',
    method: 'GET',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d0f8eb2b81a905bd3155',
    name: 'Cập nhật thông tin phiếu thu',
    apiPath: '/api/v1/receipts/:id',
    method: 'PATCH',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d124eb2b81a905bd315e',
    name: 'Xoá phiếu thu',
    apiPath: '/api/v1/receipts/:id',
    method: 'DELETE',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66982ece2bec1e24eb383e7b',
    name: 'Tải lên danh sách phiếu thu',
    apiPath: '/api/v1/receipts/upload',
    method: 'POST',
    module: 'RECEIPTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d059eb2b81a911bd3132',
    name: 'Tạo mới phiếu chi',
    apiPath: '/api/v1/expenses',
    method: 'POST',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d084eb2b81a912bd313b',
    name: 'Xem danh sách phiếu chi',
    apiPath: '/api/v1/expenses',
    method: 'GET',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66a7653e2beed38d9fd58883',
    name: 'Lấy thông tin phiếu chi theo thời gian',
    apiPath: '/api/v1/expenses/by-time',
    method: 'GET',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d0b1eb2b81a913bd3144',
    name: 'Xem thông tin chi tiết phiếu chi',
    apiPath: '/api/v1/expenses/:id',
    method: 'GET',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d0f8eb2b81a914bd3155',
    name: 'Cập nhật thông tin phiếu chi',
    apiPath: '/api/v1/expenses/:id',
    method: 'PATCH',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d124eb2b81a915bd315e',
    name: 'Xoá phiếu chi',
    apiPath: '/api/v1/expenses/:id',
    method: 'DELETE',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '669833998a337a4d50aeb7f9',
    name: 'Tải lên danh sách phiếu chi',
    apiPath: '/api/v1/expenses/upload',
    method: 'POST',
    module: 'EXPENSES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d7d601d85c000b573a7d',
    name: 'Tạo mới danh mục thu',
    apiPath: '/api/v1/income-categories',
    method: 'POST',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d7ff01d85c000b573a86',
    name: 'Xem danh sách danh mục thu',
    apiPath: '/api/v1/income-categories',
    method: 'GET',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d82301d85c000b573a8f',
    name: 'Xem thông tin chi tiết danh mục thu',
    apiPath: '/api/v1/income-categories/:id',
    method: 'GET',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d84201d85c000b573a98',
    name: 'Cập nhật thông tin danh mục thu',
    apiPath: '/api/v1/income-categories/:id',
    method: 'PATCH',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d86201d85c000b573aa9',
    name: 'Xoá danh mục thu',
    apiPath: '/api/v1/income-categories/:id',
    method: 'DELETE',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66983866b6e411bcaa957dbb',
    name: 'Tải lên danh sách danh mục thu',
    apiPath: '/api/v1/income-categories/upload',
    method: 'POST',
    module: 'INCOMECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d7d601d85c000b529a7d',
    name: 'Tạo mới danh mục chi',
    apiPath: '/api/v1/expense-categories',
    method: 'POST',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d7ff01d85c000b530a86',
    name: 'Xem danh sách danh mục chi',
    apiPath: '/api/v1/expense-categories',
    method: 'GET',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d82301d85c000b531a8f',
    name: 'Xem thông tin chi tiết danh mục chi',
    apiPath: '/api/v1/expense-categories/:id',
    method: 'GET',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d84201d85c000b532a98',
    name: 'Cập nhật thông tin danh mục chi',
    apiPath: '/api/v1/expense-categories/:id',
    method: 'PATCH',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '6696d86201d85c000b533aa9',
    name: 'Xoá danh mục chi',
    apiPath: '/api/v1/expense-categories/:id',
    method: 'DELETE',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '66983879b6e411bcaa957dc4',
    name: 'Tải lên danh sách danh mục chi',
    apiPath: '/api/v1/expense-categories/upload',
    method: 'POST',
    module: 'EXPENSECATEGORIES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
];
