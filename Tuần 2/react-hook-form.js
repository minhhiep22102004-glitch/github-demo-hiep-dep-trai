import { useForm } from 'react-hook-form';

function ExampleForm() {
  // 1. Khởi tạo form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 2. Hàm xử lý khi form hợp lệ
  const onSubmit = (data) => {
    console.log(data); // 'data' chứa giá trị của tất cả các trường input đã đăng ký
  };

  return (
    // 3. Sử dụng handleSubmit để bọc hàm onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Đăng ký input 'firstName' và áp dụng rule validation */}
      <input
        {...register('firstName', { required: 'Tên không được để trống' })}
        placeholder="Tên"
      />
      {/* Hiển thị lỗi */}
      {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}

      <input type="submit" />
    </form>
  );
}
