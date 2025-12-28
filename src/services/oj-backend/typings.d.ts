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

  type BaseResponsePageQuestion = {
    /** 状态码 */
    code?: number;
    data?: PageQuestion;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageQuestionSubmit = {
    /** 状态码 */
    code?: number;
    data?: PageQuestionSubmit;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageQuestionSubmitVO = {
    /** 状态码 */
    code?: number;
    data?: PageQuestionSubmitVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageQuestionVO = {
    /** 状态码 */
    code?: number;
    data?: PageQuestionVO;
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

  type BaseResponseQuestionSubmitVO = {
    /** 状态码 */
    code?: number;
    data?: QuestionSubmitVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseQuestionVO = {
    /** 状态码 */
    code?: number;
    data?: QuestionVO;
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

  type getQuestionSubmitVOByIdParams = {
    id: number;
  };

  type getQuestionVOByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type JudgeCase = {
    /** 输入用例 */
    input?: string;
    /** 输出用例 */
    output?: string;
  };

  type JudgeConfig = {
    /** 时间限制（ms） */
    timeLimit?: number;
    /** 内存限制（kb） */
    memoryLimit?: number;
    /** 堆栈限制（kb） */
    stackLimit?: number;
  };

  type JudgeInfo = {
    /** 判题信息 */
    message?: string;
    /** 时间（ms） */
    time?: number;
    /** 内存（kb） */
    memory?: number;
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

  type PageQuestion = {
    records?: Question[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageQuestion;
    searchCount?: PageQuestion;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageQuestionSubmit = {
    records?: QuestionSubmit[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageQuestionSubmit;
    searchCount?: PageQuestionSubmit;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageQuestionSubmitVO = {
    records?: QuestionSubmitVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageQuestionSubmitVO;
    searchCount?: PageQuestionSubmitVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageQuestionVO = {
    records?: QuestionVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageQuestionVO;
    searchCount?: PageQuestionVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
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

  type Question = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string;
    /** 答案 */
    answer?: string;
    /** 题目提交数 */
    submitNum?: number;
    /** 题目通过数 */
    acceptNum?: number;
    /** 判题用例(json数组) */
    judgeCase?: string;
    /** 判题配置(json数组) */
    judgeConfig?: string;
    /** 题目点赞数 */
    thumbNum?: number;
    /** 题目收藏数 */
    favourNum?: number;
    /** 创建用户id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type QuestionAddRequest = {
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string[];
    /** 答案 */
    answer?: string;
    /** 判题用例(json数组) */
    judgeCase?: JudgeCase[];
    /** 判题配置(json数组) */
    judgeConfig?: JudgeConfig[];
  };

  type QuestionEditRequest = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string[];
    /** 答案 */
    answer?: string;
    /** 判题用例(json数组) */
    judgeCase?: JudgeCase[];
    /** 判题配置(json数组) */
    judgeConfig?: JudgeConfig[];
  };

  type QuestionQueryRequest = {
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
    /** 搜索词 */
    searchText?: string;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string[];
    /** 答案 */
    answer?: string;
    /** 创建用户id */
    userId?: number;
  };

  type QuestionSubmit = {
    id?: number;
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
    /** 判题信息(json对象) */
    judgeInfo?: string;
    /** 判题信息(0-待判题，1-判题中，2-成功，3-失败) */
    status?: number;
    /** 题目id */
    questionId?: number;
    /** 创建用户id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type QuestionSubmitAddRequest = {
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
    /** 题目id */
    questionId?: number;
  };

  type QuestionSubmitEditRequest = {
    /** id */
    id?: number;
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
  };

  type QuestionSubmitQueryRequest = {
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
    /** 搜索词 */
    searchText?: string;
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
    /** 判题信息(json对象) */
    judgeInfo?: JudgeInfo[];
    /** 判题信息(0-待判题，1-判题中，2-成功，3-失败) */
    status?: number;
    /** 题目id */
    questionId?: number;
    /** 创建用户id */
    userId?: number;
  };

  type QuestionSubmitUpdateRequest = {
    /** id */
    id?: number;
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
  };

  type QuestionSubmitVO = {
    /** id */
    id?: number;
    /** 编程语言 */
    language?: string;
    /** 用户代码 */
    code?: string;
    /** 判题信息(json对象) */
    judgeInfo?: JudgeInfo[];
    /** 判题信息(0-待判题，1-判题中，2-成功，3-失败) */
    status?: number;
    /** 题目id */
    questionId?: number;
    /** 创建用户id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    userVO?: UserVO;
    questionVO?: QuestionVO;
  };

  type QuestionUpdateRequest = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string[];
    /** 答案 */
    answer?: string;
    /** 题目提交数 */
    submitNum?: number;
    /** 题目通过数 */
    acceptNum?: number;
    /** 判题用例(json数组) */
    judgeCase?: JudgeCase[];
    /** 判题配置(json数组) */
    judgeConfig?: JudgeConfig[];
    /** 题目点赞数 */
    thumbNum?: number;
    /** 题目收藏数 */
    favourNum?: number;
  };

  type QuestionVO = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签(json数组) */
    tags?: string[];
    /** 答案 */
    answer?: string;
    /** 题目提交数 */
    submitNum?: number;
    /** 题目通过数 */
    acceptNum?: number;
    /** 判题用例(json数组) */
    judgeCase?: JudgeCase[];
    /** 判题配置(json数组) */
    judgeConfig?: JudgeConfig[];
    /** 题目点赞数 */
    thumbNum?: number;
    /** 题目收藏数 */
    favourNum?: number;
    /** 用户id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    userVO?: UserVO;
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
    /** 用户昵称 */
    userName?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
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
