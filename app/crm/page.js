'use client';

import Image from 'next/image';

export default function CrmDashboard() {
	return (
		<div className="space-y-6">
			{/* Page Header */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
				<h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
				<p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
			</div>

			{/* Top KPI cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div className="flex items-center justify-between">
						<div>
							<div className="text-sm font-medium text-gray-600 mb-1">Total Leads</div>
							<div className="text-3xl font-bold text-gray-900">00</div>
							<div className="text-xs text-gray-500 mt-1">+0% from last month</div>
						</div>
						<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<span className="text-2xl">👥</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div className="flex items-center justify-between">
						<div>
							<div className="text-sm font-medium text-gray-600 mb-1">Total Earning</div>
							<div className="text-3xl font-bold text-gray-900">$00.00</div>
							<div className="text-xs text-gray-500 mt-1">+0% from last month</div>
						</div>
						<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
							<span className="text-2xl">💰</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div className="flex items-center justify-between">
						<div>
							<div className="text-sm font-medium text-gray-600 mb-1">Today Earning</div>
							<div className="text-3xl font-bold text-green-600">$00.00</div>
							<div className="text-xs text-green-500 mt-1">+0% from yesterday</div>
						</div>
						<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
							<span className="text-2xl">📈</span>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div className="flex items-center justify-between">
						<div>
							<div className="text-sm font-medium text-gray-600 mb-1">Conversion Rate</div>
							<div className="text-3xl font-bold text-gray-900">0%</div>
							<div className="text-xs text-gray-500 mt-1">+0% from last month</div>
						</div>
						<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
							<span className="text-2xl">🎯</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Table */}
				<div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
					<div className="p-6 border-b border-gray-200">
						<h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
						<p className="text-sm text-gray-600">Latest lead submissions and their status</p>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.R</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Email</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{Array.from({ length: 10 }).map((_, i) => (
									<tr key={i} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
												Pending
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Right panel cards */}
				<div className="space-y-6">
					<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
						<div className="flex items-center justify-between mb-4">
							<h4 className="text-sm font-medium text-gray-600">Referral Earning</h4>
							<span className="text-2xl">👥</span>
						</div>
						<div className="text-3xl font-bold text-gray-900">$00.00</div>
						<div className="text-xs text-gray-500 mt-1">+0% from last month</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
						<div className="flex items-center justify-between mb-4">
							<h4 className="text-sm font-medium text-gray-600">Course Sale Earning</h4>
							<span className="text-2xl">📚</span>
						</div>
						<div className="text-3xl font-bold text-gray-900">$00.00</div>
						<div className="text-xs text-gray-500 mt-1">+0% from last month</div>
					</div>
					<div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-sm p-6 text-white">
						<div className="flex items-center justify-between mb-4">
							<h4 className="text-sm font-medium">Grand Total Earning</h4>
							<span className="text-2xl">💰</span>
						</div>
						<div className="text-4xl font-extrabold">$0.00</div>
						<div className="text-xs opacity-90 mt-1">Total lifetime earnings</div>
					</div>
				</div>
			</div>

			{/* Bottom course widgets */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Courses</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
					{[
						{ title: 'Tally prime Full Course', img: '/E1.png' },
						{ title: 'Web Designing Full Course', img: '/seo.png' },
						{ title: 'DSP Special Earning Course', img: '/dsp.png' },
						{ title: 'Tally prime Full Course', img: '/F1.png' },
						{ title: 'Web Designing Full Course', img: '/G1.png' },
					].map((course, idx) => (
						<div key={idx} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
							<div className="h-24 w-full bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden shadow-sm">
								<img src={course.img} alt={course.title} className="h-full object-contain" />
							</div>
							<div className="text-sm font-semibold text-gray-900">{course.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}


