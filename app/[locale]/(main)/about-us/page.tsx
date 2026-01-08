"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
  const t = useTranslations();
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

  const alertMessages = {
    selectProduct: t('aboutUsAlerts.selectProduct'),
    enterOrganization: t('aboutUsAlerts.enterOrganization'),
    enterCountry: t('aboutUsAlerts.enterCountry'),
    enterFirstName: t('aboutUsAlerts.enterFirstName'),
    enterLastName: t('aboutUsAlerts.enterLastName'),
    enterEmail: t('aboutUsAlerts.enterEmail'),
    enterPhone: t('aboutUsAlerts.enterPhone'),
    agreeConsent: t('aboutUsAlerts.agreeConsent'),
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.products.length === 0) {
      window.alert(alertMessages.selectProduct);
      return;
    }
    if (currentStep === 2) {
      if (!formData.organization) {
        window.alert(alertMessages.enterOrganization);
        return;
      }
      if (!formData.country) {
        window.alert(alertMessages.enterCountry);
        return;
      }
    }
    if (currentStep === 3) {
      if (!formData.firstName) {
        window.alert(alertMessages.enterFirstName);
        return;
      }
      if (!formData.lastName) {
        window.alert(alertMessages.enterLastName);
        return;
      }
      if (!formData.email) {
        window.alert(alertMessages.enterEmail);
        return;
      }
      if (!formData.phone) {
        window.alert(alertMessages.enterPhone);
        return;
      }
      if (!formData.consent) {
        window.alert(alertMessages.agreeConsent);
        return;
      }
    }
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
      <div className="px-5 xl:px-0 text-center py-20 mt-10 xl:mt-[100px]">
        <div className="bg-[#121319] content-container mt-5 xl:mt-20 py-10 xl:py-25 xl:rounded-none rounded-xl">
          <p className="text-gray-400 font-pretendard text-[20px] xl:text-[40px] mb-10 xl:mb-4">
            {t('aboutUs.submissionComplete')}
          </p>
          <h2 className="text-white font-pretendard text-[80px] font-semibold mb-12 leading-tight hidden xl:inline">
            {t('aboutUs.submissionThanks').split("\n").map((line: string, idx: number) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <h2 className="block xl:hidden px-10 text-center w-full font-semibold text-white leading-tight text-[30px] mb-18 whitespace-pre-line">
            {t('aboutUs.submissionThanks')}
          </h2>
          <button
            onClick={handleGoBack}
            className="bg-[#FFD900] w-full xl:w-auto justify-center text-black font-pretendard text-[20px] xl:text-[30px] font-semibold xl:px-12 py-2 xl:py-3 rounded-none xl:rounded hover:bg-[#ffe033] transition-colors"
          >
            {t('aboutUs.goBack')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[50px] xl:mt-0 min-h-auto xl:min-h-screen bg-black flex items-center justify-center px-5 py-4 xl:py-20">
      <div className="w-full max-w-[1200px]">
        {/* Header */}
        <h1 className="text-white font-aldrich text-[60px] text-center mb-16 hidden xl:block">
          {t('aboutUs.pageTitle')}
        </h1>

        {/* Main Container */}
        <div className="xl:bg-[#121319] bg-black overflow-hidden">
          <div className="flex relative flex-col xl:flex-row">
            {/* Divider */}
            <div className="hidden xl:flex absolute left-1/2 top-0 bottom-0 items-center">
              <div className="w-px bg-gray-800 my-12 h-[calc(100%-6rem)]"></div>
            </div>

            {/* Left Sidebar */}
            <div className="w-full xl:w-1/2 xl:bg-[#121319] bg-black p-5 xl:p-12 text-center xl:text-start">
              <h2 className="text-white font-pretendard text-[20px] xl:text-[40px] font-semibold mb-6">
                {t('aboutUs.sectionTitle')}
              </h2>
              <p className="text-gray-400 font-pretendard text-[12px] xl:text-[20px] leading-relaxed mb-4">
                {t('aboutUs.sectionDesc1')}
              </p>
              <p className="text-gray-400 font-pretendard text-[12px] xl:text-[20px] leading-relaxed">
                {t('aboutUs.sectionDesc2')}
              </p>
            </div>

            {/* Right Content Area */}
            <div className="w-full xl:w-1/2 bg-[#121319] xl:rounded-none rounded-xl p-5 xl:p-12">
              {currentStep !== 4 && (
                <>
                  {/* Step Indicators */}
                  <div className="flex items-center gap-1 mb-2 xl:mb-5">
                    <div className={`flex-1 font-aldrich text-[20px] xl:text-[30px] pb-1 ${currentStep >= 1 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                      01.
                    </div>
                    <div className={`flex-1 font-aldrich text-[20px] xl:text-[30px] pb-1 ${currentStep >= 2 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                      02.
                    </div>
                    <div className={`flex-1 font-aldrich text-[20px] xl:text-[30px] pb-1 ${currentStep >= 3 ? 'border-b-2 border-[#FFD900]' : 'border-b-2 border-gray-500'}`}>
                      03.
                    </div>
                  </div>
                </>
              )}

              {/* Step 1: Product Selection */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-white font-pretendard text-[20px] xl:text-[35px] font-medium mb-8">
                    {t('aboutUs.step1Title')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 xl:gap-4 mb-6 xl:mb-12">
                    {t.raw('aboutUs.step1Products').map((product: string) => (
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
                        <span className="text-white font-pretendard text-[15px] xl:text-[20px]">
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
                    className="cursor-pointer bg-[#FFD900] text-black font-pretendard text-[20px] xl:text-[30px] font-semibold xl:px-12 py-2 xl:py-3 w-full xl:w-auto justify-center rounded hover:bg-[#ffe033] transition-colors flex items-center gap-2"
                  >
                    {t('aboutUs.next')} <span>→</span>
                  </button>
                </div>
              )}

              {/* Step 2: Organization Info */}
              {currentStep === 2 && (
                <div className="flex flex-col">
                  <p className="text-gray-400 font-pretendard text-[12px] xl:text-[20px] mb-4 xl:mb-8 xl:order-1 order-2">
                    {t('aboutUs.step2Notice')}
                  </p>
                  <div className="space-y-2 xl:space-y-6 mb-4 xl:mb-12 xl:order-2 order-1">
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mt-2 xl:mt-0 mb-1 xl:mb-2 block">
                        {t('aboutUs.organizationLabel')}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-2 xl:px-4 py-1 xl:py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-1 xl:mb-2 block">
                        {t('aboutUs.countryLabel')}
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-2 xl:px-4 py-1 xl:py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className="order-3 xl:mt-0 mt-10 cursor-pointer bg-[#FFD900] text-black font-pretendard text-[20px] xl:text-[30px] font-semibold xl:px-12 py-2 xl:py-3 w-full xl:w-auto justify-center rounded hover:bg-[#ffe033] transition-colors flex items-center gap-2"
                  >
                    {t('aboutUs.next')} <span>→</span>
                  </button>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <div>
                  <div className="space-y-2 xl:space-y-6 mb-8">
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-2 block">
                        {t('aboutUs.firstNameLabel')}
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-2 block">
                        {t('aboutUs.lastNameLabel')}
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-2 block">
                        {t('aboutUs.emailLabel')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-2 block">
                        {t('aboutUs.phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white font-pretendard text-[15px] xl:text-[20px] mb-2 block">
                        {t('aboutUs.commentsLabel')}
                      </label>
                      <textarea
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        rows={4}
                        className="w-full bg-[#2a2d3a] text-white font-pretendard px-4 py-3 rounded border border-gray-700 focus:border-[#FFD900] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <label className="flex items-center gap-2 xl:gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${formData.consent
                        ? 'bg-[#FFD900] border-[#FFD900]'
                        : 'bg-[#2a2d3a] border-gray-600 group-hover:border-gray-400'
                        }`}>
                        {formData.consent && (
                          <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="text-white font-pretendard text-[12px] xl:text-[20px]">
                        {t('aboutUs.consentLabel')}
                      </div>
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
                    className="cursor-pointer bg-[#FFD900] text-black font-pretendard text-[20px] xl:text-[30px] font-semibold xl:px-12 py-2 xl:py-3 w-full xl:w-auto justify-center rounded hover:bg-[#ffe033] transition-colors flex items-center gap-2"
                  >
                    {t('aboutUs.submit')}
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