import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    name: yup
    .string(),

    surname: yup
    .string(),

    email: yup
    .string()
    .email('Lütfen geçerli bir eposta adresi giriniz.')
    .required('Eposta alanı zorunludur.'),

    username: yup
    .string()
    .required('Kullanıcı adı alanı zorunludur.')
    .min(3, 'Kullanıcı adı en az 3 karakter olmalıdır.')
    .max(15, 'Kullanıcı adı en fazla 15 karakter olmalıdır.'),    
        
    password: yup
    .string()
    .typeError('Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin')
    .min(8, 'Şifreniz 8 karakterden az olamaz')
    .max(32, 'Şifreniz 32 karakterden fazla olamaz')
    .required('Şifre alanı zorunludur.'),

    confirmPassword: yup
    .string()
    .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Şifreler eşleşmiyor."
        )
    })
});