import React from 'react'
import { Link, Building, Shield } from "lucide-react";

export default function Verify() {
    return (
        <section className="py-20 bg-blue-100/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#272725] mb-6">
                        Verify Your Internship
                    </h2>
                    <p className="text-xl text-[#70706d] max-w-3xl mx-auto">
                        Get instant verification results for any internship opportunity.
                        Simply provide the details below and let our AI do the rest.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="p-8 shadow-md bg-white rounded-xl">
                        <div className="flex items-center space-x-3 mb-8">
                            <Shield className="h-8 w-8 text-blue-500" />
                            <h3 className="text-2xl font-semibold text-[#50504c]">Security Check Form</h3>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className=" font-medium text-black flex items-center space-x-2">
                                    <Link className="h-4 w-4" />
                                    <span>Internship URL (Optional)</span>
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/internship"
                                    className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className=" font-medium text-black flex items-center space-x-2">
                                    <Building className="h-4 w-4" />
                                    <span>Company Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter company name"
                                    className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-medium text-black">
                                    Job Description / Requirements
                                </label>
                                <textarea
                                    placeholder="Paste the internship description, requirements, or any details you want us to verify..."
                                    className="min-h-32 resize-none h-12 w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                variant="hero"
                                size="xl"
                                className="w-full bg-blue-400 text-white text-lg hover:cursor-pointer font-semibold hover:scale-102 transition-transform flex items-center justify-center h-12 rounded-lg"
                            ><Shield className=" h-6 w-6" />
                                Start Verification
                            </button>
                        </form>

                        <div className="mt-8 p-4 bg-gray-200/60  rounded-lg">
                            <p className="text-sm text-[#70706d] text-center">
                                🔒 Your data is processed securely and is not stored permanently.
                                We respect your privacy and use information only for verification purposes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
