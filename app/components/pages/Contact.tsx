"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Slide } from "../../animation/Slide";
import Social from "../shared/Social";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const form = event.currentTarget;

    // We use the Official SDK to guarantee reliability
    // Ensure you import emailjs from '@emailjs/browser'; at the top!
    emailjs.sendForm(
      "service_jp6ttpq",
      "template_kk4t1j6",
      form,
      "FWFs5ToGk8fXLCc91"
    )
    .then(() => {
      setSubmitStatus("success");
      form.reset(); // Properly clears text only upon success
    })
    .catch((error) => {
      console.error("EmailJS SDK Error:", error);
      setSubmitStatus("error");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="mt-32 mb-16 flex flex-col items-center" id="contact">
      <Slide delay={0.16}>
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight text-center">
            Let’s Connect & Collaborate
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-center">
            Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
          </p>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="flex justify-center w-full">
          <Social type="social" />
        </div>
      </Slide>

      <Slide delay={0.2}>
        <form 
          onSubmit={onSubmit}
          className="mt-10 max-w-[60rem] w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-medium text-zinc-900 dark:text-zinc-100">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-primary-color dark:text-zinc-200 text-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-medium text-zinc-900 dark:text-zinc-100">
                Email/Phone
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                placeholder="Email or Phone Number"
                className="bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-primary-color dark:text-zinc-200 text-zinc-800"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-y-2">
            <label htmlFor="subject" className="font-medium text-zinc-900 dark:text-zinc-100">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Project Subject"
              className="bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-primary-color dark:text-zinc-200 text-zinc-800"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="message" className="font-medium text-zinc-900 dark:text-zinc-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What are you working on?"
              className="bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-primary-color dark:text-zinc-200 text-zinc-800 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-md font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 disabled:opacity-50 transition-opacity duration-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {submitStatus === "success" && (
            <p className="text-green-600 dark:text-green-400 text-center text-sm font-medium">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </Slide>
    </section>
  );
}
