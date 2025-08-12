// pages/apply.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
        alert("Application submitted successfully!");
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
        alert("Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-background min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-primary text-center">
          Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Destination */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Destination*
            </label>
            <input
              value={formData.country}
              readOnly
              className="font-semibold w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Degree *
            </label>
            <input
              value={formData.degree}
              readOnly
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Major */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Major *
            </label>
            <input
              value={formData.major}
              readOnly
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Name *
            </label>
            <input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your full name"
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Phone Number *
            </label>
            <input
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="e.g. +20 123 456 7890"
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="you@example.com"
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Budget * <span className="text-m text-gray-500">(USD/year)</span>
            </label>
            <select
              required
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            >
              <option value="">Select budget range</option>
              <option>0 to 5000</option>
              <option>5000 to 10,000</option>
              <option>10,000 to 15,000</option>
              <option>15,000 to 20,000</option>
            </select>
          </div>

          {/* Referred By */}
          <div>
            <label className="block text-primary font-semibold mb-2">
              Referred By
            </label>
            <input
              value={formData.referredBy}
              onChange={(e) =>
                setFormData({ ...formData, referredBy: e.target.value })
              }
              placeholder="Name or reference code"
              className="w-full border-b-2 border-primary bg-transparent focus:outline-none py-2 text-lg"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white px-4 py-2 rounded w-full transition ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary/80"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
