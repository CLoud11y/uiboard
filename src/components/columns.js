export const columns_worklist = [
    {
      name: "序号",
      key: "seq",
      // required: true,
      // description: "The first name of the user",
      suggested_mappings: ["序号"],
    },
    {
      name: "事项",
      key: "project", 
      suggested_mappings: ["事项"],
    },
    {
      name: "责任人",
      key: "responsible_name", 
      suggested_mappings: ["责任人"],
    },
    {
      name: "节点时间要求",
      key: "time_limit", 
      suggested_mappings: ["节点时间要求"],
    },
    {
      name: "备注",
      key: "desc", 
      suggested_mappings: ["备注"],
    },
];
// 姓名,考勤组,部门,工号,职位,UserId,考勤日期,考勤时间,打卡时间,打卡结果,打卡地址,打卡备注,
// 异常打卡原因,打卡图片1,打卡图片2,打卡设备,管理员修改备注,管理员修改备注图片1,管理员修改备注图片2,管理员修改备注图片3
export const columns_attendance = [
    {
        name: "姓名",
        key: "name", 
        suggested_mappings: ["姓名"],
    },
    {
        name: "考勤组",
        key: "attendance_group", 
        suggested_mappings: ["考勤组"],
    },
    {
        name: "部门",
        key: "department",  
        suggested_mappings: ["部门"],
    },
    {
        name: "工号",
        key: "job_number",  
        suggested_mappings: ["工号"],
    },
    {
        name: "职位",
        key: "position",  
        suggested_mappings: ["职位"],
    },
    {
        name: "UserId",
        key: "user_id",  
        suggested_mappings: ["UserId"],
    },
    {
        name: "考勤日期",
        key: "attendance_date",  
        suggested_mappings: ["考勤日期"],
    },
    {
        name: "考勤时间",
        key: "attendance_time",  
        suggested_mappings: ["考勤时间"],
    },
    {
        name: "打卡时间",
        key: "check_time",  
        suggested_mappings: ["打卡时间"],
    },
    {
        name: "打卡结果",
        key: "check_result",  
        suggested_mappings: ["打卡结果"],
    },
    {
        name: "打卡地址",
        key: "check_address",  
        suggested_mappings: ["打卡地址"],
    },
    {
        name: "打卡备注",
        key: "check_desc",  
        suggested_mappings: ["打卡备注"],
    },
    {
        name: "异常打卡原因",
        key: "abnormal_reason",  
        suggested_mappings: ["异常打卡原因"],
    },
    {
        name: "打卡图片1",
        key: "check_image1",  
        suggested_mappings: ["打卡图片1"],
    },
    {
        name: "打卡图片2",
        key: "check_image2",  
        suggested_mappings: ["打卡图片2"],
    },
    {
        name: "打卡设备",
        key: "check_device",  
        suggested_mappings: ["打卡设备"],
    },
    {
        name: "管理员修改备注",
        key: "admin_desc",  
        suggested_mappings: ["管理员修改备注"],
    },
    {
        name: "管理员修改备注图片1",
        key: "admin_image1",  
        suggested_mappings: ["管理员修改备注图片1"],
    },
    {
        name: "管理员修改备注图片2",
        key: "admin_image2",  
        suggested_mappings: ["管理员修改备注图片2"],
    },
    {
        name: "管理员修改备注图片3",
        key: "admin_image3",  
        suggested_mappings: ["管理员修改备注图片3"],
    },
];

