'use client';

export default function LeadAddPage() {
	return (
		<div className="space-y-6">
			{/* Page Header */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
				<h1 className="text-2xl font-bold text-gray-900 mb-2">Add New Lead</h1>
				<p className="text-gray-600">Fill in the details below to add a new lead to your system.</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Lead form */}
				<div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
							<span className="text-2xl">➕</span>
						</div>
						<div>
							<h2 className="text-lg font-semibold text-gray-900">Lead Information</h2>
							<p className="text-sm text-gray-600">Please fill all details of your lead below</p>
						</div>
					</div>
					<form className="space-y-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Client Name</div>
								<input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter client name" />
							</label>
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Client Email</div>
								<input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="name@example.com" />
							</label>
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Client Website</div>
								<input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://" />
							</label>
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Contact Number</div>
								<input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 ..." />
							</label>
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Country</div>
								<select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>Select Country</option>
									<option>India</option>
									<option>USA</option>
									<option>UK</option>
									<option>Canada</option>
								</select>
							</label>
							<label className="block">
								<div className="text-sm font-medium text-gray-700 mb-2">Lead Type</div>
								<select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>Select Type</option>
									<option>Hot Lead</option>
									<option>Warm Lead</option>
									<option>Cold Lead</option>
								</select>
							</label>
						</div>
						<label className="block">
							<div className="text-sm font-medium text-gray-700 mb-2">Full Message with Reply</div>
							<textarea rows={6} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Write message..."></textarea>
						</label>
						<div className="flex gap-3">
							<button type="button" className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Submit Lead</button>
							<button type="button" className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">Clear Form</button>
						</div>
					</form>
				</div>

				{/* Stats */}
				<div className="space-y-6">
					<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Statistics</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
								<div className="text-sm font-medium text-green-700 mb-1">Total Accepted</div>
								<div className="text-3xl font-bold text-green-800">00</div>
								<div className="text-xs text-green-600 mt-1">+0% this month</div>
							</div>
							<div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 text-center border border-red-200">
								<div className="text-sm font-medium text-red-700 mb-1">Total Rejected</div>
								<div className="text-3xl font-bold text-red-800">00</div>
								<div className="text-xs text-red-600 mt-1">+0% this month</div>
							</div>
							<div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200">
								<div className="text-sm font-medium text-orange-700 mb-1">Total Duplicates</div>
								<div className="text-3xl font-bold text-orange-800">00</div>
								<div className="text-xs text-orange-600 mt-1">+0% this month</div>
							</div>
							<div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 text-center text-white">
								<div className="text-sm font-medium mb-1">Total N/L</div>
								<div className="text-3xl font-bold">00</div>
								<div className="text-xs opacity-75 mt-1">Not Lead count</div>
							</div>
						</div>
						<div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
							<p className="text-xs text-blue-700">
								<strong>Note:</strong> Reject and Duplicate totals = N/L (Not Lead count)
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Course widgets */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Courses</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
					{[
						{ title: 'Tally prime Full Course', img: '/E1.png' },
						{ title: 'Web Designing Full Course', img: '/seo.png' },
						{ title: 'DSP Special Earning Course', img: '/dsp.png' },
						{ title: 'Tally prime Full Course', img: '/F1.png' },
						{ title: 'Web Designing Full Course', img: '/G1.png' },
					].map((c, idx) => (
						<div key={idx} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
							<div className="h-24 w-full bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden shadow-sm">
								<img src={c.img} alt={c.title} className="h-full object-contain" />
							</div>
							<div className="text-sm font-semibold text-gray-900">{c.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}


