import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
    Search, Download,
    School,
    ChevronLeft, ChevronRight
} from 'lucide-react';

const API_URL = 'http://localhost:5000/api/placement-register';

const AdminPlacementDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        name: '',
        department: '',
        college_type: '',
        college_name: ''
    });

    const fetchStudents = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/students`, { params: filters });
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchStudents();
        }, 500);
        return () => clearTimeout(timer);
    }, [fetchStudents]);

    const handleExportCSV = async () => {
        try {
            window.open(`${API_URL}/export-csv`, '_blank');
        } catch (error) {
            console.error('Export failed:', error);
        }
    };

    const handleDownloadResume = (id) => {
        window.open(`${API_URL}/resume/${id}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Placement Registrations</h1>
                        <p className="text-slate-500 mt-1">Manage and review 2026 batch student profiles</p>
                    </div>
                    <button
                        onClick={handleExportCSV}
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5 active:scale-95"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Export to CSV
                    </button>
                </header>

                {/* Filters Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-6 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by name..."
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                                value={filters.name}
                                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                            />
                        </div>

                        <select
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all appearance-none cursor-pointer"
                            value={filters.college_type}
                            onChange={(e) => setFilters({ ...filters, college_type: e.target.value })}
                        >
                            <option value="">All Institution Types</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Arts & Science">Arts & Science</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Filter by Department..."
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                            value={filters.department}
                            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                        />

                        <input
                            type="text"
                            placeholder="Filter by College Name..."
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                            value={filters.college_name}
                            onChange={(e) => setFilters({ ...filters, college_name: e.target.value })}
                        />
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Info</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Skills</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Registered</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center">
                                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
                                            <p className="mt-4 text-slate-500 font-medium">Fetching records...</p>
                                        </td>
                                    </tr>
                                ) : students.length > 0 ? (
                                    students.map((student) => (
                                        <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mr-3">
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-900">{student.name}</div>
                                                        <div className="text-xs text-slate-500">{student.email}</div>
                                                        <div className="text-xs text-slate-500">{student.phone}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-slate-800">{student.department}</div>
                                                <div className="text-xs text-slate-500 flex items-center mt-1">
                                                    <School className="w-3 h-3 mr-1" />
                                                    {student.college_name}
                                                </div>
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold mt-2 ${student.college_type === 'Engineering' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                                                    }`}>
                                                    {student.college_type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-xs text-slate-600 line-clamp-2 max-w-[200px]">
                                                    {student.skills || 'No skills listed'}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs text-slate-500">
                                                    {new Date(student.created_at).toLocaleDateString()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleDownloadResume(student.id)}
                                                    className="inline-flex items-center p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                    title="Download Resume"
                                                >
                                                    <Download className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center text-slate-500">
                                            No registrations found matching your filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500">
                            Showing {students.length} results
                        </span>
                        <div className="flex space-x-2">
                            <button disabled className="p-2 text-slate-300 cursor-not-allowed">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button disabled className="p-2 text-slate-300 cursor-not-allowed">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPlacementDashboard;
