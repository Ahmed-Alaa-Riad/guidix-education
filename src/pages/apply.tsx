// pages/apply.js
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

interface FormData {
  country: string;
  degree: string;
  major: string;
  name: string;
  phone: string;
  email: string;
  budget: string;
  referredBy: string;
}

export default function Apply() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { country, degree, major } = router.query;

  const [formData, setFormData] = useState<FormData>({
    country: "",
    degree: "",
    major: "",
    name: "",
    phone: "",
    email: "",
    budget: "",
    referredBy: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      country: Array.isArray(country) ? country[0] : country || "",
      degree: Array.isArray(degree) ? degree[0] : degree || "",
      major: Array.isArray(major) ? major[0] : major || "",
    }));
  }, [country, degree, major]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      if (res.ok) {
        alert(t("messages.success"));
        setFormData({
          country: formData.country,
          degree: formData.degree,
          major: formData.major,
          name: "",
          phone: "",
          email: "",
          budget: "",
          referredBy: "",
        });
      } else {
        alert(t("messages.failure"));
      }
    } catch (error) {
      console.error(error);
      alert(t("messages.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-6 md:py-12 px-4 md:px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 mb-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-primary bg-clip-text text-transparent pb-3">
              {t("fields.formTitle")}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              {t("fields.academicJourneyStep")}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Academic Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-secondary border-l-4 border-secondary pl-3">
                {t("fields.academicInfo")}
              </h3>

              {/* Destination */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.destination")}
                </label>
                <div className="relative">
                  <input
                    value={formData.country}
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    placeholder={t("placeholders.country")}
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Degree */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.degree")}
                </label>
                <div className="relative">
                  <input
                    value={formData.degree}
                    onChange={(e) =>
                      setFormData({ ...formData, degree: e.target.value })
                    }
                    placeholder={t("placeholders.degree")}
                    required
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Major */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.major")}
                </label>
                <div className="relative">
                  <input
                    value={formData.major}
                    onChange={(e) =>
                      setFormData({ ...formData, major: e.target.value })
                    }
                    placeholder={t("placeholders.major")}
                    required
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-secondary border-l-4 border-secondary pl-3">
                {t("fields.personalInfo")}
              </h3>

              {/* Name */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.name")}
                </label>
                <div className="relative">
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t("placeholders.name")}
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="group">
                  <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                    {t("fields.phone")}
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={t("placeholders.phone")}
                      className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                    {t("fields.email")}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t("placeholders.email")}
                      className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-secondary border-l-4 border-secondary pl-3">
                {t("fields.financialInfo")}
              </h3>

              {/* Budget */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.budget")}{" "}
                  <span className="text-sm text-secondary/70 font-normal">
                    {t("fields.budgetNote")}
                  </span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300 appearance-none cursor-pointer"
                  >
                    <option value="">{t("placeholders.budget")}</option>
                    <option>0 to 5000</option>
                    <option>5000 to 10,000</option>
                    <option>10,000 to 15,000</option>
                    <option>15,000 to 20,000</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-secondary border-l-4 border-secondary pl-3">
                {t("fields.additionalInfo")}
              </h3>

              {/* Referred By */}
              <div className="group">
                <label className="block text-primary font-semibold mb-2 text-sm md:text-base">
                  {t("fields.referredBy")}
                </label>
                <div className="relative">
                  <input
                    value={formData.referredBy}
                    onChange={(e) =>
                      setFormData({ ...formData, referredBy: e.target.value })
                    }
                    placeholder={t("placeholders.referredBy")}
                    className="w-full border-2 border-gray-200 bg-white/50 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className={`relative w-full bg-primary text-white px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl ${
                  loading
                    ? "opacity-70 cursor-not-allowed scale-100 hover:scale-100"
                    : "hover:shadow-2xl"
                } overflow-hidden touch-manipulation`}
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F6244] to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>{t("buttons.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>{t("buttons.submit")}</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Security Notice */}
            <div className="pt-4 sm:pt-6">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {t("fields.privacyNote")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
