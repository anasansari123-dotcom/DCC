'use client';

export default function SupportPage() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="bg-white border rounded-md p-4">
					<h2 className="text-lg font-semibold">Create Support Ticket</h2>
					<form className="mt-3 space-y-3 text-sm">
						<input className="w-full border rounded px-2 py-1" placeholder="Subject" />
						<textarea rows={6} className="w-full border rounded px-2 py-1" placeholder="Describe your issue..."></textarea>
						<button type="button" className="px-4 py-1.5 rounded bg-blue-600 text-white">Submit Ticket</button>
					</form>
				</div>
				<div className="bg-white border rounded-md p-4">
					<h3 className="font-semibold">Recent Tickets</h3>
					<table className="w-full mt-2 text-sm">
						<thead className="bg-gray-100">
							<tr>
								<th className="p-2 text-left">ID</th>
								<th className="p-2 text-left">Subject</th>
								<th className="p-2 text-left">Status</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: 5 }).map((_, i) => (
								<tr key={i} className="odd:bg-white even:bg-gray-50">
									<td className="p-2">#{1000 + i}</td>
									<td className="p-2">-</td>
									<td className="p-2">Open</td>
								</tr>
							))}
						</tbody>
					</table>
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


