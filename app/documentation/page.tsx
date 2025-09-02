'use client'

import { useState, useEffect } from 'react'

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('paywoll')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#e6e2de]">
      {/* Documentation Header - sophisticated tab design */}
      <div className="sticky top-20 z-[60] bg-white/95 backdrop-blur-sm border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
                DOCUMENTATION
              </span>
            </div>
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200/60">
              <button
                onClick={() => setActiveTab('paywoll')}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'paywoll'
                    ? 'bg-slate-900 text-white shadow-sm transform translate-y-[-1px]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Paywoll
              </button>
              <button
                onClick={() => setActiveTab('salesfollowup')}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'salesfollowup'
                    ? 'bg-slate-900 text-white shadow-sm transform translate-y-[-1px]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Sales Follow Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-40 space-y-8">
              {activeTab === 'paywoll' && (
                <>
                  <div>
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                      Getting Started
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => scrollToSection('what-is-paywoll')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          What is Paywoll?
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('how-it-works')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          How it Works
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('getting-started')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Getting Started
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                      Using Paywoll
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => scrollToSection('creating-paywalls')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Creating Paywalls
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('stripe-setup')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Setting up Stripe
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('sharing-content')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Sharing Your Content
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                      Advanced
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => scrollToSection('plans-pricing')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Plans & Pricing
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                      Support
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                        >
                          Contact Us
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              
              {activeTab === 'salesfollowup' && (
                <div>
                  <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                    Coming Soon
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => scrollToSection('coming-soon')}
                        className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all text-left w-full p-2 rounded-md"
                      >
                        Documentation
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm">
              <div className="p-8 lg:p-12">
                {activeTab === 'paywoll' && (
                  <div className="prose prose-slate max-w-none">
                    <section id="what-is-paywoll" className="mb-16 scroll-mt-40">
                      <h1 className="text-4xl font-bold text-slate-900 mb-6">Paywoll Help Guide</h1>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Learn how to monetize your content with paywalls in minutes. No technical experience required.
                      </p>
                      
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                        <h3 className="text-slate-900 font-semibold mb-4">What is Paywoll?</h3>
                        <p className="text-slate-700 mb-4">
                          Paywoll is a simple service that helps content creators, bloggers, and businesses make money from their content by adding payment gates. Think of it as a digital bouncer for your premium content.
                        </p>
                        <p className="text-slate-700">
                          Instead of letting everyone access your valuable content for free, Paywoll creates a payment page that visitors must complete before they can view your content.
                        </p>
                      </div>
                    </section>

                    <section id="how-it-works" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">How Does It Work?</h2>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                          <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold">1</span>
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-2">You Create</h3>
                          <p className="text-slate-600 text-sm">Create valuable content and put it anywhere online</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                          <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold">2</span>
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-2">We Protect</h3>
                          <p className="text-slate-600 text-sm">Create a paywall that sits between your audience and your content</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                          <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold">3</span>
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-2">You Earn</h3>
                          <p className="text-slate-600 text-sm">Visitors pay through Stripe, money goes directly to you</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-900 mb-2">Perfect For:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Premium blog posts and articles</li>
                          <li>• Online courses and tutorials</li>
                          <li>• Exclusive videos and podcasts</li>
                          <li>• Digital downloads and resources</li>
                          <li>• Members-only content</li>
                        </ul>
                      </div>
                    </section>

                    <section id="getting-started" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started</h2>
                      
                      <div className="space-y-8">
                        <div className="border border-slate-200 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Step 1: Sign Up</h3>
                          <p className="text-slate-600 mb-4">
                            Create your Paywoll account using just your email address. We&apos;ll send you a magic link to sign in - no passwords to remember!
                          </p>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Step 2: Connect Stripe</h3>
                          <p className="text-slate-600 mb-4">
                            You&apos;ll need a Stripe account to process payments. Don&apos;t have one? Don&apos;t worry - Stripe is free to set up and is the most trusted payment processor used by millions of businesses.
                          </p>
                          
                          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                            <p className="text-slate-700 text-sm">
                              <strong>New to Stripe?</strong> Visit stripe.com to create your free account. You&apos;ll need to create &quot;Products&quot; and &quot;Prices&quot; for your content.
                            </p>
                          </div>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Step 3: Create Your Content</h3>
                          <p className="text-slate-600">
                            Upload your content anywhere you like - your website, Google Drive, Dropbox, YouTube (unlisted), or any other platform. Just make sure you have a direct link to your content.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="creating-paywalls" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Creating Your First Paywall</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">What You&apos;ll Need</h3>
                          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                            <ul className="space-y-3 text-slate-700">
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                                <span><strong>Content URL:</strong> The link to your premium content</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                                <span><strong>Stripe Price ID:</strong> From your Stripe dashboard (looks like &quot;price_1234...&quot;)</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                                <span><strong>Paywall Name:</strong> A unique name for your paywall (used in the URL)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Creating the Paywall</h3>
                          <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Go to your dashboard and click &quot;Create New Paywall&quot;</li>
                            <li>Enter a unique name for your paywall</li>
                            <li>Paste your content URL</li>
                            <li>Enter your Stripe Price ID</li>
                            <li>Choose your payment mode</li>
                            <li>Click &quot;Create Paywall&quot;</li>
                          </ol>
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                          <h4 className="font-semibold text-slate-900 mb-2">Success! 🎉</h4>
                          <p className="text-slate-700 text-sm">
                            Your paywall is now live! You&apos;ll get a link like <code className="bg-white px-2 py-1 rounded text-xs border border-slate-200">paywoll.com/your-paywall-name</code> that you can share anywhere.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="stripe-setup" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Setting Up Stripe</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Stripe?</h3>
                          <p className="text-slate-600 mb-4">
                            Stripe is the world&apos;s most trusted payment processor, handling billions of dollars in transactions for businesses of all sizes. When someone pays through your paywall, the money goes directly to your Stripe account, not ours.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-4">Setting Up Your Products</h3>
                          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                            <h4 className="font-semibold text-slate-900 mb-3">In Your Stripe Dashboard:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
                              <li>Go to Products → Add Product</li>
                              <li>Name your product (e.g., &quot;Premium Blog Post&quot;, &quot;Video Course&quot;)</li>
                              <li>Set your price (one-time payment or subscription)</li>
                              <li>Save the product and copy the &quot;Price ID&quot; (starts with &quot;price_&quot;)</li>
                              <li>Use this Price ID when creating your paywall</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="sharing-content" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Sharing Your Protected Content</h2>
                      
                      <p className="text-slate-600 mb-6">
                        Once your paywall is created, you&apos;ll get a special link that you can share anywhere instead of your direct content link.
                      </p>
                      
                      <div className="bg-slate-900 text-white p-4 rounded-lg mb-6 font-mono text-sm">
                        <div className="mb-2">❌ Don&apos;t share: https://yoursite.com/premium-article</div>
                        <div>✅ Share this: https://paywoll.com/your-paywall-name</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Where to Share Your Paywall Links</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• Social media (Twitter/X, LinkedIn, Facebook, Instagram)</li>
                        <li>• Email newsletters</li>
                        <li>• WhatsApp/Telegram groups</li>
                        <li>• Discord servers</li>
                        <li>• Your website or blog</li>
                      </ul>
                    </section>

                    <section id="plans-pricing" className="mb-16 scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Plans & Pricing</h2>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-slate-200 rounded-lg p-6">
                          <h3 className="font-semibold text-slate-900 mb-2">Starter</h3>
                          <p className="text-2xl font-bold text-slate-900 mb-4">Free</p>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li>• Up to 3 paywalls</li>
                            <li>• Basic analytics</li>
                            <li>• Paywoll branding</li>
                          </ul>
                        </div>
                        <div className="border-2 border-slate-900 rounded-lg p-6 relative">
                          <div className="absolute -top-3 left-4">
                            <span className="bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              POPULAR
                            </span>
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-2">Pro</h3>
                          <p className="text-2xl font-bold text-slate-900 mb-4">$19/month</p>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li>• Unlimited paywalls</li>
                            <li>• Advanced analytics</li>
                            <li>• Priority support</li>
                          </ul>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                          <h3 className="font-semibold text-slate-900 mb-2">Agency</h3>
                          <p className="text-2xl font-bold text-slate-900 mb-4">$49/month</p>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li>• Everything in Pro</li>
                            <li>• Custom domains</li>
                            <li>• White-label branding</li>
                            <li>• Multiple team members</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section id="contact" className="scroll-mt-40">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">Need More Help?</h2>
                      
                      <p className="text-slate-600 mb-4">
                        We&apos;re here to help! Pro and Agency plan users get priority email support with faster response times.
                      </p>
                      
                      <p className="text-slate-600 mb-6">
                        Still have questions? Email us at <code className="bg-slate-100 px-2 py-1 rounded text-sm border border-slate-200">support@paywoll.com</code>
                      </p>
                      
                      <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                        Get Started →
                      </button>
                    </section>
                  </div>
                )}

                {activeTab === 'salesfollowup' && (
                  <section id="coming-soon" className="scroll-mt-40">
                    <div className="text-center py-20">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m6.24 1.76l-2.83 2.83M20 12h-4m-6.24 6.24l-2.83-2.83M12 20v-4M7.76 16.24l2.83-2.83M4 12h4m6.24-6.24l2.83 2.83" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Coming Soon</h2>
                      <p className="text-slate-600 max-w-md mx-auto">
                        Documentation for the Sales Follow Up App is currently being prepared. Check back soon for comprehensive guides and tutorials.
                      </p>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}