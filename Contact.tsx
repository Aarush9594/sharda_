/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  X, 
  Info,
  ChevronDown
} from 'lucide-react';
import { DEPARTMENTS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'neuro-spinal',
    date: '',
    message: '',
  });

  const [activeTicket, setActiveTicket] = useState<{
    referenceId: string;
    name: string;
    phone: string;
    departmentName: string;
    date: string;
  } | null>(null);

  const [pastBookings, setPastBookings] = useState<any[]>([]);

  // Load existing bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sharda_hospital_bookings');
      if (stored) {
        setPastBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load past bookings:', e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearBookings = () => {
    localStorage.removeItem('sharda_hospital_bookings');
    setPastBookings([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill out your Name, Phone number, and Appointment Date.');
      return;
    }

    const selectedDept = DEPARTMENTS.find(d => d.id === formData.department);
    const departmentLabel = selectedDept ? selectedDept.name : 'General Care';
    
    // Generate an authentic clinical Booking Reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const year = new Date(formData.date).getFullYear() || 2026;
    const bookingRefId = `SMH-${year}-${randomNum}`;

    const newTicket = {
      referenceId: bookingRefId,
      name: formData.name,
      phone: formData.phone,
      departmentName: departmentLabel,
      date: formData.date
    };

    const updatedBookings = [newTicket, ...pastBookings];
    setPastBookings(updatedBookings);
    
    try {
      localStorage.setItem('sharda_hospital_bookings', JSON.stringify(updatedBookings));
    } catch (err) {
      console.error(err);
    }

    setActiveTicket(newTicket);
    
    // Reset Form
    setFormData({
      name: '',
      phone: '',
      email: '',
      department: 'neuro-spinal',
      date: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f0f7ff]/30 border-t border-slate-100">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/2 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-700 font-sans font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100">
            CONNECT OR CONSULT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Consultations & Support
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Register your OPD consultation details online for immediate scheduling, or locate our primary hospital facade in Sigra, Varanasi.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded-full mx-auto mt-2.5" />
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form & Past Bookings */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-slate-205 border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-[0_5px_20px_-10px_rgba(15,23,42,0.03)] relative">
              <h3 className="text-xl font-display font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-600" />
                <span>Request Clinical Appointment</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@example.com"
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-905 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                      Department Unit
                    </label>
                    <div className="relative">
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all appearance-none cursor-pointer font-medium"
                      >
                        {DEPARTMENTS.map((d) => (
                          <option key={d.id} value={d.id} className="bg-white text-slate-900">
                            {d.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                    Preferred Consultation Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min="2026-05-25"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-sans tracking-wide uppercase mb-1.5">
                    Medical History / Symptoms Summary (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe any chronic symptoms, or specific requests for Dr. Virendra Keshri."
                    className="w-full bg-[#f8fafc] border border-slate-200 focus:border-teal-500/50 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all resize-none font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-750 text-white font-sans text-sm font-extrabold tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-teal-500/15 cursor-pointer"
                  >
                    <span>Request Appointment Pass</span>
                    <span className="text-xs">&rarr;</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Simulated Booking Panel (Review Submitted Data) */}
            {pastBookings.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                      My Local Hospital Bookings ({pastBookings.length})
                    </span>
                  </div>
                  <button 
                    onClick={handleClearBookings}
                    className="text-slate-400 hover:text-red-500 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
                  >
                    Clear History
                  </button>
                </div>

                <div className="max-h-36 overflow-y-auto space-y-2 pr-1 select-none">
                  {pastBookings.map((b, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/60 text-xs text-slate-700 font-medium">
                      <div>
                        <p className="text-slate-900 font-semibold">{b.name}</p>
                        <p className="text-slate-500 text-[10px] mt-0.5">{b.departmentName} &middot; {b.date}</p>
                      </div>
                      <span className="font-mono text-[10px] bg-teal-50 border border-teal-100 px-2.5 py-1 rounded text-teal-700 font-bold">
                        {b.referenceId}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Address Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.02)]">
              
              {/* 1. Address Location */}
              <div className="flex gap-4">
                <div className="p-2.5 h-10 w-10 shrink-0 bg-teal-50 border border-teal-100 rounded-xl text-teal-600 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-teal-700 font-bold">PHYSICAL HOSPITAL ADDRESS</h4>
                  <p className="text-slate-900 font-bold text-sm sm:text-base mt-1">
                    Sharda Medicity Hospital
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Sigra Road, Sigra, Varanasi, <br />
                    Uttar Pradesh 221010, India
                  </p>
                </div>
              </div>

              {/* 2. Urgent Emergency Line */}
              <div className="flex gap-4">
                <div className="p-2.5 h-10 w-10 shrink-0 bg-orange-50 border border-orange-100 rounded-xl text-[#ea580c] flex items-center justify-center">
                  <Phone className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-orange-600 font-bold">24/7 HELPLINE EMERGENCY SUPPORT</h4>
                  <p className="text-slate-500 font-normal text-xs mt-1">
                    Direct access to trauma triage unit & ambulances
                  </p>
                  <a href="tel:+918090713713" className="block text-orange-600 font-display font-extrabold text-base sm:text-lg mt-0.5 hover:underline">
                    +91 8090 713 713
                  </a>
                </div>
              </div>

              {/* 3. Electronic Mail */}
              <div className="flex gap-4">
                <div className="p-2.5 h-10 w-10 shrink-0 bg-sky-50 border border-sky-100 rounded-xl text-sky-600 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-sky-700 font-bold">DIGITAL INQUIRIES & CLINICAL REPORTS</h4>
                  <div className="pt-1.5 space-y-1">
                    <a href="mailto:info@shardamedicity.com" className="block text-slate-700 text-xs sm:text-sm hover:text-teal-600 animate-colors">
                      info@shardamedicity.com
                    </a>
                    <a href="mailto:emergencies@shardamedicity.com" className="block text-slate-700 text-xs sm:text-sm hover:text-teal-600 animate-colors">
                      emergencies@shardamedicity.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-[280px] bg-slate-50 shadow-sm group">
              <div className="absolute top-3 right-3 z-10 bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[10px] text-slate-600 font-sans font-bold flex items-center gap-1 shadow-xs">
                <Info className="h-3 w-3 text-teal-600" />
                <span>Sigra, Varanasi</span>
              </div>
              
              <iframe
                title="Sharda Medicity Hospital Map Location"
                src="https://maps.google.com/maps?q=Sharda%20Medicity%20Hospital,%20Sigra,%20Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none grayscale-[0.05] brightness-[1.0] contrast-[1.0]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>

      {/* OPD Pass Dialog Overlay */}
      {activeTicket && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl select-none">
            
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2 pb-5 border-b border-slate-100">
              <div className="p-3 bg-teal-50 border border-teal-100 rounded-full text-teal-600">
                <CheckCircle2 className="h-8 w-8 text-teal-600 animate-bounce" />
              </div>
              <h4 className="text-teal-700 font-display font-extrabold text-[11px] uppercase tracking-widest pt-2">
                APPOINTMENT PASS REQUESTED
              </h4>
              <p className="text-slate-900 font-display font-black text-xl leading-tight">
                OPD pass Generated Successfully
              </p>
              <p className="text-slate-500 text-xs max-w-sm mt-1 leading-relaxed font-sans">
                Please save this reference receipt as proof for OPD verification desk at the hospital. 
              </p>
            </div>

            {/* Ticket body details */}
            <div className="py-6 space-y-4 font-sans text-xs sm:text-sm">
              
              {/* Ref Id */}
              <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-550 text-slate-505 text-slate-500 uppercase font-bold text-[10px] tracking-wider">Reference ID:</span>
                <span className="font-mono text-teal-700 font-black text-sm tracking-widest animate-pulse">
                  {activeTicket.referenceId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 pt-1">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Patient Name</span>
                  <span className="text-slate-900 font-bold mt-1 block">{activeTicket.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Phone Helpline</span>
                  <span className="text-slate-900 font-bold mt-1 block">{activeTicket.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Department UNIT</span>
                  <span className="text-slate-900 font-bold mt-1 block">{activeTicket.departmentName}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">OPD Date requested</span>
                  <span className="text-teal-700 font-mono font-bold mt-1 block">{activeTicket.date}</span>
                </div>
              </div>

              {/* Notice info banner */}
              <div className="p-3.5 bg-sky-50 border border-sky-100 rounded-xl flex gap-2.5 w-full">
                <Info className="h-4.5 w-4.5 text-sky-600 shrink-0 mt-0.5" />
                <p className="text-slate-650 text-[11px] leading-relaxed">
                  Generates an initial queue clearance priority. An executive will call your phone shortly to verify exact consultant availability and specify the time slot.
                </p>
              </div>

            </div>

            {/* Close */}
            <div className="pt-2">
              <button
                onClick={() => setActiveTicket(null)}
                className="w-full text-center py-3.5 rounded-xl bg-teal-600 hover:bg-teal-750 text-white font-bold font-sans text-sm cursor-pointer transition-colors shadow-md shadow-teal-500/10"
              >
                Acknowledge & Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
