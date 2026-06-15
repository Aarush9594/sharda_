/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Department, Doctor, Testimonial, GalleryItem } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'neuro-spinal',
    name: 'Neuro & Spinal Care',
    shortDescription: 'Advanced brain and spinal diagnostics & advanced surgical interventions.',
    description: 'Specialized diagnosis and treatments for complex neurological disorders, spinal column trauma, slip discs, brain tumors, and chronic spinal conditions. Managed under the high-precision guidance of Dr. Virendra Keshri.',
    iconName: 'Activity'
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency & Trauma',
    shortDescription: '24/7 critical trauma care with advanced life-support systems.',
    description: 'Equipped with rapid-action trauma bays, advanced critical-care ventilators, and key surgeons on active standby to address emergencies, acute respiratory distress, cardiac crises, and sudden accidents.',
    iconName: 'FlameKindling'
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    shortDescription: 'Comprehensive diagnostic screening & internal medicine management.',
    description: 'Expert diagnostics and treatment for lifestyle disorders, infectious diseases, cardiopulmonary conditions, fever screening, diabetes, and hyperlipidemia led by veteran clinicians.',
    iconName: 'Stethoscope'
  },
  {
    id: 'diagnostics-imaging',
    name: 'Diagnostics & Imaging',
    shortDescription: 'High-resolution digital radiology and fully computerized pathology.',
    description: 'Accurate pathology testing and point-of-care diagnostics. Implemented with strict quality controls to deliver prompt, validated medical reports to assist in immediate treatment plans.',
    iconName: 'Layers'
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy',
    shortDescription: 'Expert rehabilitation programs for neurological & orthopedic recovery.',
    description: 'Post-surgical rehab, stroke hemiplegia recovery, sports injuries management, and pain relief therapy using automated electrotherapy and customized therapeutic exercises.',
    iconName: 'Sparkles'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    shortDescription: 'Compassionate medical care for infants, children, & adolescents.',
    description: 'Comprehensive immunization schedules, newborn medical checkups, pediatric growth monitoring, and pediatric infectious disease treatments in a child-safe visual environment.',
    iconName: 'Heart'
  }
];

export const SPECIALIST: Doctor = {
  name: 'Dr. Virendra Keshri',
  degrees: ['M.B.B.S. (Mumbai)', 'M.S. (General Surgery)', 'M.Ch. (IMS BHU)'],
  designation: 'Senior Consultant Neuro & Spinal Surgeon',
  specialty: 'Neuro & Spinal Surgery',
  about: 'Dr. Virendra Keshri is a highly revered Neuro and Spinal Surgeon based in Varanasi, India. Having completed his advanced surgical training at the prestigious Institute of Medical Sciences, Banaras Hindu University (IMS-BHU), he brings over fifteen years of clinical brilliance to Varanasi. He specializes in intricate cranial micro-surgeries, spinal trauma reconstructions, minimally invasive herniated disc surgeries, and keyhole spine solutions, ensuring maximum safety and therapeutic success.',
  achievements: [
    'Pioneer of premium micro-neurosurgical procedures in Varanasi',
    'Conducted over 5,000+ successful spinal and brain interventions',
    'Recognized as an outstanding medical practitioner in Eastern Uttar Pradesh'
  ],
  schedule: 'Monday to Saturday: 11:00 AM - 04:00 PM (Emergency Available Case-by-Case)'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Ramesh Nath Tripathi',
    location: 'Sigra, Varanasi',
    text: 'My father had progressive weakness in both legs due to spinal pressure. After our consultation with Dr. Virendra Keshri, we decided on spinal surgery. Today, he is completely pain-free and walks without support. Sharda Medicity is the gold standard of care.',
    rating: 5,
    department: 'Neuro & Spinal Care'
  },
  {
    id: 'test-2',
    patientName: 'Priya Singh',
    location: 'Lanka, Varanasi',
    text: 'When my brother suffered mild head trauma in an evening accident, we rushed here. The emergency unit had specialists on hand immediately, starting the primary life-saving checkups without waiting. Grateful for their promptness.',
    rating: 5,
    department: 'Emergency & Trauma'
  },
  {
    id: 'test-3',
    patientName: 'Anand Kumar Maurya',
    location: 'Sarnath, Varanasi',
    text: 'My severe lower back pain was cured through progressive spinal physiotherapy. They structured a custom posture-correction program that relieved the pressure on my disc. The physiotherapists are extremely dedicated.',
    rating: 5,
    department: 'Physiotherapy'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hospital Facade & Entrance',
    category: 'exterior',
    image: 'building', // will map to buildingImg
    description: 'The front profile of Sharda Medicity Hospital on Sigra road, Varanasi, featuring high-visibility clinical lighting and main gate access.'
  },
  {
    id: 'gal-2',
    title: 'Advanced Surgical Suite',
    category: 'clinical',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    description: 'Fully sterilized clinical operating theatre equipped with surgical micro-imaging, anaesthesia workstations, and critical monitoring.'
  },
  {
    id: 'gal-3',
    title: 'Medical Ward Corridor',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: 'A clean, calm, and noise-controlled high-dependency corridor designed for swift patient transit and absolute peace.'
  },
  {
    id: 'gal-4',
    title: 'Clinical Diagnostics Lab',
    category: 'diagnostics',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=800',
    description: 'Computerized clinical diagnostics bay with point-of-care micro-analyzers for quick and accurate pathology assessments.'
  }
];
