"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-7736871685",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "realmuhammedsinan@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Chennai, India",
  },
];

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Client-side validation
  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (formData.phone && !/^\+?[\d\s\-\(\)]{7,20}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      errors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setSubmitStatus(null);
    setStatusMessage("");
    setFieldErrors({});

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitStatus("error");
      setStatusMessage("Please fix the errors below");
      return;
    }

    // Submit form
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Need help with machine learning, computer vision, dashboards, or MLOps?<br />
                I work with individuals and teams to design practical, scalable data solutions.<br />
                Fill out the form below and let&apos;s discuss your project.
              </p>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/50">
                  <p className="text-green-500 text-sm">{statusMessage}</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 rounded-md bg-red-500/10 border border-red-500/50">
                  <p className="text-red-500 text-sm">{statusMessage}</p>
                </div>
              )}

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    disabled={isSubmitting}
                    className={fieldErrors.firstName ? "border-red-500" : ""}
                  />
                  {fieldErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    disabled={isSubmitting}
                    className={fieldErrors.lastName ? "border-red-500" : ""}
                  />
                  {fieldErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.lastName}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isSubmitting}
                    className={fieldErrors.email ? "border-red-500" : ""}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={isSubmitting}
                    className={fieldErrors.phone ? "border-red-500" : ""}
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>
              
              {/* select */}
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className={`w-full ${fieldErrors.service ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="ml">Machine Learning Solutions</SelectItem>
                      <SelectItem value="viz">Data Visualization & BI Dashboards</SelectItem>
                      <SelectItem value="mlops">MLOps Solutions</SelectItem>
                      <SelectItem value="db">Database Design & SQL Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldErrors.service && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.service}</p>
                )}
              </div>

              {/* textarea */}
              <div>
                <Textarea
                  className={`h-[200px] ${fieldErrors.message ? "border-red-500" : ""}`}
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  disabled={isSubmitting}
                />
                {fieldErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                )}
              </div>

              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};


export default Contact;