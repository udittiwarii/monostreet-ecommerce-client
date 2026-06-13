import React from "react";

import { motion } from "framer-motion";

import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import NewArrivals from "../../components/home/NewArrivals";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import PromoBanner from "../../components/home/PromoBanner";
import Newsletter from "../../components/home/Newsletter";

import { fadeUp } from "../../animations/fadeAnimation";
import { pageTransition } from "../../animations/pageTransition";

const HomePage = () => {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"

      className="pt-20"
    >

      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Categories />
      </motion.div>

      {/* NEW ARRIVALS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <NewArrivals />
      </motion.div>

      {/* FEATURED */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FeaturedProducts />
      </motion.div>

      {/* PROMO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PromoBanner />
      </motion.div>

      {/* NEWSLETTER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Newsletter />
      </motion.div>

    </motion.section>
  );
};

export default HomePage;