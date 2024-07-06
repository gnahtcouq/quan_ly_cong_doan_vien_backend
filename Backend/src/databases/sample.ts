/* eslint-disable prettier/prettier */
export const ADMIN_ROLE = 'SUPER_ADMIN';
export const USER_ROLE = 'NORMAL_USER';

export const INIT_PERMISSIONS = [
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
    apiPath: '/api/v1/users/request-email-change/:id',
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
    apiPath: '/api/v1/users/confirm-email-change/:id',
    method: 'GET',
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
  {
    _id: '648ad499dafdb9754f40b84b',
    name: 'Xem thông tin chi tiết bài đăng',
    apiPath: '/api/v1/posts/:id',
    method: 'GET',
    module: 'POSTS',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:33.697Z',
    updatedAt: '2023-06-15T09:06:33.697Z',
    __v: 0,
  },
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
    _id: '648ad613dafdb9754f40b89a',
    name: 'Thêm mới vai trò',
    apiPath: '/api/v1/roles',
    method: 'POST',
    module: 'ROLES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:51.974Z',
    updatedAt: '2023-06-15T09:12:51.974Z',
    __v: 0,
  },
  {
    _id: '648ad622dafdb9754f40b89f',
    name: 'Xem danh sách vai trò',
    apiPath: '/api/v1/roles',
    method: 'GET',
    module: 'ROLES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:06.618Z',
    updatedAt: '2023-06-15T09:13:06.618Z',
    __v: 0,
  },
  {
    _id: '648ad630dafdb9754f40b8a6',
    name: 'Xem thông tin chi tiết vai trò',
    apiPath: '/api/v1/roles/:id',
    method: 'GET',
    module: 'ROLES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:20.853Z',
    updatedAt: '2023-06-15T09:13:20.853Z',
    __v: 0,
  },
  {
    _id: '648ad640dafdb9754f40b8ab',
    name: 'Cập nhật thông tin vai trò',
    apiPath: '/api/v1/roles/:id',
    method: 'PATCH',
    module: 'ROLES',
    createdBy: {
      _id: '647b5108a8a243e8191855b5',
      email: 'comehere.thang@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:36.836Z',
    updatedAt: '2023-06-15T09:13:36.836Z',
    __v: 0,
  },
  {
    _id: '648ad650dafdb9754f40b8b0',
    name: 'Xoá vai trò',
    apiPath: '/api/v1/roles/:id',
    method: 'DELETE',
    module: 'ROLES',
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
];
