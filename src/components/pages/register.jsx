import AuthLayout from "../Layouts/AuthLayouts";
import FormRegister from "../Fragments/FormRegister";
const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister></FormRegister>
        </AuthLayout>
    );
};
export default RegisterPage;