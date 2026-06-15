/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string;
}

export interface Doctor {
  name: string;
  degrees: string[];
  designation: string;
  specialty: string;
  about: string;
  achievements: string[];
  schedule: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  text: string;
  rating: number;
  department: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'diagnostics' | 'clinical';
  image: string;
  description: string;
}

export interface BookingSubmission {
  name: string;
  phone: string;
  email: string;
  department: string;
  date: string;
  message: string;
}
