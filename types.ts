import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
}