import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Gửi dữ liệu đến server hoặc xử lý logic tại đây
    console.log("Dữ liệu form hợp lệ:", data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Trường Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email là bắt buộc",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Định dạng email không hợp lệ"
            }
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      {/* Trường Mật khẩu */}
      <div>
        <label>Mật khẩu</label>
        <input
          type="password"
          {...register("password", {
            required: "Mật khẩu là bắt buộc",
            minLength: {
              value: 6,
              message: "Mật khẩu phải có ít nhất 6 ký tự"
            }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default RegistrationForm;
