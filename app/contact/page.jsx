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

const CONTACT_EMAIL = "realmuhammedsinan@gmail.com";

const SERVICE_LABELS = {
  ml: "Machine Learning Solutions",
  viz: "Data Visualization & BI Dashboards",
  mlops: "MLOps Solutions",
  db: "Database Design & SQL Development",
};

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-7736871685",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: CONTACT_EMAIL,
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

  const [fieldErrors, setFieldErrors] = useState({});

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

  // Handle form submission — opens mailto: in the user's email client
  const handleSubmit = (e) => {
    e.preventDefault();

    setFieldErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const serviceLabel = SERVICE_LABELS[formData.service] || formData.service;
    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${serviceLabel} — ${formData.firstName} ${formData.lastName}`
    );
    const body = encodeURIComponent(
      `Hi Muhammed,\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}${formData.phone ? `\nPhone: ${formData.phone}` : ""}\nService: ${serviceLabel}\n\n${formData.message}\n`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                />
                {fieldErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                )}
              </div>

              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
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