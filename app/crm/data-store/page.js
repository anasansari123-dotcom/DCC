'use client';

import Link from 'next/link';

export default function DataStorePage() {
	const rows = [
		{ id: '781/DCC/01', date: '04-07-2025', service: 'SEO Service Based Data (Mix)', status: 'download' },
		{ id: '781/DCC/01', date: '05-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
		{ id: '781/DCC/01', date: '06-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
		{ id: '781/DCC/01', date: '07-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
		{ id: '781/DCC/01', date: '08-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
		{ id: '781/DCC/01', date: '09-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
		{ id: '781/DCC/01', date: '10-07-2025', service: 'SEO Service Based Data (Mix)', status: 'locked' },
	];

	return (
		<div className="space-y-6">
			<div className="text-3xl sm:text-4xl font-extrabold tracking-wide">Get Daily Data Here !</div>

			<div className="bg-white border rounded-md">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 border-b text-sm">
					<div>
						<div>Every Day you can download a new data here !</div>
						<div className="text-gray-500">Note: Locked data will be open the next date according the Date!</div>
					</div>
					<label className="flex items-center gap-2 shrink-0">
						<span className="text-gray-700">Date :</span>
						<input type="date" className="border rounded px-2 py-1 text-sm" />
					</label>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead className="bg-gray-100">
							<tr>
								<th className="p-2 text-left w-40">User ID</th>
								<th className="p-2 text-left w-40">Date</th>
								<th className="p-2 text-left">Service Based Data</th>
								<th className="p-2 text-left w-40">Download !</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((r, i) => (
								<tr key={i} className="odd:bg-white even:bg-gray-50">
									<td className="p-2 text-blue-600 underline">
										<Link href="#">{r.id}</Link>
									</td>
									<td className="p-2">{r.date}</td>
									<td className="p-2">{r.service}</td>
									<td className="p-2">
										{r.status === 'download' ? (
											<button className="px-3 py-1 rounded-full bg-gray-800 text-white text-xs">Download</button>
										) : (
											<button className="px-3 py-1 rounded-full bg-gray-300 text-gray-600 text-xs cursor-not-allowed">Locked</button>
										)}
									</td>
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


