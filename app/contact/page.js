"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Customizable direct contact placeholder constants
const CONTACT_DETAILS = {
  email: "hello@yourdomain.com",
  phone: "+234 XXX XXX XXXX",
  location: "Lagos, Nigeria",
  instagram: "@yourhandle",
  instagramUrl: "https://instagram.com",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    services: [],
    vision: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypeOptions = [
    "Wedding",
    "Traditional Wedding",
    "Engagement",
    "Birthday Celebration",
    "Corporate Event",
    "Private Event",
    "Other",
  ];

  const serviceOptions = [
    "Floral Design",
    "Wedding Décor",
    "Venue Styling",
    "Event Styling",
    "Floral Installations",
    "Full Event Design",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief interaction delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
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
        {/* 1. HERO SECTION */}
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

        {/* 2. CONSULTATION INTRODUCTION */}
        <section className="py-12 md:py-16 px-6 sm:px-10 lg:px-16 bg-white border-y border-[#EAE5DF]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline">
            <div className="md:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                The First Step Toward Your Vision
              </h2>
            </div>
            <div className="md:col-span-8 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed space-y-4">
              <p>
                Every celebration we design is deeply personal. We limit the number
                of commissions we accept each season to ensure uncompromising
                attention to detail, thoughtful creative collaboration, and high-touch
                service from concept to execution.
              </p>
              <p>
                Please share the details of your upcoming event below, and our team
                will respond promptly to schedule an initial discovery conversation.
              </p>
            </div>
          </div>
        </section>

        {/* 3 & 4. CONTACT FORM + DIRECT CONTACT INFORMATION */}
        <section id="enquiry-form" className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 border border-[#EAE5DF]">
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] mb-2">
                  Commission Enquiry
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light">
                  Fields marked with an asterisk (<span className="text-[#5F327B]">*</span>) are required.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#5F327B]/10 text-[#5F327B] flex items-center justify-center mx-auto text-xl font-serif">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl font-light text-[#1A1A1A]">
                    Enquiry Received
                  </h4>
                  <p className="text-sm sm:text-base text-[#4A4A4A] max-w-md mx-auto font-light">
                    Thank you for reaching out to Havilah Florals & Decor. We have received your event details and will review them carefully.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-[0.2em] text-[#5F327B] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Full Name <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Amina Bello"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Email Address <span className="text-[#5F327B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. amina@example.com"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Phone Number <span className="text-[#5F327B]">*</span>
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

                    <div className="space-y-2">
                      <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Event Type <span className="text-[#5F327B]">*</span>
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors cursor-pointer"
                      >
                        {eventTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="e.g. 250 - 300"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="eventLocation" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Event Location / Venue
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Victoria Island, Lagos or Destination"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Services Required (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
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
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="vision" className="block text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      id="vision"
                      name="vision"
                      rows={5}
                      value={formData.vision}
                      onChange={handleInputChange}
                      placeholder="Describe the mood, color palette, architectural details, or personal touches you imagine for your event..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE5DF] focus:border-[#5F327B] focus:bg-white text-sm text-[#1A1A1A] outline-none transition-colors resize-y min-h-[120px]"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-[#5F327B] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#4C2763] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact Info Column */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-8 border border-[#EAE5DF] space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5F327B] font-semibold block mb-2">
                    Direct Contact
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
                    Studio & Inquiries
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
                    Consultations are held by appointment only in our Lagos studio or virtually for international clients.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. WHAT HAPPENS NEXT */}
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
                  Consultation & Discovery
                </h3>
                <p className="text-sm text-[#6A6A6A] font-light leading-relaxed">
                  We invite you to a private studio or virtual session to explore your creative direction in depth.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#5F327B]/40 font-light block">
                  03
                </span>
                <h3 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Design & Planning
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

        {/* 6. FINAL EDITORIAL CTA */}
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