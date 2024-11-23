const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, color= "bg-black"} = props;
    return(
        <button
            className={`h-10 px-6 font-semibold rounded-md ${color} text-white`}
            type="submit"
        >
            {children}
        </button>
    );
};

export default Button;