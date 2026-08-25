"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONTACT_DETAILS = {
  email: "havilahflorals@gmail.com",
  phone: "+2349026810641",
  location: "Abuja, Nigeria",
  instagram: "@havilahfloralsdecor",
  instagramUrl: "https://instagram.com",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    referralSource: "",
    email: "",
    phone: "",
    celebrationType: "",
    celebrationOther: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    decorTheme: "",
    eventVision: "",
    keyElements: [],
    keyElementOther: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const celebrationOptions = [
    "Wedding",
    "Birthday",
    "Dinner",
    "Bridal shower",
    "Other",
  ];

  const keyElementOptions = [
    "Large florals",
    "Minimal lush florals",
    "Ceiling drapery",
    "Dancefloor installations",
    "Ambience Lighting",
    "Table styling",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleElementToggle = (element) => {
    setFormData((prev) => {
      const exists = prev.keyElements.includes(element);
      if (exists) {
        return {
          ...prev,
          keyElements: prev.keyElements.filter((item) => item !== element),
        };
      }
      if (prev.keyElements.length >= 3) {
        return prev;
      }
      return {
        ...prev,
        keyElements: [...prev.keyElements, element],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      window.location.href = "https://calendly.com/havilahflorals";
    }, 1000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#5F327B] selection:text-white">
      <Navbar />

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5F327B] font-semibold block mb-4">
              Private Consultation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
              Let's Create Something <br className="hidden sm:block" />
              <span className="italic font-normal text-[#5F327B]">
                Unforgettable.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] font-light leading-relaxed max-w-2xl">
              Havilah creates bespoke floral and décor experiences for weddings,
              grand celebrations, and intimate moments across Nigeria and beyond.
            </p>
            <div className="w-16 h-[1px] bg-[#5F327B]/30 mt-8 sm:mt-12"></div>
          </div>
        </section>

        {/* CONSULTATION INTRODUCTION */}
        <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 bg-white border-y border-[#EAE5DF]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline">
            <div className="md:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                Hello! Welcome to Havilah Florals Decor!
              </h2>
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed space-y-4">
              <p>
                We are absolutely thrilled to be part of this journey with you! Graciously take a few minutes to fill this form so we can better understand your needs and ensure our consultation call is tailored to you! Take your time, every answer matters.
              </p>
              <p className="text-sm font-medium text-[#5F327B]">
                Once submitted, we'll review your details and reach out to confirm your consultation within 24 hours. Thank You!
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM + DIRECT CONTACT */}
        <section id="enquiry-form" className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 border border-[#EAE5DF]">
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] mb-2">
                  Consultation Enquiry Form
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light">
                  All fields marked with an asterisk (<span className="text-[#5F327B]">*</span>) are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                    Your Full Name (If it’s for a wedding please respond as eg. Christine Okafor &amp; Frank Akande) <span className="text-[#5F327B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Christine Okafor & Frank Akande"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                  />
                </div>

                {/* 2. How did you hear about us */}
                <div className="space-y-2">
                  <label htmlFor="referralSource" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                    How did you hear about us? <span className="text-[#5F327B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="referralSource"
                    name="referralSource"
                    required
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    placeholder="e.g. Instagram, Friend recommendation, Google Search"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                  />
                </div>

                {/* 3 & 4. Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Your Email Address (suitable for communication) <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. christine@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Your Phone Number (WhatsApp Enabled) <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +234 800 000 0000"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 5. What are we celebrating? */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                    What are we celebrating? <span className="text-[#5F327B]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {celebrationOptions.map((type) => {
                      const isSelected = formData.celebrationType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData((prev) => ({ ...prev, celebrationType: type }))}
                          className={`px-4 py-3 text-left border text-sm transition-all ${
                            isSelected
                              ? "border-[#5F327B] bg-[#5F327B]/5 text-[#5F327B] font-medium"
                              : "border-[#EAE5DF] bg-[#FAF8F5] text-[#4A4A4A] hover:border-[#CCCCCC]"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-[#5F327B] bg-[#5F327B]" : "border-[#B0B0B0]"
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            {type}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {formData.celebrationType === "Other" && (
                    <input
                      type="text"
                      name="celebrationOther"
                      required
                      value={formData.celebrationOther}
                      onChange={handleInputChange}
                      placeholder="Please specify what you are celebrating *"
                      className="w-full mt-2 px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  )}
                  <input type="hidden" name="celebrationTypeHidden" required value={formData.celebrationType} />
                </div>

                {/* 6 & 7. Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Event Date? <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="eventLocation" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Event Venue and Location? <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      required
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                     
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 8 & 9. Guest Count & Theme */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Estimated number of Guests? (eg. 1500) <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="guestCount"
                      name="guestCount"
                      required
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="e.g. 1500"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="decorTheme" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      What is your decor theme or style? (eg. Rustic, Minimalist, Modern, Arabian) <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="decorTheme"
                      name="decorTheme"
                      required
                      value={formData.decorTheme}
                      onChange={handleInputChange}
                      placeholder="e.g. Modern Minimalist, Rustic"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 10. Event Vision */}
                <div className="space-y-2">
                  <label htmlFor="eventVision" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                    Tell us a bit about your event vision. How do you want to feel as you enter your venue? <span className="text-[#5F327B]">*</span>
                  </label>
                  <textarea
                    id="eventVision"
                    name="eventVision"
                    required
                    rows={4}
                    value={formData.eventVision}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts, feelings, and overall aesthetic goals for the day..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors resize-y min-h-[120px]"
                  ></textarea>
                </div>

                {/* 11. Key Decor Elements (Top 3) */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      What are the Key Decor Elements most important to you? (Select your Top 3) <span className="text-[#5F327B]">*</span>
                    </label>
                    <span className="text-xs text-[#5F327B] font-medium">
                      {formData.keyElements.length}/3 Selected
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {keyElementOptions.map((element) => {
                      const isSelected = formData.keyElements.includes(element);
                      return (
                        <button
                          type="button"
                          key={element}
                          onClick={() => handleElementToggle(element)}
                          className={`flex items-center gap-3 px-4 py-3 text-left border text-sm transition-all ${
                            isSelected
                              ? "border-[#5F327B] bg-[#5F327B]/5 text-[#5F327B] font-medium"
                              : "border-[#EAE5DF] bg-[#FAF8F5] text-[#4A4A4A] hover:border-[#CCCCCC]"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 border flex items-center justify-center text-xs transition-colors ${
                              isSelected
                                ? "border-[#5F327B] bg-[#5F327B] text-white"
                                : "border-[#B0B0B0] bg-white"
                            }`}
                          >
                            {isSelected && "✓"}
                          </span>
                          {element}
                        </button>
                      );
                    })}
                  </div>

                  {formData.keyElements.includes("Other") && (
                    <input
                      type="text"
                      name="keyElementOther"
                      required
                      value={formData.keyElementOther}
                      onChange={handleInputChange}
                      placeholder="Please specify other decor element *"
                      className="w-full mt-2 px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  )}
                  <input
                    type="hidden"
                    name="keyElementsValidation"
                    required
                    value={formData.keyElements.length > 0 ? "valid" : ""}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#5F327B] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#4C2763] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Redirecting to Schedule..." : "Submit & Schedule Consultation"}
                  </button>
                </div>
              </form>
            </div>

            {/* Direct Contact Info Column */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-8 border border-[#EAE5DF] space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5F327B] font-semibold block mb-2">
                    Direct Contact
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
                    Studio &amp; Inquiries
                  </h3>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A8A8A] block">
                      Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A8A8A] block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium"
                    >
                      {CONTACT_DETAILS.phone}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A8A8A] block">
                      Location
                    </span>
                    <p className="text-[#1A1A1A]">
                      {CONTACT_DETAILS.location}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A8A8A] block">
                      Social
                    </span>
                    <a
                      href={CONTACT_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium inline-block"
                    >
                      Instagram: {CONTACT_DETAILS.instagram}
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EAE5DF]">
                  <p className="text-xs text-[#6A6A6A] leading-relaxed font-light">
                    Consultations are held by appointment only in our studio or virtually for international clients.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="py-16 md:py-24 bg-white border-t border-[#EAE5DF]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="mb-12 md:mb-16 max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#5F327B] font-semibold block mb-3">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">
                What Happens Next
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#5F327B]/40 font-light block">
                  01
                </span>
                <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Tell Us Your Vision
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light leading-relaxed">
                  Submit your enquiry form with initial event details, preferences, and key dates.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#5F327B]/40 font-light block">
                  02
                </span>
                <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Book Consultation
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light leading-relaxed">
                  You will be automatically redirected to Calendly to select a suitable time slot.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#5F327B]/40 font-light block">
                  03
                </span>
                <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Design &amp; Planning
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light leading-relaxed">
                  Our team curates custom floral concepts, spatial layouts, and detailed mood boards tailored to you.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#5F327B]/40 font-light block">
                  04
                </span>
                <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Bringing It To Life
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light leading-relaxed">
                  On your event day, we execute every detail with precision, elegance, and calm expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL EDITORIAL CTA */}
        <section className="bg-[#5F327B] text-white py-20 md:py-28 px-6 sm:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Your Celebration Deserves To Be Thoughtfully Designed.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-light max-w-xl mx-auto leading-relaxed">
              Let us transform your venue into an immersive botanical story.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="inline-block px-10 py-4 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white transition-colors"
              >
                Begin Your Enquiry
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}