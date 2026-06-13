import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FloatingAIButton = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className="
        fixed
        bottom-6
        right-6
        z-[999]
        h-16
        w-16
        rounded-full
        bg-black
        text-white
        shadow-2xl
        flex
        items-center
        justify-center
        group
        overflow-hidden
      "
        >
            <div
                className="
          absolute
          inset-0
          bg-gradient-to-r
          from-zinc-800
          via-zinc-700
          to-black
        "
            />

            <motion.div
                animate={{
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                className="relative z-10"
            >
                <Bot size={28} />
            </motion.div>

            <div
                className="
          absolute
          -top-1
          -right-1
          h-5
          w-5
          rounded-full
          bg-emerald-500
          flex
          items-center
          justify-center
        "
            >
                <Sparkles size={10} />
            </div>
        </motion.button>
    );
};

export default FloatingAIButton;