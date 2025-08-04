"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CometCard } from "../UI/comet-card";

const programs = [
  {
    id: 1,
    title: "Push Pull Legs",
    description: " تقسيم العضلات علي ثلاث ايام  ",
    image: "/push.jpg",
    link: "#",
    level: "متوسط ",
    duration: " من 3 إلى 6 أيام في الأسبوع",
  },
  {
    id: 2,
    title: "  Upper Lower Split ",
    description: " تمرين الجزء العلوي يوم ، والسفلي يوم ",
    image: "/intermediate.jpg",
    link: "#",
    level: "متوسط",
    duration: "من 4 إلى 5 أيام في الأسبوع ",
  },
  {
    id: 3,
    title: "Bro Split ",
    description: " كل عضلة ليها يوم  ",
    image: "/advanced.jpg",
    link: "#",
    level: "متقدم ",
    duration: "الاسبوع كامل ",
  },
    {
    id: 4,
    title: "Full Body Workout",
    description: "   استهداف كل عضلات الجسم    ",
    image: "/advanced.jpg",
    link: "#",
    level: "للمبتدئين",
    duration: "3 ايام في الاسبوع ",
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ProgramsSection() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/fallback-image.jpg";
  };

  return (
    <section
      id="programs"
      className="py-20 bg-gray-100 dark:bg-black"
      role="main"
      aria-labelledby="programs-title"
    >
      <div className="max-w-5xl mx-auto px-3">
        {/* العنوان */}
        <h2
          id="programs-title"
          className="text-3xl font-bold text-center text-black dark:text-white mb-4"
        >
          أنظمة التدريب
        </h2>

        {/* الوصف */}
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          اختر البرنامج المناسب لمستواك وأهدافك في بناء العضلات
        </p>

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CometCard>
                <article className="rounded-xl bg-[#1F2121] p-4 h-full flex flex-col min-h-[430px]">

                  {/* الصورة */}
                  <div className="aspect-[4/4] w-full mb-4 overflow-hidden rounded-xl">
                    <img
                      src={program.image}
                      alt={`صورة توضيحية لـ ${program.title}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>

                  {/* المستوى والمدة */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                      {program.level}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {program.duration}
                    </span>
                  </div>

                  {/* العنوان والوصف */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                    {program.description}
                  </p>

                  {/* زر التفاصيل */}
                  <Link href={program.link} aria-label={`عرض تفاصيل ${program.title}`}>
                    <button className="w-full bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                      عرض الخطة
                    </button>
                  </Link>
                </article>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
