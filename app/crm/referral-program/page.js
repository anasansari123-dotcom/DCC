'use client';

export default function ReferralProgramPage() {
	return (
		<div className="space-y-6">
			<div className="bg-white border rounded-md p-4">
				<h2 className="text-lg font-semibold">Referral Program</h2>
				<p className="text-sm text-gray-600 mt-1">Invite friends and earn rewards when they join.</p>
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
					<div className="border rounded-md p-3">
						<div className="text-gray-700">Your Referral Link</div>
						<div className="mt-1 flex gap-2">
							<input readOnly className="flex-1 border rounded px-2 py-1" value="https://dcc.example/ref/781DCC01" />
							<button className="px-3 py-1 rounded bg-gray-900 text-white">Copy</button>
						</div>
					</div>
					<div className="border rounded-md p-3">
						<div className="text-gray-700">Earnings Summary</div>
						<div className="mt-2 grid grid-cols-3 gap-2 text-center">
							<div className="rounded-md bg-green-100 p-3">
								<div className="text-xs">Accepted</div>
								<div className="text-2xl font-bold text-green-700">00</div>
							</div>
							<div className="rounded-md bg-blue-100 p-3">
								<div className="text-xs">Pending</div>
								<div className="text-2xl font-bold text-blue-700">00</div>
							</div>
							<div className="rounded-md bg-yellow-100 p-3">
								<div className="text-xs">Total</div>
								<div className="text-2xl font-bold text-yellow-700">$0.00</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				{[
					{ title: 'Tally prime Full Course', img: '/E1.png' },
					{ title: 'Web Designing Full Course', img: '/seo.png' },
					{ title: 'DSP Special Earning Course', img: '/dsp.png' },
					{ title: 'Tally prime Full Course', img: '/F1.png' },
					{ title: 'Web Designing Full Course', img: '/G1.png' },
				].map((c, idx) => (
					<div key={idx} className="bg-white border rounded-md p-3 text-center">
						<div className="h-28 w-full bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
							<img src={c.img} alt={c.title} className="h-full object-contain" />
						</div>
						<div className="text-sm font-semibold">{c.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}


