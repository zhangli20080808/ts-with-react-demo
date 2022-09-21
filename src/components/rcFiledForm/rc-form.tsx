/**
 * 1. 基础结构
 * 2. Field处理、实现双向数据绑定
 * 3. 状态管理、传递
 * 4. 校验
 */
 import React from "react";
 import FiledContent from "./field-content";
 import useForm from "./useForm";
 
 const Form2 = ({ children }) => {
   let [formInstance] = useForm();
   return (
     <form action="">
       <FiledContent.Provider value={formInstance}>{children}</FiledContent.Provider>
     </form>
   );
 };
 export default Form2