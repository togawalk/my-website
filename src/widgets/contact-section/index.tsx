"use client";
import { ClipboardCopy } from "@/components/clipboard-copy";
import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { config } from "@/shared/config";

export const ContactSection = () => {
  return (
    <Section name="Contact">
      <div className="font-medium text-foreground-light text-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: config.animation.TRANSITION_DURATION }}
          variants={config.animation.VARIANTS}
          className="border-border-muted border-b pb-4"
        >
          <p>Email:</p>
          <ClipboardCopy copyText="evgeny.efimenko@proton.me" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: config.animation.TRANSITION_DURATION }}
          variants={config.animation.VARIANTS}
          className="pt-4"
        >
          <p>Github:</p>
          <ClipboardCopy copyText="https://github.com/togawalk" />
        </motion.div>
      </div>
    </Section>
  );
};