export const columns_resource = [
    // 序号,日期,工区,物资名称,型号规格,质量标准技术要求,计量单位,数量,项目名称
    {
        name: "序号",
        key: "seq",  
        suggested_mappings: ["序号"],
    },
    {
        name: "日期",
        key: "date",  
        suggested_mappings: ["日期"],
    },
    {
        name: "工区",
        key: "work_area",  
        suggested_mappings: ["工区"],
    },
    {
        name: "物资名称",
        key: "material_name",  
        suggested_mappings: ["物资名称"],
    },
    {
        name: "型号规格",
        key: "model_spec",  
        suggested_mappings: ["型号规格"],
    },
    {
        name: "质量标准技术要求",
        key: "quality_standard",  
        suggested_mappings: ["质量标准技术要求"],
    },
    {
        name: "计量单位",
        key: "measurement_unit",  
        suggested_mappings: ["计量单位"],
    },
    {
        name: "数量",
        key: "quantity",  
        suggested_mappings: ["数量"],
    },
    {
        name: "项目名称",
        key: "project_name",  
        suggested_mappings: ["项目名称"],
    },
];

export const columns_troubleshoots = [
    // 序号,组织单位,分序号,项目名称,施工标段,工点名称,问题描述,问题原因,整改措施,整改时限,责任部门,整改责任人,整改进展,销号时间,处罚情况,问题类型
    {
        name: "序号",
        key: "seq",  
        suggested_mappings: ["序号"],
    },
    {
        name: "组织单位",
        key: "org_unit",  
        suggested_mappings: ["组织单位"],
    },
    {
        name: "分序号",
        key: "sub_seq",  
        suggested_mappings: ["分序号"],
    },
    {
        name: "项目名称",
        key: "project",  
        suggested_mappings: ["项目名称"],
    },
    {
        name: "施工标段",
        key: "section",  
        suggested_mappings: ["施工标段"],
    },
    {
        name: "工点名称",
        key: "point",  
        suggested_mappings: ["工点名称"],
    },
    {
        name: "问题描述",
        key: "problem_desc",  
        suggested_mappings: ["问题描述"],
    },
    {
        name: "问题原因",
        key: "problem_reason",  
        suggested_mappings: ["问题原因"],
    },
    {
        name: "整改措施",
        key: "improve_method",  
        suggested_mappings: ["整改措施"],
    },
    {
        name: "整改时限",
        key: "improve_time",  
        suggested_mappings: ["整改时限"],
    },
    {
        name: "责任部门",
        key: "responsible_dept",  
        suggested_mappings: ["责任部门"],
    },
    {
        name: "整改责任人",
        key: "responsible_person",  
        suggested_mappings: ["整改责任人"],
    },
    {
        name: "整改进展",
        key: "improve_progress",  
        suggested_mappings: ["整改进展"],
    },
    {
        name: "销号时间",
        key: "dismiss_time",  
        suggested_mappings: ["销号时间"],
    },
    {
        name: "处罚情况",
        key: "punishment",  
        suggested_mappings: ["处罚情况"],
    },
    {
        name: "问题类型",
        key: "problem_type",  
        suggested_mappings: ["问题类型"],
    },
];

export const columns_workDailyReport = [
    // 序号,类别,项目,单位,2024.10.18,2024.10.19,2024.10.20
    {
        name: "序号",
        key: "seq",  
        suggested_mappings: ["序号"],
    },
    {
        name: "类别",
        key: "category",  
        suggested_mappings: ["类别"],
    },
    {
        name: "项目",
        key: "project",  
        suggested_mappings: ["项目"],
    }, 
    {
        name: "单位",
        key: "unit",  
        suggested_mappings: ["单位"],
    },
    {
        name: "2024.10.18",
        key: "date1",  
        suggested_mappings: ["2024.10.18"],
    },
    {
        name: "2024.10.19",
        key: "date2",  
        suggested_mappings: ["2024.10.19"],
    },
    {
        name: "2024.10.20",
        key: "date3",  
        suggested_mappings: ["2024.10.20"],
    },
    {
        name: "2024.10.21",
        key: "date4",  
        suggested_mappings: ["2024.10.21"],
    },
    {
        name: "2024.10.22",
        key: "date5",  
        suggested_mappings: ["2024.10.22"],
    }, 
    {
        name: "2024.10.23",
        key: "date6",  
        suggested_mappings: ["2024.10.23"],
    },
    {
        name: "2024.10.24",
        key: "date7",  
        suggested_mappings: ["2024.10.24"],
    },
]