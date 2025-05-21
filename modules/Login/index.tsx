"use client"
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import getRequest from "../../service/getRequest";
import { Toaster, toast } from "react-hot-toast";
import GetToken from "../../hooks/getToken";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, setIsLoading] = useState(false);
  const { setToken } = GetToken();
  const allUsers = getRequest("/users");
  const router = useRouter();

  function handleLoginSubmit(data:any) {
    setIsLoading(true);
    const isUser = allUsers.some(
      (item:any) => item.username == data.username && item.password == data.password
    );
    setTimeout(() => {
      if (isUser) toast.success("Xush Kelibsiz!");
    }, 300);
    setTimeout(() => {
      if (isUser) {
        setToken(data);
        router.replace("/home");
      } else {
        toast.error("Foydalanuvchi topilmadi!");
      }
      setIsLoading(false);
    }, 1000);
  }
  
  return (
    <div className="box">
    <div className="login-box">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[330px] mx-auto">
        <div className="flex justify-center items-center mb-[25px] gap-[5px]">
          <img className="scale-[0.8] ml-[-20px]" src="/logo.png" alt="logo" />
          <span className="text-black text-[28px] font-medium">Central Library</span>
        </div>
        <Form onFinish={handleLoginSubmit} autoComplete="off" className="w-[100%]">
          <Form.Item name="username" rules={[{required: true, message: "Login kiritish majburiy"}]}>
            <Input autoComplete="off" size="large" prefix={<UserOutlined />} placeholder="Login"/>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Parol kiritish majburiy"}]}>
            <Input.Password autoComplete="off" size="large" prefix={<LockOutlined />} type="password" placeholder="Parol"/>
          </Form.Item>
          <Button loading={loading} className="w-full !bg-[#CC9600]" size="large" htmlType="submit" type="primary">Kirish</Button>
        </Form>
      </div>
    </div>
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-50px] right-[50%] scale-[0.8] rising-logo1"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] right-[50px] scale-[1.2] rising-logo2"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-50px] right-[180px] scale-[0.4] rising-logo3"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] right-[380px] scale-[0.3] rising-logo4"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] right-[300px] scale-[0.9] rising-logo5"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] right-[550px] scale-[1] rising-logo6"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] left-[550px] scale-[0.4] rising-logo7"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] left-[400px] scale-[0.5] rising-logo8"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] left-[250px] scale-[1.2] rising-logo9"
        />
    <img
        src="/logo.png"
        alt="logo"
        className="!absolute bottom-[-80px] left-[50px] scale-[0.8] rising-logo10"
        />
    </div>
  );
};

export default Login;
