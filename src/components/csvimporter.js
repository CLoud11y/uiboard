import { CSVImporter } from "csv-import-react";
import { useState, useRef } from "react";
import { Button, Flex, notification } from "antd";
import { SmileOutlined, SyncOutlined, FrownOutlined } from '@ant-design/icons';
import {columns_worklist, columns_attendance, columns_resource, columns_troubleshoots, columns_workDailyReport} from "./columns.js"
import { Post } from "../utils/request.js";

const boxStyle = {
    width: '100%',
    height: 120,
    borderRadius: 6,
    border: '0px solid #40a9ff',
};

const customTranslations = {
    CHN: {
      Upload: "上传",
      "Browse files": "浏览文件",
      "Drop your file here": "将文件拖到此处",
      "or": "或",
      "Select Header": "选择表头",
      "Map Columns": "映射列",
      "Expected Column": "预期收到的列",
      "Required": "是否必需",
      "Download Template": "下载模板",
      "Select Header Row": "请选择表头",
      "Select the row which contains the column headers": "请选择包含表格头部的行",
      "Cancel": "取消",
      "Continue": "下一步",
      "Submit": "提交",
      "Back": "上一步",
      "Your File Column": "列名",
      "Your Sample Data": "数据",
      "Destination Column": "对应列名",
      "Include": "是否包含",
    },
};

function MyCSVImporter() {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState([]);
  const tableName = useRef("");
  const [api, contextHolder] = notification.useNotification();
  const key = "upload-notification";

  function handleOnComplete(data) {
    api.open({
      key,
      message: "正在上传文件",
      description: "请耐心等待...",
      icon: (
        <SyncOutlined spin/>
      ),
    })
    console.log("data: ", data);
    let sendData = {};
    sendData.table_name = tableName.current;
    sendData.num_rows = data.num_rows;
    sendData.num_columns = data.num_columns;
    sendData.rows = [];
    for (let i = 0; i < data.num_rows; i++) {
      const row = data.rows[i].values;
      // todo: 某张表里的时间被转成距离1900的天数了 要转回来
      if (tableName.current === "troubleshoots") {
        row.improve_time = formatDate(row.improve_time, "/")
        row.dismiss_time = formatDate(row.dismiss_time, "/")
      }
      // 将 row 的所有属性值转换为 string, 除了resource表的quantity属性
      const convertedRow = Object.keys(row).reduce((acc, key) => {
        if (sendData.table_name === "resource" && key === "quantity") {
          acc[key] = row[key];
        } else {
          acc[key] = String(row[key]);  // 将每个属性值转换为 string
        }
        return acc;
      }, {});

      // 添加转换后的行到 sendData.rows 中
      sendData.rows.push(convertedRow);
    }
    console.log("sendData: ", sendData);
    // 发请求
    let url = "/api/upload/" + tableName.current
    Post(url, sendData)
      .then(res => {
          console.log(res)
          api.open({
            key,
            message: "上传成功！",
            description: "",
            icon: (
              <SmileOutlined
                style={{
                  color: '#108ee9',
                }}
              />
            ),
          })
      })
      .catch(err => {
          console.log("err: ", err)
          api.open({
            key,
            message: "上传失败！",
            description: err.message,
            duration: 0,
            icon: (
              <FrownOutlined
                style={{
                  color: '#ff3200',
                }}
              />
            ),
          })
      });
    setIsOpen(false);
    setColumns([]);
  }
  function handleOnClose() {
    setIsOpen(false);
    setColumns([]);
  }

  function formatDate (numb, format) {
    let time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setYear(time.getFullYear() - 70)
    let year = time.getFullYear() + ''
    let month = time.getMonth() + 1 + ''
    let date = time.getDate() + ''
    if(format && format.length === 1) {
      return year + format + month + format + date
    }
    return year+(month < 10 ? '0' + month : month)+(date < 10 ? '0' + date : date)
  }

  function handleClick(id) {
    let clms = []
    let selectTableName = ""
    // 序号,事项,责任人,节点时间要求,备注
    switch (id) {
      case 1:
        clms = columns_worklist
        selectTableName = "worklist"
        break;
      case 2:
        clms = columns_attendance
        selectTableName = "attendance"
        break;
      case 3:
        clms = columns_troubleshoots
        selectTableName = "troubleshoots"
        break;
      case 4:
        clms = columns_workDailyReport
        selectTableName = "workDailyReport"
        break;
      case 5:
        clms = columns_resource
        selectTableName = "resource"
        break;
      default:
        console.log("colums are empty")
        break;
    }
    setColumns(clms)
    tableName.current = selectTableName
    setIsOpen(true)
  }

  return (
    <>
      <Flex style={boxStyle} justify={"center"} align={"center"} gap={60}>
        <Button type="primary" size = "large" onClick={() => handleClick(1)}>工作清单</Button>
        <Button type="primary" size = "large" onClick={() => handleClick(2)}>考勤报表</Button>
        <Button type="primary" size = "large" onClick={() => handleClick(3)}>治理排查</Button>
        <Button type="primary" size = "large" onClick={() => handleClick(4)}>施工日报</Button>
        <Button type="primary" size = "large" onClick={() => handleClick(5)}>物资限定</Button>
      </Flex>
      <CSVImporter
        language="CHN"
        customTranslations={customTranslations}
        modalIsOpen={isOpen}
        modalOnCloseTriggered={handleOnClose}
        darkMode={false}
        onComplete={handleOnComplete}
        template={{columns: columns}}
      />
      {contextHolder}
    </>
  );
}
export default MyCSVImporter;