// app/page.tsx
import React from 'react';
import { MessageCircle, Star, Download, Heart, Menu, X, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">AI Chat</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">Reviews</Link>
              <Link href="#download" className="text-gray-600 hover:text-blue-600">Download</Link>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Chat with Amazing</span>
              <span className="block text-blue-600 mt-2">AI Personas</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Have meaningful conversations with unique AI characters for less than the price of lunch
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://apps.apple.com" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Image src="/app-store.svg" alt="App Store" width={30} height={30} className="mr-3" />
                Download for iOS
              </Link>
              <Link 
                href="https://play.google.com" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                <Image src="/play-store.svg" alt="Play Store" width={30} height={30} className="mr-3" />
                Get it on Android
              </Link>
            </div>
          </div>
          <div className="mt-16 relative">
            <Image 
              src="/mockup.png" 
              alt="App Screenshot" 
              width={800} 
              height={600} 
              className="rounded-xl shadow-2xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bottom-0 h-20" />
          </div>
          <ArrowDown className="w-8 h-8 mx-auto mt-8 text-blue-600 animate-bounce" />
        </div>
      </section>

      {/* Features Section - Full Viewport */}
      <section id="features" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Meet Your New AI Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Natural Conversations</h3>
              <p className="text-gray-600 text-lg">Engage in meaningful chats that feel genuine and personal</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Unique Personalities</h3>
              <p className="text-gray-600 text-lg">Each AI has their own interests, style, and way of thinking</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Always Available</h3>
              <p className="text-gray-600 text-lg">Your AI friends are here whenever you want to chat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Full Viewport */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src={`/avatar${index}.png`}
                      alt={`User ${index}`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"The conversations feel so natural and engaging. It&#39;s like chatting with a real friend who&#39;s always there for you!"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Experience the App</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative">
                <Image
                  src={`/screen${index}.png`}
                  alt={`App Screenshot ${index}`}
                  width={400}
                  height={800}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section - Full Viewport */}
      <section id="download" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Chatting Today</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of users already enjoying meaningful conversations with their AI friends
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="https://apps.apple.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Image src="/app-store.svg" alt="App Store" width={30} height={30} className="mr-3" />
              Download for iOS
            </Link>
            <Link 
              href="https://play.google.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <Image src="/play-store.svg" alt="Play Store" width={30} height={30} className="mr-3" />
              Get it on Android
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}