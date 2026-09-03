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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#5F327B] selection:text-white flex flex-col">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="pt-20 lg:pt-24 flex-grow">
        {/* =========================================================================
            SECTION — CONTACT HERO
            ========================================================================= */}
        <section className="relative py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl space-y-3">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block">
                Private Consultation
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A]">
                Let's Create Something{" "}
                <span className="italic font-light text-[#5F327B]">
                  Unforgettable.
                </span>
              </h1>
              <p>
                  We are absolutely thrilled to be part of this journey with you. Graciously take a few minutes to fill out this form so we can better understand your vision and ensure our consultation call is tailored specifically to you.
                </p>
                <p className="text-xs font-medium text-[#5F327B]">
                  Once submitted, we'll review your details and confirm your consultation within 24 hours. Thank you!
                </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — CONSULTATION INTRO
            ========================================================================= */}
        {/* <section className="py-6 sm:py-8 bg-white border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
              <div className="md:col-span-5">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#1A1A1A] leading-snug">
                  Welcome to Havilah Florals Decor
                </h2>
              </div>
              <div className="md:col-span-7 text-xs sm:text-sm text-[#5C555B] font-light leading-relaxed space-y-2">
                <p>
                  We are absolutely thrilled to be part of this journey with you. Graciously take a few minutes to fill out this form so we can better understand your vision and ensure our consultation call is tailored specifically to you.
                </p>
                <p className="text-xs font-medium text-[#5F327B]">
                  Once submitted, we'll review your details and confirm your consultation within 24 hours. Thank you!
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* =========================================================================
            SECTION — FORM & DIRECT CONTACT
            ========================================================================= */}
        <section id="enquiry-form" className="py-6 sm:py-8 md:py-10 bg-[#FAF8F5] border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              
              {/* FORM COLUMN */}
              <div className="lg:col-span-8 bg-white p-5 sm:p-8 md:p-10 border border-[#E6DFDA] rounded-sm">
                <div className="mb-6 pb-4 border-b border-[#E6DFDA]">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal mb-1">
                    Consultation Enquiry Form
                  </h3>
                  <p className="text-xs text-[#5C555B] font-light">
                    Fields marked with (<span className="text-[#5F327B] font-semibold">*</span>) are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                      Your Full Name (For weddings: e.g. Christine Okafor &amp; Frank Akande) <span className="text-[#5F327B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Christine Okafor & Frank Akande"
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                    />
                  </div>

                  {/* Referral Source */}
                  <div className="space-y-1.5">
                    <label htmlFor="referralSource" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
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
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Email Address <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. christine@example.com"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Phone Number (WhatsApp Enabled) <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +234 800 000 0000"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Celebration Type */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                      What are we celebrating? <span className="text-[#5F327B]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {celebrationOptions.map((type) => {
                        const isSelected = formData.celebrationType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData((prev) => ({ ...prev, celebrationType: type }))}
                            className={`px-3.5 py-2.5 text-left border text-xs transition-all rounded-sm ${
                              isSelected
                                ? "border-[#5F327B] bg-[#5F327B]/5 text-[#5F327B] font-semibold"
                                : "border-[#E6DFDA] bg-[#FAF8F5] text-[#5C555B] hover:border-[#5F327B]/40"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                                isSelected ? "border-[#5F327B] bg-[#5F327B]" : "border-[#C0B8B0]"
                              }`}>
                                {isSelected && <span className="w-1 h-1 rounded-full bg-white" />}
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
                        className="w-full mt-2 px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    )}
                    <input type="hidden" name="celebrationTypeHidden" required value={formData.celebrationType} />
                  </div>

                  {/* Date & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="eventDate" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Event Date <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="eventLocation" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Event Venue &amp; Location <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        required
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. International Conference Centre, Abuja"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Guest Count & Theme */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="guestCount" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Estimated Guest Count <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="guestCount"
                        name="guestCount"
                        required
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="e.g. 500"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="decorTheme" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Decor Theme or Style <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="decorTheme"
                        name="decorTheme"
                        required
                        value={formData.decorTheme}
                        onChange={handleInputChange}
                        placeholder="e.g. Modern Minimalist, Rustic Elegance"
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Event Vision */}
                  <div className="space-y-1.5">
                    <label htmlFor="eventVision" className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                      Tell us about your event vision <span className="text-[#5F327B]">*</span>
                    </label>
                    <textarea
                      id="eventVision"
                      name="eventVision"
                      required
                      rows={3}
                      value={formData.eventVision}
                      onChange={handleInputChange}
                      placeholder="Share your aesthetic goals, mood, and how you want to feel entering the space..."
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm resize-y min-h-[90px]"
                    ></textarea>
                  </div>

                  {/* Key Decor Elements (Top 3) */}
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between items-center">
                      <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
                        Key Decor Elements (Select Top 3) <span className="text-[#5F327B]">*</span>
                      </label>
                      <span className="text-[10px] uppercase tracking-wider text-[#5F327B] font-semibold">
                        {formData.keyElements.length}/3 Selected
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {keyElementOptions.map((element) => {
                        const isSelected = formData.keyElements.includes(element);
                        return (
                          <button
                            type="button"
                            key={element}
                            onClick={() => handleElementToggle(element)}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 text-left border text-xs transition-all rounded-sm ${
                              isSelected
                                ? "border-[#5F327B] bg-[#5F327B]/5 text-[#5F327B] font-semibold"
                                : "border-[#E6DFDA] bg-[#FAF8F5] text-[#5C555B] hover:border-[#5F327B]/40"
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 border flex items-center justify-center text-[9px] font-bold transition-all rounded-xs ${
                                isSelected
                                  ? "border-[#5F327B] bg-[#5F327B] text-white"
                                  : "border-[#C0B8B0] bg-white"
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
                        className="w-full mt-2 px-4 py-2.5 bg-[#FAF8F5] border border-[#E6DFDA] focus:border-[#5F327B] focus:bg-white text-xs sm:text-sm text-[#1A1A1A] outline-none transition-all rounded-sm"
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
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#5F327B] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 hover:bg-[#FAF8F5] hover:text-[#5F327B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]"
                    >
                      {isSubmitting ? "Redirecting to Schedule..." : "Submit & Schedule Consultation"}
                    </button>
                  </div>
                </form>
              </div>

              {/* DIRECT CONTACT SIDEBAR */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 sm:p-8 border border-[#E6DFDA] rounded-sm space-y-6">
                  <div className="pb-3 border-b border-[#E6DFDA]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#5F327B] font-semibold block mb-1">
                      Direct Contact
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A]">
                      Inquiries
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] block font-medium">
                        Email
                      </span>
                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium text-sm"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] block font-medium">
                        Telephone
                      </span>
                      <a
                        href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`}
                        className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium text-sm"
                      >
                        {CONTACT_DETAILS.phone}
                      </a>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] block font-medium">
                        Location
                      </span>
                      <p className="text-[#1A1A1A] font-medium text-sm">
                        {CONTACT_DETAILS.location}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A8A8A] block font-medium">
                        Social Media
                      </span>
                      <a
                        href={CONTACT_DETAILS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A1A1A] hover:text-[#5F327B] transition-colors font-medium text-sm inline-block"
                      >
                        {CONTACT_DETAILS.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6DFDA]">
                    <p className="text-xs text-[#5C555B] leading-relaxed font-light">
                      Consultations are held by appointment only in our studio or virtually for international clients.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — PROCESS STEPS
            ========================================================================= */}
        <section className="py-6 sm:py-8 md:py-10 bg-white border-b border-[#E6DFDA]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="mb-6 max-w-xl">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#5F327B] block mb-1">
                Our Process
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
                What Happens Next
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#E6DFDA] rounded-sm">
                <h3 className="font-serif text-lg text-[#1A1A1A]">
                  Tell Us Your Vision
                </h3>
                <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                  Submit your enquiry form with initial event details, preferences, and key dates.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#E6DFDA] rounded-sm">
                <h3 className="font-serif text-lg text-[#1A1A1A]">
                  Book Consultation
                </h3>
                <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                  You will be automatically redirected to Calendly to select a suitable time slot.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#E6DFDA] rounded-sm">
                <h3 className="font-serif text-lg text-[#1A1A1A]">
                  Design &amp; Planning
                </h3>
                <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                  Our team curates custom floral concepts, spatial layouts, and detailed mood boards tailored to you.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#E6DFDA] rounded-sm">
                <h3 className="font-serif text-lg text-[#1A1A1A]">
                  Bringing It To Life
                </h3>
                <p className="text-xs text-[#5C555B] font-light leading-relaxed">
                  On your event day, we execute every detail with precision, elegance, and calm expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION — CLOSING INVITATION CTA
            ========================================================================= */}
        <section className="relative py-8 sm:py-12 bg-[#5F327B] text-[#FAF8F5] overflow-hidden">
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" 
          />

          <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/70 block mb-2">
              Let&apos;s Create Something Beautiful
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#FAF8F5] max-w-3xl mx-auto mb-3">
              Your celebration deserves to be <br className="hidden sm:inline" />
              <span className="italic font-light text-[#FAF8F5]/90">
                thoughtfully designed.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              Let us transform your venue into an immersive botanical story.
            </p>

            <div>
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#5F327B] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5F327B]"
              >
                <span>Begin Your Enquiry</span>
                <span
                  aria-hidden="true"
                  className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-base"
                >
                  →
                </span>
              </button>
            </div>

          </div>
        </section>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}