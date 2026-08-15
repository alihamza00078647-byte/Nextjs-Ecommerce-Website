"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Welcome to <span className="text-orange-600">QuickCart</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are transforming online shopping with cutting-edge technology
              and customer-centric solutions. Our mission is to make e-commerce
              accessible, fast, and secure for everyone.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition font-medium">
                Shop Now
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded hover:bg-gray-50 transition font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#E6E9F2] rounded-xl h-96 flex items-center justify-center">
              <Image
                src={assets.jbl_soundbox_image}
                alt="QuickCart Hero"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 py-20 border-y border-gray-200">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide a seamless, secure, and delightful shopping experience
              for millions of customers worldwide. We believe in empowering both
              buyers and sellers through innovative e-commerce solutions.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ✨ Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted e-commerce platform, known for
              exceptional quality, reliability, and customer service. We aim to
              revolutionize how people shop online.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16">
            Why Choose <span className="text-orange-600">QuickCart</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Built with Next.js for blazing-fast performance. Experience
                instant page loads and smooth navigation.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure & Safe
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with Clerk authentication and Stripe
                payments. Your data is always protected.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Seller Friendly
              </h3>
              <p className="text-gray-600">
                Complete seller dashboard for inventory management, order
                tracking, and business analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 py-16 bg-[#E6E9F2] px-8 rounded-xl my-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              10K+
            </h3>
            <p className="text-gray-600 font-medium">Products</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              50K+
            </h3>
            <p className="text-gray-600 font-medium">Happy Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              100%
            </h3>
            <p className="text-gray-600 font-medium">Secure Checkout</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              24/7
            </h3>
            <p className="text-gray-600 font-medium">Support Available</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16">
            Our Team
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Dedicated professionals committed to making QuickCart the best
            e-commerce platform. We combine technical expertise with customer
            passion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                JK
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                John Kinder
              </h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                SA
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Sarah Anderson
              </h3>
              <p className="text-gray-600 text-sm">CTO & Tech Lead</p>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MJ
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Michael Johnson
              </h3>
              <p className="text-gray-600 text-sm">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
