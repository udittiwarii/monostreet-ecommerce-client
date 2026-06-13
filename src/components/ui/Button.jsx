const Button = ({
  children,
  className = "",
  variant = "primary",
  type = "button",
  link = "#",

}) => {

  const variants = {

    primary: `
      bg-black
      text-white
      border
      border-black
      hover:bg-white
      hover:text-black
    `,

    outline: `
      bg-white
      text-black
      border
      border-black
      hover:bg-black
      hover:text-white
    `,

    light: `
      bg-white
      text-black
      border
      border-white
      hover:bg-black
      hover:text-white
    `,
  };

  return (
    <button
      href={link}
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3

        px-6
        py-3

        text-sm
        sm:text-base

        transition-all
        duration-300

        cursor-pointer

        ${variants[variant]}

        ${className}
      `}
      style={{
        fontFamily: "Montserrat",
      }}
    >
      {children}
    </button>
  );
};

export default Button;