import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, School, GraduationCap,
    CheckCircle, Upload, AlertCircle,
    Database, Code, Globe, Zap
} from 'lucide-react';

const API_URL = 'http://localhost:5000/api/placement-register';

const PlacementRegistration = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
    const [fileName, setFileName] = useState('');

    const collegeType = watch('college_type');

    const engineeringDepts = [
        "CSE", "CSE – Cybersecurity", "Computer Science and Business Systems",
        "IT", "AIDS", "AIML", "ECE", "EEE", "Biotechnology", "Biomedical", "MCA", "MBA"
    ];

    const artsScienceDepts = [
        "Computer Science", "Computer Science and Data Science", "BCA", "AIML", "AIDS",
        "Biochemistry", "Biotechnology", "Microbiology", "M.Sc Biochemistry",
        "M.Sc Biotechnology", "M.Sc Computer Science", "M.Sc Microbiology", "MCOM", "MBA"
    ];

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key === 'resume') {
                formData.append('resume', data.resume[0]);
            } else {
                formData.append(key, data[key]);
            }
        });

        try {
            await axios.post(`${API_URL}/register`, formData);
            setSubmitStatus('success');
            reset();
            setFileName('');
        } catch (error) {
            console.error('Registration failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const InputField = ({ label, name, icon: Icon, type = "text", validation, placeholder }) => (
        <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Icon className="w-4 h-4 mr-2 text-indigo-600" />
                {label}
            </label>
            <input
                type={type}
                {...register(name, validation)}
                placeholder={placeholder}
                className={`w-full px-4 py-3 rounded-xl border ${errors[name] ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50/50`}
            />
            {errors[name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[name].message}</p>}
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-4">
                        <Zap className="w-4 h-4 mr-2" />
                        2026 Batch Exclusive
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        2026 Placement Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Student Registration</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards your career. Register now to showcase your profile to top participating companies.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
                >
                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                            {/* Step 1: Personal Details */}
                            <section>
                                <div className="flex items-center mb-8 pb-2 border-b border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mr-4 shadow-lg shadow-indigo-200">1</div>
                                    <h2 className="text-2xl font-bold text-slate-800">Personal Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                    <InputField
                                        label="Full Name"
                                        name="name"
                                        icon={User}
                                        placeholder="John Doe"
                                        validation={{ required: "Full Name is required" }}
                                    />
                                    <InputField
                                        label="Email Address"
                                        name="email"
                                        icon={Mail}
                                        type="email"
                                        placeholder="john@example.com"
                                        validation={{
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                        }}
                                    />
                                    <InputField
                                        label="Phone Number"
                                        name="phone"
                                        icon={Phone}
                                        placeholder="+91 98765 43210"
                                        validation={{ required: "Phone number is required" }}
                                    />
                                </div>
                            </section>

                            {/* Step 2: Educational Details */}
                            <section>
                                <div className="flex items-center mb-8 pb-2 border-b border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mr-4 shadow-lg shadow-indigo-200">2</div>
                                    <h2 className="text-2xl font-bold text-slate-800">Academic Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <School className="w-4 h-4 mr-2 text-indigo-600" />
                                            College Type
                                        </label>
                                        <select
                                            {...register("college_type", { required: "College type is required" })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-200 focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50/50"
                                        >
                                            <option value="">Select College Type</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Arts & Science">Arts & Science</option>
                                        </select>
                                        {errors.college_type && <p className="text-red-500 text-xs mt-1 font-medium">{errors.college_type.message}</p>}
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <Database className="w-4 h-4 mr-2 text-indigo-600" />
                                            Department
                                        </label>
                                        <select
                                            {...register("department", { required: "Department is required" })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-200 focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50/50"
                                        >
                                            <option value="">Select Department</option>
                                            {collegeType === 'Engineering' && engineeringDepts.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                                            {collegeType === 'Arts & Science' && artsScienceDepts.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                                        </select>
                                        {errors.department && <p className="text-red-500 text-xs mt-1 font-medium">{errors.department.message}</p>}
                                    </div>

                                    <InputField
                                        label="College Name"
                                        name="college_name"
                                        icon={Globe}
                                        placeholder="Enter your college name"
                                        validation={{ required: "College name is required" }}
                                    />

                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                            <GraduationCap className="w-4 h-4 mr-2 text-indigo-600" />
                                            Year of Passing
                                        </label>
                                        <select
                                            {...register("year_of_passing", { required: "Year of passing is required" })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-200 focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50/50"
                                        >
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Step 3: Skills & Resume */}
                            <section>
                                <div className="flex items-center mb-8 pb-2 border-b border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mr-4 shadow-lg shadow-indigo-200">3</div>
                                    <h2 className="text-2xl font-bold text-slate-800">Skills & Profile</h2>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                        <Code className="w-4 h-4 mr-2 text-indigo-600" />
                                        Technical Skills
                                    </label>
                                    <textarea
                                        {...register("skills")}
                                        placeholder="Python, Java, React, UI/UX, Data Science..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-200 focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50/50 h-32 resize-none"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                        <Upload className="w-4 h-4 mr-2 text-indigo-600" />
                                        Upload Resume (PDF, DOC, DOCX - Max 5MB)
                                    </label>
                                    <div className="relative group border-2 border-dashed border-slate-200 rounded-2xl p-8 transition-colors hover:border-indigo-400 bg-slate-50/50 text-center">
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => setFileName(e.target.files[0]?.name)}
                                            {...register("resume", { required: "Resume is required" })}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="space-y-4">
                                            <div className="mx-auto w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                                <Upload className="w-6 h-6" />
                                            </div>
                                            <div>
                                                {fileName ? (
                                                    <span className="text-indigo-600 font-semibold">{fileName}</span>
                                                ) : (
                                                    <>
                                                        <p className="text-sm font-medium text-slate-900">Click to upload or drag and drop</p>
                                                        <p className="text-xs text-slate-500 mt-1">PDF, DOC or DOCX up to 5MB</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {errors.resume && <p className="text-red-500 text-xs mt-2 font-medium">{errors.resume.message}</p>}
                                </div>

                                <div className="mb-8">
                                    <label className="flex items-start cursor-pointer group">
                                        <div className="relative flex items-center pt-0.5">
                                            <input
                                                type="checkbox"
                                                {...register("consent", { required: "You must provide consent to register" })}
                                                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                            />
                                        </div>
                                        <span className="ml-3 text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                                            I confirm that I am an unplaced student from the 2026 batch and consent to share my profile with participating companies.
                                        </span>
                                    </label>
                                    {errors.consent && <p className="text-red-500 text-xs mt-1 font-medium">{errors.consent.message}</p>}
                                </div>
                            </section>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-indigo-200'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Registering...
                                        </>
                                    ) : (
                                        'Register for Placement Drive'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Success/Error Toast Message */}
                <AnimatePresence>
                    {submitStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-6 rounded-2xl shadow-2xl flex items-center space-x-4 min-w-[320px] max-w-lg z-50 ${submitStatus === 'success' ? 'bg-emerald-50 border border-emerald-100 text-emerald-900' : 'bg-rose-50 border border-rose-100 text-rose-900'
                                }`}
                        >
                            <div className={`p-2 rounded-full ${submitStatus === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                                {submitStatus === 'success' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="font-bold">{submitStatus === 'success' ? 'Registration Successful!' : 'Registration Failed'}</h3>
                                <p className="text-sm opacity-90 mt-0.5 leading-relaxed">
                                    {submitStatus === 'success'
                                        ? "Your registration has been successfully submitted. Our placement team will review your profile and share it with participating companies."
                                        : "Something went wrong. Please check your internet connection and try again."}
                                </p>
                            </div>
                            <button onClick={() => setSubmitStatus(null)} className="ml-auto text-slate-400 hover:text-slate-600">×</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PlacementRegistration;
