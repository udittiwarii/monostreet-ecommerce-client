const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div
      className={`
        mb-14
        ${center ? "text-center" : "text-left"}
      `}
    >

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className="
            uppercase
            tracking-[4px]
            text-xs
            text-gray-500
            mb-3
          "
          style={{ fontFamily: "Montserrat" }}
        >
          {subtitle}
        </p>
      )}

      {/* TITLE */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          text-black
        "
        style={{ fontFamily: "Satoshi-Bold" }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;