import type { ComponentModel } from "@web-types/model";

export interface HeroSliderFields {
  title: string;
  subtitle?: string;
  image: string;
  altText: string;
  buttonText?: string;
  buttonUrl?: string;
  audienceDropdown: { label: string; url: string }[];
  slides: {
    title: string;
    subtitle?: string;
    image: string;
    altText: string;
    buttonText?: string;
    buttonUrl?: string;
  }[];
}

export const HeroSliderModel: ComponentModel = {
  fields: {
    title: { type: "text", required: true },
    slides: {
      type: "repeatable",
      fields: {
        image: { type: "image", required: true },
        caption: { type: "text", required: false }
      }
    }
  }
};

export function getDefaultValues(): HeroSliderFields {
  return {
    title: "Welcome to UHD",
    subtitle: "An Engaging Campus Experience",
    image: "/images/homepage/startyourjourney3-3.jpg",
    altText: "A vibrant view of UHD",
    buttonText: "Learn More",
    buttonUrl: "/learn-more",
    audienceDropdown: [
      { label: "Prospective Student", url: "/prospective-students" },
      { label: "Current Student", url: "/current-students" },
      { label: "Faculty & Staff", url: "/faculty-staff" },
      { label: "Alumni", url: "/alumni" }
    ],
    slides: [
      {
        title: "First Slide Title",
        subtitle: "First Slide Subtitle",
        image: "/images/homepage/_slider/graduate-programs-1600x500.jpg",
        altText: "First Slide Description",
        buttonText: "Explore More",
        buttonUrl: "/explore"
      },
      {
        title: "Second Slide Title",
        subtitle: "Second Slide Subtitle",
        image: "/images/homepage/_slider/scholarships-slide.jpg",
        altText: "Second Slide Description",
        buttonText: "Get Started",
        buttonUrl: "/get-started"
      }
    ]
  };
}
