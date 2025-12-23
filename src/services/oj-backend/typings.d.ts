declare namespace API {
  type BaseResponseBoolean = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: boolean;
    /** 消息 */
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    /** 状态码 */
    code?: number;
    data?: LoginUserVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseLong = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: number;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageUser = {
    /** 状态码 */
    code?: number;
    data?: PageUser;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageUserVO = {
    /** 状态码 */
    code?: number;
    data?: PageUserVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseString = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: string;
    /** 消息 */
    message?: string;
  };

  type BaseResponseUser = {
    /** 状态码 */
    code?: number;
    data?: User;
    /** 消息 */
    message?: string;
  };

  type BaseResponseUserVO = {
    /** 状态码 */
    code?: number;
    data?: UserVO;
    /** 消息 */
    message?: string;
  };

  type DeleteRequest = {
    /** id */
    id?: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type LoginUserVO = {
    /** 用户 id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** token */
    token?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    /** 业务 */
    biz?: string;
  };

  type User = {
    /** id */
    id?: number;
    /** 用户账号 */
    userAccount?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type UserAddRequest = {
    /** 用户昵称 */
    userName?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色: user, admin */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type UserEditRequest = {
    /** 用户昵称 */
    userName?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type UserLoginRequest = {
    /** 账号 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
  };

  type UserQueryRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    /** id */
    id?: number;
    /** notId */
    notId?: number;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 搜索关键词 */
    searchText?: string;
  };

  type UserRegisterRequest = {
    /** 账号 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
    /** 再次输入密码 */
    checkPassword?: string;
  };

  type UserUpdateRequest = {
    /** id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type UserVO = {
    /** id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
  };
}
