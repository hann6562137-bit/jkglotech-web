"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        products: [] as string[],
        organization: "",
        country: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
        consent: false
    });

    const handleProductToggle = (product: string) => {
        setFormData(prev => ({
            ...prev,
            products: prev.products.includes(product)
                ? prev.products.filter(p => p !== product)
                : [...prev.products, product]
        }));
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSubmit = () => {
        // Form submission logic will be added later
        setCurrentStep(4);
    };

    const handleGoBack = () => {
        router.push("/");
    };

    if (currentStep === 4) {
        return (
            <div className="text-center py-20 mt-[100px]">
                <div className="bg-[#121319] content-container mt-20 py-25">
                    <p className="text-gray-400 font-pretendard text-[40px] mb-4">
                        Submission Complete
                    </p>
                    <h2 className="text-white font-pretendard text-[80px] font-semibold mb-12 leading-tight">
                        We will get back to you shortly.<br />
                        Thank you.
                    </h2>
                    <button
                        onClick={handleGoBack}
                        className="bg-[#FFD900] text-black font-pretendard text-[30px] font-semibold px-12 py-3 rounded hover:bg-[#ffe033] transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-[1200px]">
                {/* Header */}
                <h1 className="text-white font-aldrich text-[60px] text-center mb-16">
                    About us
                </h1>

                {/* Main Container */}
                <div className="bg-[#121319] overflow-hidden">
                    <div className="flex relative">
                        {/* Divider */}
                        <div className="absolute left-1/2 top-0 bottom-0 flex items-center">
                            <div className="w-px bg-gray-800 my-12 h-[calc(100%-6rem)]"></div>
                        </div>

                        {/* Left Sidebar */}
                        <div className="w-1/2 bg-[#121319] p-12">
                            <h2 className="text-white font-pretendard text-[40px] font-semibold mb-6">
                                About us
                            </h2>
                            <p className="text-gray-400 font-pretendard text-[20px] leading-relaxed mb-4">
                                Design the future of safety with JK GLOTECH, a leader in global protection standards. JK GLOTECH delivers protection solutions optimized for your needs.
                            </p>
                            <p className="text-gray-400 font-pretendard text-[20px] leading-relaxed">
                                Contact us now and experience our premium-quality solutions.
                            </p>
                        </div>

                        {/* Right Content Area */}
                        <div className="w-1/2 bg-[#121319] p-12">
                            {currentStep !== 4 && (
                                <>
                                    {/* Step Indicators */}
                                    <div className="flex items-center gap-1 mb-5">
                                        <div className={`flex-1 font-aldrich text-[30px] pb-1 ${currentStep >= 1 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                                            01.
                                        </div>
                                        <div className={`flex-1 font-aldrich text-[30px] pb-1 ${currentStep >= 2 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                                            02.
                                        </div>
                                        <div className={`flex-1 font-aldrich text-[30px] pb-1 ${currentStep >= 3 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                                            03.
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Step 1: Product Selection */}
                            {currentStep === 1 && (
                                <div>
                                    <h3 className="text-white font-pretendard text-[35px] font-medium mb-8">
                                        Which of our products are you interested in?
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 mb-12">
                                        {[
                                            "Bulletproof vest",
                                            "Hood",
                                            "tabproof vest",
                                            "EV tank",
                                            "Plate",
                                            "Washer",
                                            "Garment",
                                            "Others",
                                            "Glove"
                                        ].map((product) => (
                                            <label
                                                key={product}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${formData.products.includes(product)
                                                    ? 'bg-[#FFD900] border-[#FFD900]'
                                                    : 'bg-[#2a2d3a] border-gray-600 group-hover:border-gray-400'
                                                    }`}>
                                                    {formData.products.includes(product) && (
                                                        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="text-white font-pretendard text-[20px]">
                                                    {product}
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={formData.products.includes(product)}
                                                    onChange={() => handleProductToggle(product)}
                                                />
                                            </label>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className="cursor-pointer bg-[#FFD900] text-black font-pretendard text-[30px] font-semibold px-12 py-3 rounded hover:bg-[#ffe033] transition-colors flex items-center gap-2"
                                    >
                                        Next <span>→</span>
                                    </button>
                                </div>
                            )}

                            {/* Step 2: Organization Info */}
                            {currentStep === 2 && (
                                <div>
                                    <p className="text-gray-400 font-pretendard text-[20px] mb-8">
                                        We regret to inform you that we are currently unable to provide services to individuals or organizations outside the government and corporate sectors.
                                    </p>
                                    <div className="space-y-6 mb-12">
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Organization / Company
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.organization}
                                                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.country}
                                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className="cursor-pointer bg-[#FFD900] text-black font-pretendard text-[30px] font-semibold px-12 py-3 rounded hover:bg-[#ffe033] transition-colors flex items-center gap-2"
                                    >
                                        Next <span>→</span>
                                    </button>
                                </div>
                            )}

                            {/* Step 3: Personal Details */}
                            {currentStep === 3 && (
                                <div>
                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-pretendard text-[20px] mb-2 block">
                                                Comments
                                            </label>
                                            <textarea
                                                value={formData.comments}
                                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                                rows={4}
                                                className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors resize-none"
                                            />
                                        </div>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors mt-1 flex-shrink-0 ${formData.consent
                                                ? 'bg-[#FFD900] border-[#FFD900]'
                                                : 'bg-[#2a2d3a] border-gray-600 group-hover:border-gray-400'
                                                }`}>
                                                {formData.consent && (
                                                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-white font-pretendard text-[20px]">
                                                Consent to Collect Personal Information
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={formData.consent}
                                                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                            />
                                        </label>
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        className="cursor-pointer bg-[#FFD900] text-black font-pretendard text-[30px] font-semibold px-12 py-3 rounded hover:bg-[#ffe033] transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
