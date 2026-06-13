import { motion } from "framer-motion";

const text = "MONOSTREET".split("");

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="
        fixed
        inset-0
        z-[999]
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      {/* TOP PANEL */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 1.8,
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          top-0
          left-0
          w-full
          h-1/2
          bg-black
          z-10
        "
      />

      {/* BOTTOM PANEL */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          delay: 1.8,
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-1/2
          bg-black
          z-10
        "
      />

      {/* BRAND */}
      <div
        className="
          flex
          items-center
          overflow-hidden
          z-20
        "
      >

        {text.map((letter, index) => (

          <motion.span
            key={index}

            initial={{
              y: 120,
              opacity: 0,
            }}

            animate={{
              y: 0,
              opacity: 1,
            }}

            transition={{
              delay: index * 0.08,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              text-white
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              tracking-[8px]
              sm:tracking-[14px]
              uppercase
            "
            style={{
              fontFamily: "Montserrat",
              fontWeight:
                index < 4 ? 800 : 300,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* SMALL LOADING TEXT */}
      <motion.p
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 0.5,
        }}

        transition={{
          delay: 1,
          duration: 1,
        }}

        className="
          absolute
          bottom-10
          text-white/60
          uppercase
          tracking-[4px]
          text-[10px]
        "
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Loading Experience
      </motion.p>
    </motion.div>
  );
};

export default Loader;