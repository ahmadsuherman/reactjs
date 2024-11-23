import AuthLayout from "../Layouts/AuthLayouts";
import FormLogin from "../Fragments/FormLogin";
const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin></FormLogin>
        </AuthLayout>
    );
};
export default LoginPage;