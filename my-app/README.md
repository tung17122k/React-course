# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Create proj: - npm vite ... - proj name: . (thư mục hiện tại) - package name: react - .... - select frame work: react - select variant: react

- install tailwind css, styled-component , formik, react hook form, axios, Yup
  - Yup: npm install @hookform/resolvers yup (react hook form)
  - formik: npm install yup --save
- Form
  - https://formik.org/docs/tutorial: use Formik
  - React Hook Form: https://react-hook-form.com/docs/usecontroller : use React Hook Form
  - Yup: https://www.npmjs.com/package/yup => validation
    => formik re-render nhiều hơn react hook form

=> tổng quan về form register: - React Hook Form: useController, useWatch => field: {name : ... , value: ..., f()....}
--------------------------------------------------control, submitHandle => value : {field.name: value, ........}
=> FORM TOÀN TẬP : XÂY DỰNG GIAO DIỆN => SỬ DỤNG useForm => VIẾT VALIDATION ( SỬ DỤNG YUP) => TRUYỀN VÀO useForm để gọi validate
