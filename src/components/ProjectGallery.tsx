"use client";

import { motion } from "framer-motion";

// Complete list of images from public/images/New
const allImages = [
  "010139cb-e206-478e-bc7f-cc3480d0f79b.JPG",
  "029c0403-fc85-436d-bb64-89e3b3293540.JPG",
  "02dd81d0-f315-4fc7-86d0-a22174131f75.JPG",
  "02f745d9-95d5-4c64-a802-ffc9d72f33c8.JPG",
  "17345d7f-9e4b-4a09-b315-31560dc30951.JPG",
  "179a2bf7-d09f-42a6-bf39-3315c926d804.JPG",
  "19192541-e5a0-4e98-bb3a-7e66169c131e.JPG",
  "2573b8ee-096a-4c8b-8931-c075478ea017.JPG",
  "25aa93d8-198b-4dba-b843-f2d58a493bb8.JPG",
  "28b4c931-432a-4f59-8657-31b71be92bd3.JPG",
  "298d0a8f-9044-4ab5-bf06-b71d6134bd36.JPG",
  "2c9f2aab-1c75-4cce-9e8f-25df42e2534f.JPG",
  "2cd2a8cd-b9d0-41c8-86cf-cf3c40e2bb52.JPG",
  "3dc98bd6-fd29-4346-b150-7a3fcb14b409.JPG",
  "4869ac9a-6c92-4f9f-9b14-45f480c7f4a7.JPG",
  "4bc85e49-efa6-41dd-b8ed-c79ca64ac051.JPG",
  "5317461c-d569-497d-9adc-7a0fa98fbb7c.JPG",
  "573ce8ca-8bd9-45ce-b2ae-1b714e8e71c2.JPG",
  "60b1401d-ee0f-42a4-9874-e06bba956917.JPG",
  "6550f8f5-8826-44f2-adb7-1274e393f748.JPG",
  "6a580dce-e319-40bc-98c8-d859f5f963cf.JPG",
  "6a91b71a-56d0-4811-8887-a21c9e91f1df.JPG",
  "7a3a245f-1ecc-4c8d-93d5-99b3775dd2e4.JPG",
  "7f406061-7435-415e-87c1-5e70d73b3212.JPG",
  "7f71c551-7668-4de4-8c84-d83079d0d033.JPG",
  "80df039a-6b12-471f-beb6-eb5978babc4a.JPG",
  "8437e6f2-a0ed-41ba-abf0-bfd32a4a809f.JPG",
  "89456e31-43b6-47fd-bce8-187c75f594fa.JPG",
  "8b92957d-7348-4549-b20e-99f92783fa00.JPG",
  "9344cd3f-cb05-4a79-b1ec-8606c9437837.JPG",
  "992626a3-27b2-413b-862f-f86045da1e0f.JPG",
  "af306aa5-c71b-4f98-9101-524854a58cd3.JPG",
  "bab43d52-3124-4029-aa6b-db74746ba275.JPG",
  "c9b27147-09db-4a78-9544-0dc6669f21dc.JPG",
  "d8782b12-ce6d-4dd2-be3d-0592d21f8d4c.JPG",
  "db14b2e6-93cd-4eca-a34b-60aa788dc131.JPG",
  "e293a738-994a-44b8-86b5-658298645c10.JPG",
  "e6154132-296d-463f-b191-d1505b4b5f36.JPG",
  "e81aca6a-50c1-4445-ac63-943cd7a2dc5d.JPG",
  "e9de653c-875a-40df-9fcf-8ca7d86a1450.JPG",
  "efbb791c-aa5c-40f7-b74e-4838794cbb71.JPG",
  "f02575ae-ab2c-409b-b8c7-de37a9797fba.JPG",
  "f1f84d2d-05f5-461a-a233-a8178d27d7a4.JPG",
  "f6997cb5-be6d-4203-831a-ed36b4541570.JPG",
];

// Split the images into 3 rows for a dynamic scrolling gallery
const row1 = allImages.slice(0, 15);
const row2 = allImages.slice(15, 30);
const row3 = allImages.slice(30, 45);

const MarqueeRow = ({ images, reverse = false, speed = 40 }: { images: string[], reverse?: boolean, speed?: number }) => {
  return (
    <div className="flex overflow-hidden w-full group relative mb-4">
      {/* We duplicate the content to create a seamless infinite scroll effect */}
      <motion.div
        className="flex gap-4 w-max"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="relative h-64 sm:h-80 w-64 sm:w-80 rounded-2xl overflow-hidden flex-shrink-0"
          >
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500 z-10" />
            <img
              src={`/images/New/${img}`}
              alt="Project Showcase"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ProjectGallery() {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            In Action
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">
            Our Work in the Community
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            A visual journey of our impact, showcasing the joy, learning, and growth of our amazing students and community members.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 rotate-[-2deg] scale-[1.05]">
        <MarqueeRow images={row1} speed={60} />
        <MarqueeRow images={row2} reverse speed={50} />
        <MarqueeRow images={row3} speed={70} />
      </div>
    </section>
  );
}
